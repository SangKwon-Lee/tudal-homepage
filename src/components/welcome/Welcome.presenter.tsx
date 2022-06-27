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
import { changePath } from "../../commons/func/changePath";
import { customNavigate } from "../../commons/func/customNavigate";

interface WelcomeProps {
  path: string;
}
const WelcomePresenter: React.FC<WelcomeProps> = ({ path }) => {
  const navigate = useNavigate();
  return (
    <Body>
      <WelcomeTitle>{changePath(path)}에 오신 것을 환영합니다</WelcomeTitle>
      <WelcomeSubTitle>
        {changePath(path)} 회원가입 후 <br /> 투달러스, 뉴스스탁, 투자의달인
        서비스를 함께 이용해 보세요
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
      <WelcomeSignupBtn
        onClick={() => {
          navigate(customNavigate(path, "signup"));
        }}
      >
        회원가입
      </WelcomeSignupBtn>
    </Body>
  );
};

export default WelcomePresenter;
