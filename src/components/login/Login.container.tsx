import { GlobalContext } from "../../App";
import LoginPresenter from "./Login.presenter";
import { encrypted } from "../../commons/func/hash";
import { apiServer } from "../../commons/axios/axios";
import { useContext, useEffect, useRef, useState } from "react";
import { setCookie } from "../../commons/func/cookie";
import { useNavigate } from "react-router";

interface LoginContainerProps {
  path: string;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ path }) => {
  const navigate = useNavigate();
  //* 토큰 전역 함수
  const { setUserData } = useContext(GlobalContext);

  //* 로그인 정보
  const [loginInput, setLoginInput] = useState({
    name: "",
    phone: "",
    authCode: "",
  });

  //* 인증 관련 상태
  const [auth, setAuth] = useState({
    send: false,
    ok: false,
    code: "",
    timer: false,
    error: false,
    timeout: false,
  });

  //* 타이머 관련 상태 및 함수 useEffect
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);
  useEffect(() => {
    if (auth.timer) {
      //@ts-ignore
      timerId.current = setInterval(() => {
        //@ts-ignore
        setMin(parseInt(time.current / 60));
        //@ts-ignore
        setSec(time.current % 60);
        time.current -= 1;
      }, 1000);
      //@ts-ignore
      return () => clearInterval(timerId.current);
    }
  }, [auth.timer]);

  // *타이머
  useEffect(() => {
    if (auth.timer) {
      if (time.current <= -1) {
        //@ts-ignore
        clearInterval(timerId.current);
        // dispatch event
      }
    }
  }, [sec, auth.timer]);

  //* 로그인 정보 인풋
  const handleLoginInput = (e: any) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  //* 인증번호 발송 함수
  const handleSMSSend = async () => {
    const randomCode = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    try {
      const { data } = await apiServer.post("/user/checkProps", {
        phoneNumber: loginInput.phone,
      });
      if (data.length === 0) {
        alert("회원정보가 없습니다.");
        return;
      }
      if (data[0].name === loginInput.name) {
        try {
          const { data } = await apiServer.post("/auth/smsSend", {
            phone: loginInput.phone,
            message: `[투자의달인] 인증번호는 [${randomCode}]입니다.`,
          });
          if (data.code === "00") {
            setAuth({
              ...auth,
              send: true,
              code: randomCode,
              timer: true,
              timeout: false,
            });
            setTimeout(() => {
              setAuth({
                ...auth,
                code: "",
                send: true,
                timer: false,
                timeout: true,
              });
            }, 60 * 3 * 1000 + 2000);
          } else {
            alert(
              "SMS 인증요청  5회를 모두 사용하였습니다. \n 24시간 이후 다시 요청해 주시기 바랍니다."
            );
          }
        } catch (e) {}
      } else {
        alert("회원정보가 일치하지 않습니다.");
        return;
      }
    } catch (e) {
      alert("회원정보가 없습니다.");
      return;
    }
  };

  //* 인증번호 체크 후 로그인
  const handleLogin = async () => {
    if (auth.timeout) {
      alert("입력시간이 초과되었습니다.");
      return;
    }
    if (auth.code === loginInput.authCode) {
      try {
        const result = await apiServer.post("/user/checkProps", {
          phoneNumber: loginInput.phone,
        });
        await apiServer.delete("/auth/smsSend", {
          data: {
            phone: loginInput.phone,
          },
        });
        setAuth({
          ...auth,
          code: "",
        });
        setUserData(result.data[0]);
        setCookie("tudalUser", encrypted(result.data[0].userId), 30);
        //@ts-ignore
        var receiver = document.getElementById("receiver").contentWindow;
        receiver.postMessage(
          encrypted(result.data[0].userId),
          "https://us.tudal.co.kr"
        );

        if (path === "tudalus") {
          window.location.href = "https://us.tudal.co.kr";
        } else {
          navigate("/mypage");
        }
      } catch (e) {}
    } else {
      setAuth({
        ...auth,
        error: true,
      });
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  //* 엔터 키 누를 시 로그인 실행
  const onEnterLogin = (e: any) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <LoginPresenter
      min={min}
      sec={sec}
      path={path}
      auth={auth}
      loginInput={loginInput}
      handleLogin={handleLogin}
      onEnterLogin={onEnterLogin}
      handleSMSSend={handleSMSSend}
      handleLoginInput={handleLoginInput}
    />
  );
};

export default LoginContainer;
