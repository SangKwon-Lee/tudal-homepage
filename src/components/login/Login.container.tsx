import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../App";
import LoginPresenter from "./Login.presenter";

const LoginContainer = () => {
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

  //* 로그인 화면 단계
  const [step, setStep] = useState(0);

  //* css 변경

  const [isActive, setIsActive] = useState("");

  //* 타이머 관련 상태 및 함수 useEffect
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [min, setMin] = useState(0);
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
  useEffect(() => {
    if (auth.timer) {
      if (time.current <= 0) {
        //@ts-ignore
        clearInterval(timerId.current);
        // dispatch event
      }
    }
  }, [sec, auth.timer]);
  //* 로그인 정보 인풋
  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const { data } = await axios.post(
        "https://api.tudal.co.kr/api/user/checkProps",
        {
          phoneNumber: loginInput.phone,
        }
      );
      if (data.length === 0) {
        alert("회원정보가 없습니다.");
        return;
      }
      if (data[0].name === loginInput.name) {
        try {
          await axios.post("https://api.tudal.co.kr/api/auth/smsSend", {
            phone: loginInput.phone,
            message: `[투자의달인] 인증번호는 [${randomCode}]입니다.`,
          });
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
        } catch (e) {
          console.log(e);
        }
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
    if (auth.code === loginInput.authCode) {
      try {
        const result = await axios.post(
          "https://api.tudal.co.kr/api/user/checkProps",
          {
            phoneNumber: loginInput.phone,
          }
        );
        setAuth({
          ...auth,
          code: "",
        });
        setUserData(result.data[0]);
        sessionStorage.setItem("name", result.data[0].name);
        sessionStorage.setItem("userId", result.data[0].userId);
        setStep(() => step + 1);
      } catch (e) {
        console.log(e);
      }
    } else {
      setAuth({
        ...auth,
        error: true,
      });
    }
  };

  return (
    <LoginPresenter
      handleLoginInput={handleLoginInput}
      step={step}
      auth={auth}
      loginInput={loginInput}
      handleSMSSend={handleSMSSend}
      handleLogin={handleLogin}
      setIsActive={setIsActive}
      isActive={isActive}
    />
  );
};

export default LoginContainer;
