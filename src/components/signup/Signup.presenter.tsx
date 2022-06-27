import { Body, Contents, Title } from "../commons/ui/commonStyle";
import {
  LoginInput,
  LoginInputTitle,
  LoginSubText,
  LoginSubTextBold,
} from "../login/Login.style";
import {
  CheckImg,
  SignupArsBody,
  SignupArsNum,
  SignupArsText,
  SignupARSText,
  SignupArsWrapper,
  SignupBirthCircle,
  SignupBirthDash,
  SignupBirthInput,
  SignupBirthWrapper,
  SignupBtnArrow,
  SignupCheckBody,
  SignupCheckBtn,
  SignupCheckLine,
  SignupCheckText,
  SignupCheckWrapper,
  SignupImg,
  SignupPhoneAddWrapper,
  SignupPhoneBtn,
  SignupPhoneBtnWrapper,
  SignupPhonePositionBtn,
  SignupPhonePositionWrapper,
  SignupRedLine,
  SignupSubText,
  SignupSuccessBody,
  SignupSuccessBtn,
  SignupSuccessImg,
  SignupSuccessSubText,
  SignupSuccessText,
  SignupSuccessWrapper,
  SingupCheckDetail,
  TitleBtn,
} from "./Signup.style";
import downArrow from "../../assets/images/downArrow02.png";
import checkGray from "../../assets/images/checkGray.png";
import checkColor from "../../assets/images/checkColor.png";
import altPng from "../../assets/images/alt.png";
import welcomeImg from "../../assets/images/welcome.svg";
import { phoneArr, phoneArr2, signupArr } from "../commons/option/signup";
import { isFrugalPhone, isPhone } from "../../commons/func/isPhone";
import { useNavigate } from "react-router";
import { changePath } from "../../commons/func/changePath";

interface SignupProps {
  path: string;
  isAuth: {
    isBtn: boolean;
    isAuthOk: boolean;
  };
  isView: boolean;
  isCheck: boolean[];
  signupInput: {
    name: string;
    birth: string;
    gender: string;
    phoneNumber: string;
    telecomCode: string;
  };
  isAuthCode: string;
  handleIsView: () => void;
  handlAuthArs: () => void;
  handleCheck: (e: any) => void;
  handleSignupInput: (e: any) => void;
}

