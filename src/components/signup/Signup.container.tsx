import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SignupPresenter from "./Signup.presenter";
import { apiServer } from "../../commons/axios/axios";
import { changeBirth } from "../../commons/func/changeBirth";
import useScrollReset from "../commons/hooks/useScrollReset";

interface SignupContainerProps {
  path: string;
}

const SignupContainer: React.FC<SignupContainerProps> = ({ path }) => {
  const navigate = useNavigate();
  useScrollReset();
  // * 회원가입 정보 관리
  const [signupInput, setSignupInput] = useState({
    name: "",
    birth: "",
    gender: "",
    phoneNumber: "",
    telecomCode: "",
  });

  // * 동의체크
  const [isCheck, setIsCheck] = useState([false, false, false, false, false]);

  //* 알뜰폰 보기
  const [isView, setIsView] = useState(false);

  //* ARS 인증 버튼
  const [isAuth, setIsAuth] = useState({
    isBtn: false,
    isAuthOk: false,
  });

  //* ARS 인증 코드
  const [isAuthCode, setIsAuthCode] = useState("");

  useEffect(() => {
    if (
      isCheck[0] &&
      isCheck[1] &&
      isCheck[2] &&
      isCheck[3] &&
      signupInput.birth &&
      signupInput.name &&
      signupInput.phoneNumber &&
      signupInput.telecomCode &&
      signupInput.gender
    ) {
      setIsAuth({
        ...isAuth,
        isBtn: true,
      });
    } else {
      setIsAuth({
        ...isAuth,
        isBtn: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck, signupInput]);

  // * ARS 인증 받기
  const handlAuthArs = async () => {
    const { name, gender, phoneNumber, birth, telecomCode } = signupInput;
    try {
      const newData = {
        name,
        telecomCode,
        phoneNumber,
        birthday: changeBirth(birth),
        gender,
        nation: "1",
      };
      const { data, status } = await apiServer.post(`/user/authArs`, newData);
      if (status === 200 && data.result === "00") {
        const { authNumber, authReqNumber, requestTime } = data;
        setIsAuthCode(authNumber);

        handelRequestVerification(authNumber, authReqNumber, requestTime);
      } else {
        alert("인증에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (e) {
      alert("인증에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // * ARS 인증 검증
  const handelRequestVerification = async (
    authNumber: string,
    authReqNumber: string,
    requestTime: string
  ) => {
    const { name, gender, phoneNumber, birth, telecomCode } = signupInput;
    try {
      const newData = {
        name,
        phoneNumber,
        telecomCode,
        gender,
        birthday: changeBirth(birth),
        nation: "1",
        authNumber,
        authReqNumber,
        requestTime,
      };
      const { data, status } = await apiServer.post(`/user/verifyArs`, newData);
      if (status === 200 && data.result === "00") {
        const { ci, di } = data;
        handleSignup(ci, di);
        handleFetchArsResult(authReqNumber, requestTime);
      } else {
        alert("인증에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (e) {
      alert("인증에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // * ARS 검증 결과
  const handleFetchArsResult = async (
    authReqNumber: string,
    requestTime: string
  ) => {
    const { data, status } = await apiServer.post(`/user/fetchArsResult`, {
      requestTime,
      authReqNumber,
    });
    if (status === 200 && data.isVerify === "Y") {
      setIsAuthCode("");
      setIsAuth({
        ...isAuth,
        isAuthOk: true,
      });
    } else {
      alert("인증에 실패했습니다. 다시 시도해주세요.");
    }
  };

  //* 회원가입
  const handleSignup = async (ci: string, di: string) => {
    const { name, gender, phoneNumber, birth, telecomCode } = signupInput;
    try {
      const { data: checkUser, status } = await apiServer.post(
        `/user/checkProps`,
        {
          phoneNumber: signupInput.phoneNumber,
        }
      );
      if (status === 200 && checkUser) {
        let newUser = {};
        // 이미 가입된 유저의 경우
        if (checkUser.length > 0) {
          newUser = {
            name,
            phoneNumber,
            telecomCode,
            gender,
            birthday: changeBirth(birth),
            nation: "1",
            ci,
            di,
            userId: checkUser[0].userId,
            type: "reuse",
          };
        } else {
          newUser = {
            name,
            phoneNumber,
            telecomCode,
            gender,
            birthday: changeBirth(birth),
            nation: "1",
            ci,
            di,
            type: "new",
          };
        }
        const { data: createUser, status: createStatus } = await apiServer.post(
          `/user`,
          newUser
        );
        if (createStatus === 200) {
          if (Array.isArray(createUser)) {
            if (createUser.length > 0) {
              try {
                /**
                 * 신규 가입시 마케팅 연동 기능. userId가 없는거나 번호 조회시 해당 유저가 없었을 때
                 */
                //@ts-ignore
                if (!newUser?.userId || checkUser.data.length === 0) {
                  // 맥스 시스템즈 연동
                  const eventResponse = await apiServer.get(
                    `/marketing/maxx/signup/${signupInput.phoneNumber}`
                  );
                  if (eventResponse.status === 200) {
                    const eventUser =
                      eventResponse.data && eventResponse.data.length > 0
                        ? eventResponse.data[0]
                        : null;
                    if (
                      eventUser &&
                      eventUser.name.trim() === signupInput.name.trim()
                    ) {
                      await apiServer.put(
                        `/marketing/maxx/signup/${eventUser.id}`
                      );
                    }
                  }
                }
              } catch (e) {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
                navigate("/");
              } finally {
                // setUser(createResponse.data[0]);
              }
            }
            // 유저가 만들어지지 않은 경우
            else {
              alert("오류가 발생했습니다. 다시 시도해주세요.");
              navigate("/");
            }
          } else {
            if (Object.keys(createUser).length > 0 && checkUser.userId) {
              // setUser(createUser);
            }
            // 유저가 만들어지지 않은 경우
            else {
              alert("오류가 발생했습니다. 다시 시도해주세요.");
              navigate("/");
            }
          }
        }
      } else {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
        navigate("/");
      }
    } catch (e) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
      navigate("/");
    }
  };

  //* 정보 관리 함수
  const handleSignupInput = (e: any) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
    setIsView(false);
  };

  // * 체크 관리 함수
  const handleCheck = (e: any) => {
    if (e.target.id === "all") {
      if (isCheck.filter((data: boolean) => data === true).length === 5) {
        setIsCheck(isCheck.map(() => false));
      } else {
        setIsCheck(isCheck.map(() => true));
      }
    } else {
      let newCheck = [...isCheck];
      newCheck[Number(e.target.id)] = !isCheck[Number(e.target.id)];
      setIsCheck(newCheck);
    }
  };

  // * 알뜰폰 보기
  const handelIsView = () => {
    setIsView(() => !isView);
  };

  return (
    <SignupPresenter
      path={path}
      isAuth={isAuth}
      isView={isView}
      isCheck={isCheck}
      isAuthCode={isAuthCode}
      signupInput={signupInput}
      handleCheck={handleCheck}
      handlAuthArs={handlAuthArs}
      handleIsView={handelIsView}
      handleSignupInput={handleSignupInput}
    />
  );
};
export default SignupContainer;
