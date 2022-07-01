import {
  LoginInputTitle,
  LoginInputWrapper,
  LoginInput,
  LoginAuthBtn,
  LoginBtn,
  LoginError,
  LoginTimer,
  LoginAuthInputBox,
  LoginSubText,
} from "./Login.style";
import { UserAuth, UserLoginInput } from "../../commons/types/types";
import { Body, Contents, Title } from "../commons/ui/commonStyle";
import { changePath } from "../../commons/func/changePath";

interface ILoginProps {
  min: number;
  sec: number;
  path: string;
  auth: UserAuth;
  loginInput: UserLoginInput;
  handleLogin: () => Promise<void>;
  onEnterLogin: (e: any) => void;
  handleSMSSend: () => Promise<void>;
  handleLoginInput: (e: any) => void;
}

const LoginPresenter: React.FC<ILoginProps> = ({
  min,
  sec,
  path,
  auth,
  loginInput,
  handleLogin,
  onEnterLogin,
  handleSMSSend,
  handleLoginInput,
}) => {
  return (
    <>
      <Body>
        <>
          <Contents>
            <Title>{changePath(path)} 회원인증 로그인</Title>
            <LoginSubText>
              {changePath(path)} 회원가입인증으로 가입/로그인을 진행합니다.
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
                onKeyPress={onEnterLogin}
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
      </Body>
    </>
  );
};
export default LoginPresenter;
