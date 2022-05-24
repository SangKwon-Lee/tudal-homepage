import {
  FooterCompany,
  FooterWrapper,
  FooterContents,
  FooterCompanyWrapper,
  FooterCompanyLine,
  Footer,
  FooterCompanyBottomWrapper,
  FooterHead,
  FooterSNSWrapper,
  FooterSNS,
} from "./Footer.style";
import blogPNG from "../../../assets/images/logo_blog.png";
import facebookPNG from "../../../assets/images/logo_facebook.png";
import instaPNG from "../../../assets/images/logo_insta.png";
import youtubePNG from "../../../assets/images/logo_youtube.png";

const FooterPresenter = () => {
  return (
    <Footer>
      <FooterWrapper>
        <FooterCompanyWrapper>
          <FooterCompany
            onClick={() => window.open("https://innofin.co.kr/", "_blank")}
          >
            회사소개
          </FooterCompany>
          <FooterCompanyLine />
          <FooterCompany
            onClick={() =>
              window.open(
                "https://innofin.oopy.io/7f11afb0-f017-4354-8550-d8902f1135bc",
                "_blank"
              )
            }
          >
            서비스 이용약관
          </FooterCompany>
          <FooterCompanyLine />
          <FooterCompany
            onClick={() =>
              window.open(
                "https://innofin.oopy.io/4a94bc74-7a55-4590-9b70-0741dcb83114",
                "_blank"
              )
            }
          >
            개인정보처리방침
          </FooterCompany>
          <FooterCompanyLine />
          <FooterCompany
            onClick={() =>
              window.open(
                "https://innofin.oopy.io/189efbb3-315c-4dfc-8b36-7ac6ecf7caa2",
                "_blank"
              )
            }
          >
            개인정보 수집 및 이용
          </FooterCompany>
        </FooterCompanyWrapper>
        <FooterCompanyBottomWrapper>
          <FooterHead>(주)이노핀</FooterHead>
          <FooterContents>
            주소 : 서울특별시 영등포구 의사당대로 83, 서울핀테크랩 19층
            <br /> 대표 : 이승엽, 손상현 <br /> 사업자등록번호 : 123-86-44800
            <br /> 통신판매번호 : 2017-서울영등포-0758 <br /> 메일 :
            tudal.app@innofin.co.kr
            <br />
            개인정보보호책임자 : 이승엽 <br /> Copyright © 2013-2021 (주)이노핀.
            All Rights Reserved.
          </FooterContents>
        </FooterCompanyBottomWrapper>
        <FooterSNSWrapper>
          <FooterSNS
            src={instaPNG}
            alt=""
            onClick={() =>
              window.open("https://www.instagram.com/tudal_official/", "_blank")
            }
          />
          <FooterSNS
            src={facebookPNG}
            alt=""
            onClick={() =>
              window.open(
                "https://www.facebook.com/Innofin-103728502205101/",
                "_blank"
              )
            }
          />
          <FooterSNS
            src={youtubePNG}
            alt=""
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UC3ipMFy-EKZq0u5huUrZ4yQ",
                "_blank"
              )
            }
          />
          <FooterSNS
            src={blogPNG}
            alt=""
            onClick={() =>
              window.open(
                "https://blog.naver.com/PostList.naver?blogId=tudal_official&categoryNo=19",
                "_blank"
              )
            }
          />
        </FooterSNSWrapper>
      </FooterWrapper>
    </Footer>
  );
};

export default FooterPresenter;
