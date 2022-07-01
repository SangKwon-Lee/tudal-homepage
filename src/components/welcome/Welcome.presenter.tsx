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
            투자의 즐거움을 느낄 수 있는 테마 기반 미국 주식 투자 정보 서비스
          </WelcomeContentsText>
        </WelcomeContents>
        <WelcomeContents>
          <WelcomeLogoWrapper>
            <WelcomeLogo src={NewsLogo} />
            <WelcomeLogoText>뉴스스탁</WelcomeLogoText>
          </WelcomeLogoWrapper>
          <WelcomeContentsLine />
          <WelcomeContentsText>
            실시간 투자뉴스의 핵심 키워드를 중심으로 투자정보 제공
          </WelcomeContentsText>
        </WelcomeContents>
        <WelcomeContents>
          <WelcomeLogoWrapper>
            <WelcomeLogo src={TudalLogoPng} />
            <WelcomeLogoText>투자의달인</WelcomeLogoText>
          </WelcomeLogoWrapper>
          <WelcomeContentsLine />
          <WelcomeContentsText>
            투자자에게 꼭 맞는 투자정보를 가장 쉽고, 빠르게 매칭해주는 AI
            투자정보 앱
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
