import { Body } from "../commons/ui/commonStyle";
import {
  WelcomeContents,
  WelcomeContentsLine,
  WelcomeContentsText,
  WelcomeContentsWrapper,
  WelcomeLogo,
  WelcomeLogoText,
  WelcomeLogoWrapper,
  WelcomeSignupBtn,
  WelcomeSubTitle,
  WelcomeTitle,
} from "../welcome/Welcome.style";
import TudalLogoPng from "../../assets/images/tudal_logo.png";
import TudalUsLogo from "../../assets/images/tudalus_logo02.svg";
import NewsLogo from "../../assets/images/newsstock.svg";
import { useNavigate } from "react-router";
const WelcomePresenter = () => {
  const navigate = useNavigate();
  return (
    <Body>
      <WelcomeTitle>투자의달인에 오신 것을 환영합니다</WelcomeTitle>
      <WelcomeSubTitle>
        투자의달인 회원가입 후 <br /> 투달러스와 뉴스스탁 서비스를 함께 이용해
        보세요
      </WelcomeSubTitle>
      <WelcomeContentsWrapper>
        <WelcomeContents>
          <WelcomeLogoWrapper>
            <WelcomeLogo src={TudalUsLogo} />
            <WelcomeLogoText>투달러스</WelcomeLogoText>
          </WelcomeLogoWrapper>
          <WelcomeContentsLine />
          <WelcomeContentsText>
            투달러스 두줄소개입니다 두줄소개입니다. 두줄소개입니다.
          </WelcomeContentsText>
        </WelcomeContents>
        <WelcomeContents>
          <WelcomeLogoWrapper>
            <WelcomeLogo src={NewsLogo} />
            <WelcomeLogoText>뉴스스탁</WelcomeLogoText>
          </WelcomeLogoWrapper>
          <WelcomeContentsLine />
          <WelcomeContentsText>
            뉴스스탁 두줄소개입니다 두줄소개입니다. 두줄소개입니다.
          </WelcomeContentsText>
        </WelcomeContents>
        <WelcomeContents>
          <WelcomeLogoWrapper>
            <WelcomeLogo src={TudalLogoPng} />
            <WelcomeLogoText>투자의달인</WelcomeLogoText>
          </WelcomeLogoWrapper>
          <WelcomeContentsLine />
          <WelcomeContentsText>
            투자의달인 두줄소개입니다 두줄소개입니다. 두줄소개입니다.
          </WelcomeContentsText>
        </WelcomeContents>
      </WelcomeContentsWrapper>
      <WelcomeSignupBtn onClick={() => navigate("/signup")}>
        회원가입
      </WelcomeSignupBtn>
    </Body>
  );
};

export default WelcomePresenter;
