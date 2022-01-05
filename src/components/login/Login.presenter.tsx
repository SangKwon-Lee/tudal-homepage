import {
  LoginBody,
  LoginContentsWrapper,
  LoginInputTitle,
  LoginTitle,
  LoginWrapper,
  LoginInputWrapper,
  LoginInput,
  LoginAuthBtn,
  LoginAuthInput,
  LoginBtn,
  LoginAuthInputWrapper,
  LoginSuccessTitle,
  LoginSuccessWrapper,
  LoginError,
  LoginSuccessImg,
  LoginSuccessBtn,
} from "./Login.style";
import success1Img from "../../assets/images/success1.png";
import success2Img from "../../assets/images/success2.png";
import { useNavigate } from "react-router";

interface ILoginProps {
  handleLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step: number;
  loginInput: {
    name: string;
    phone: string;
    authCode: string;
  };
  auth: {
    send: boolean;
    ok: boolean;
    code: string;
    timer: boolean;
    error: boolean;
    timeout: boolean;
  };
  handleSMSSend: () => Promise<void>;
  handleLogin: () => Promise<void>;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  isActive: string;
}

const LoginPresenter: React.FC<ILoginProps> = ({
  handleLoginInput,
  step,
  loginInput,
  handleSMSSend,
  auth,
  handleLogin,
  setIsActive,
  isActive,
}) => {
  const navigator = useNavigate();
  return (
    <>
      <LoginWrapper>
        <LoginBody>
          {step === 0 && (
            <>
              <LoginTitle>투자의 달인 회원인증 로그인</LoginTitle>
              <LoginContentsWrapper>
                <LoginInputWrapper style={{ marginBottom: "60px" }}>
                  <LoginInputTitle>이름</LoginInputTitle>
                  <LoginInput
                    placeholder="실명을 입력해주세요."
                    name="name"
                    onChange={handleLoginInput}
                    disabled={auth.ok}
                    onClick={() => setIsActive("name")}
                    isActive={isActive === "name" ? true : false}
                  />
                </LoginInputWrapper>
                <LoginInputWrapper>
                  <LoginInputTitle>휴대폰 번호</LoginInputTitle>
                  <LoginAuthInputWrapper>
                    <LoginInput
                      placeholder="'-'없이 숫자만 11자리 입력"
                      style={{ width: "270px" }}
                      type="number"
                      onChange={handleLoginInput}
                      name="phone"
                      disabled={auth.ok}
                      onClick={() => setIsActive("phone")}
                      isActive={isActive === "phone" ? true : false}
                    />
                    <LoginAuthBtn
                      disabled={
                        !loginInput.name || !loginInput.phone || auth.timer
                      }
                      onClick={handleSMSSend}
                    >
                      {auth.timeout ? "인증번호 재전송" : "인증번호 받기"}
                    </LoginAuthBtn>
                  </LoginAuthInputWrapper>
                  <LoginAuthInput
                    type="number"
                    placeholder="인증번호를 입력해주세요."
                    disabled={auth.ok}
                    name="authCode"
                    onChange={handleLoginInput}
                    onClick={() => setIsActive("authCode")}
                    isActive={isActive === "authCode" ? true : false}
                  ></LoginAuthInput>
                </LoginInputWrapper>
                {auth.send && !auth.timeout && (
                  <>
                    <LoginError>
                      인증번호를 발송했습니다. (유효시간 3분)
                      <br />
                      인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여
                      주세요.
                    </LoginError>
                  </>
                )}
                {auth.error && (
                  <LoginError>
                    입력하신 본인인증번호가 일치하지 않습니다.
                  </LoginError>
                )}
                {auth.timeout && (
                  <LoginError>입력시간이 초과되었습니다.</LoginError>
                )}
                {auth.send && (
                  <LoginBtn onClick={handleLogin}>회원 인증 로그인</LoginBtn>
                )}
              </LoginContentsWrapper>
            </>
          )}
          {step === 1 && (
            <>
              <LoginSuccessWrapper>
                <LoginSuccessImg
                  style={{
                    position: "relative",
                    top: "40px",
                    zIndex: -1,
                    left: "60px",
                  }}
                  src={success1Img}
                />
                <LoginSuccessImg src={success2Img} />
                <LoginSuccessTitle>
                  회원인증에 성공하였습니다.
                </LoginSuccessTitle>
                <LoginSuccessBtn
                  onClick={() => {
                    navigator("/goldCharge");
                  }}
                >
                  골드 충전하러 가기
                </LoginSuccessBtn>
              </LoginSuccessWrapper>
            </>
          )}
        </LoginBody>
      </LoginWrapper>
    </>
  );
};
export default LoginPresenter;
