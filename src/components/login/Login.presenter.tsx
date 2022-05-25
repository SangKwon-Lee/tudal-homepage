import {
  LoginInputTitle,
  LoginInputWrapper,
  LoginInput,
  LoginAuthBtn,
  LoginBtn,
  LoginSuccessTitle,
  LoginSuccessWrapper,
  LoginError,
  LoginSuccessImg,
  LoginSuccessBtn,
  LoginTimer,
  LoginAuthInputBox,
  LoginSubText,
  LoginSuccessBtnWapper,
} from "./Login.style";
import successLogin from "../../assets/images/login.png";
import { useNavigate } from "react-router";
import { UserAuth, UserLoginInput } from "../../commons/types/types";
import { Body, Contents, Title } from "../commons/ui/commonStyle";

interface ILoginProps {
  min: number;
  sec: number;
  step: number;
  auth: UserAuth;
  loginInput: UserLoginInput;
  handleLogin: () => Promise<void>;
  handleSMSSend: () => Promise<void>;
  handleLoginInput: (e: any) => void;
}

const LoginPresenter: React.FC<ILoginProps> = ({
  handleLoginInput,
  step,
  loginInput,
  handleSMSSend,
  auth,
  handleLogin,
  min,
  sec,
}) => {
  const navigator = useNavigate();
  return (
    <>
      <Body>
        {step === 0 ? (
          <>
            <Contents>
              <Title>투자의달인 회원인증 로그인</Title>
              <LoginSubText>
                투자의달인 회원가입인증으로 가입/로그인을 진행합니다.
              </LoginSubText>
              <LoginInputTitle>이름</LoginInputTitle>
              <LoginInput
                name="name"
                placeholder="실명을 입력해주세요."
                onChange={handleLoginInput}
                disabled={auth.ok}
              />
              <LoginSubText>
                입력하신 정보는 외부에 노출되지 않도록 안전하게 관리됩니다.
              </LoginSubText>
              <LoginInputTitle>휴대폰번호</LoginInputTitle>
              <LoginInputWrapper>
                <LoginInput
                  type="number"
                  placeholder="01012345678"
                  name="phone"
                  onChange={handleLoginInput}
                  disabled={auth.ok}
                />
                <LoginAuthBtn
                  disabled={!loginInput.name || !loginInput.phone || auth.timer}
                  onClick={handleSMSSend}
                >
                  인증번호 발송
                </LoginAuthBtn>
              </LoginInputWrapper>
              <LoginAuthInputBox>
                <LoginInput
                  type="number"
                  placeholder="인증번호를 입력해주세요"
                  name="authCode"
                  disabled={!auth.send}
                  onChange={handleLoginInput}
                />
                {auth.send && <LoginTimer>{`${min} : ${sec}`}</LoginTimer>}
              </LoginAuthInputBox>
              <LoginError>
                ∙ 인증번호가 오지 않으면 입력하신 정보가 정확한지 확인해 주세요.
                <br />∙ 인증번호 발송은 5회로 제한됩니다.
                <br />
                {auth.timeout && "∙ 입력시간이 초과되었습니다."}
              </LoginError>
              <LoginBtn disabled={!auth.send} onClick={handleLogin}>
                회원인증 로그인
              </LoginBtn>
            </Contents>
          </>
        ) : (
          <>
            <LoginSuccessWrapper>
              <LoginSuccessImg src={successLogin} alt="" />
              <LoginSuccessTitle>회원인증에 성공하였습니다.</LoginSuccessTitle>
              <LoginSuccessBtnWapper>
                <LoginSuccessBtn
                  style={{ marginRight: "30px" }}
                  onClick={() => {
                    navigator("/");
                  }}
                >
                  홈으로 가기
                </LoginSuccessBtn>
                <LoginSuccessBtn
                  onClick={() => {
                    navigator("/gold");
                  }}
                >
                  골드충전하러 가기
                </LoginSuccessBtn>
              </LoginSuccessBtnWapper>
            </LoginSuccessWrapper>
          </>
        )}
      </Body>
    </>
  );
};
export default LoginPresenter;