const SignupPresenter: React.FC<SignupProps> = ({
  path,
  isAuth,
  isView,
  isCheck,
  isAuthCode,
  signupInput,
  handleCheck,
  handlAuthArs,
  handleIsView,
  handleSignupInput,
}) => {
  const { isAuthOk } = isAuth;
  const navigate = useNavigate();
  return (
    <>
      <Body>
        {isAuthCode.length === 0 && !isAuthOk ? (
          <>
            <Contents>
              <Title>{changePath(path)} 회원가입</Title>
              <SignupRedLine></SignupRedLine>
              <LoginSubText>
                {changePath(path)} 회원가입만해도 <br />
                <LoginSubTextBold>
                  투자의 달인, 투달러스, 뉴스스탁 서비스까지 한 번에
                </LoginSubTextBold>
                &nbsp; 이용하실 수 있습니다.
              </LoginSubText>
              <LoginInputTitle>이름</LoginInputTitle>
              <LoginInput
                name="name"
                placeholder="실명을 입력해주세요."
                onChange={handleSignupInput}
              />
              <LoginSubText>
                입력하신 정보는 외부에 노출되지 않도록 안전하게 관리됩니다.
              </LoginSubText>
              <LoginInputTitle>생년월일</LoginInputTitle>
              <SignupBirthWrapper>
                <SignupBirthInput
                  name="birth"
                  maxLength={6}
                  placeholder="생년월일 6자리"
                  onChange={handleSignupInput}
                />
                <SignupBirthDash></SignupBirthDash>
                <SignupBirthInput
                  name="gender"
                  maxLength={1}
                  style={{ maxWidth: "63px" }}
                  onChange={handleSignupInput}
                />
                {new Array(6).fill(6).map((__: any, index: any) => (
                  <SignupBirthCircle key={index} />
                ))}
              </SignupBirthWrapper>
              <LoginInputTitle>휴대폰번호</LoginInputTitle>
              <LoginInput
                maxLength={11}
                name="phoneNumber"
                placeholder="휴대폰 번호 11자리"
                onChange={handleSignupInput}
              />
              <SignupPhoneBtnWrapper>
                {phoneArr.map((data: any, index: any) => (
                  <SignupPhoneBtn
                    key={index}
                    name={data.name}
                    value={data.value}
                    onClick={handleSignupInput}
                    isActive={signupInput.telecomCode === data.value}
                  >
                    {data.text}
                  </SignupPhoneBtn>
                ))}
                <SignupPhoneAddWrapper>
                  <SignupPhoneBtn
                    onClick={handleIsView}
                    isActive={isFrugalPhone(signupInput.telecomCode)}
                  >
                    {isPhone(signupInput.telecomCode)}
                    <SignupBtnArrow src={downArrow} />
                  </SignupPhoneBtn>
                  {isView && (
                    <SignupPhonePositionWrapper>
                      {phoneArr2.map((data: any, index: any) => (
                        <SignupPhonePositionBtn
                          key={index}
                          name={data.name}
                          value={data.value}
                          onClick={handleSignupInput}
                          isActive={signupInput.telecomCode === data.value}
                        >
                          {data.text}
                        </SignupPhonePositionBtn>
                      ))}
                    </SignupPhonePositionWrapper>
                  )}
                </SignupPhoneAddWrapper>
              </SignupPhoneBtnWrapper>
              <SignupCheckBody>
                <TitleBtn onClick={handleCheck} id="all">
                  <Title id="all">
                    <CheckImg
                      src={
                        isCheck.filter((data: boolean) => data === true)
                          .length === 5
                          ? checkColor
                          : checkGray
                      }
                      id="all"
                    />
                    모든 서비스 약관에 동의합니다.
                  </Title>
                </TitleBtn>
                <SignupCheckLine />
                {signupArr.map((data: any, index: any) => (
                  <SignupCheckWrapper key={index}>
                    <SignupCheckText onClick={handleCheck} id={index}>
                      {
                        <CheckImg
                          id={index}
                          src={isCheck[index] ? checkColor : checkGray}
                        />
                      }
                      {data.text}
                    </SignupCheckText>
                    <SingupCheckDetail
                      onClick={() => window.open(data.link, "_blank")}
                    >
                      내용보기
                    </SingupCheckDetail>
                  </SignupCheckWrapper>
                ))}
              </SignupCheckBody>
              <SignupARSText>
                아래 ARS인증 버튼을 눌러 회원가입을 완료해주세요!
              </SignupARSText>
              <SignupCheckBtn disabled={!isAuth.isBtn} onClick={handlAuthArs}>
                ARS 인증받기
              </SignupCheckBtn>
            </Contents>
          </>
        ) : isAuthCode.length !== 0 && !isAuthOk ? (
          <>
            <Contents>
              <SignupArsBody>
                <SignupArsWrapper>
                  <SignupArsNum>{isAuthCode[0]}</SignupArsNum>
                  <SignupArsNum>{isAuthCode[1]}</SignupArsNum>
                  <SignupArsNum>{isAuthCode[2]}</SignupArsNum>
                  <SignupArsNum>{isAuthCode[3]}</SignupArsNum>
                </SignupArsWrapper>
                <SignupArsText>
                  수신되는 ARS 전화를 받은 후, <br />
                  안내 음성에 따라 위의 <br />
                  인증번호 4자리를 입력해주세요
                </SignupArsText>
                <SignupSubText>
                  <SignupImg src={altPng} /> 착신전환 기능 또는 수신차단 앱
                  사용시ARS인증이 불가합니다.
                </SignupSubText>
              </SignupArsBody>
            </Contents>
          </>
        ) : (
          <>
            <SignupSuccessBody>
              <SignupSuccessWrapper>
                <SignupSuccessImg src={welcomeImg} />
                <SignupSuccessText>
                  투자의달인 회원가입에 성공하였습니다.
                </SignupSuccessText>
                <SignupSuccessSubText>
                  투자의달인 로그인 한번으로
                  <br />
                  투달러스와 뉴스스탁 서비스를 함께 이용하실 수 있습니다.
                </SignupSuccessSubText>
                <SignupSuccessBtn
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  홈으로 가기
                </SignupSuccessBtn>
              </SignupSuccessWrapper>
            </SignupSuccessBody>
          </>
        )}
      </Body>
    </>
  );
};
export default SignupPresenter;
