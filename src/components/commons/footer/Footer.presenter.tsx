import {
  FooterCompany,
  FooterWrapper,
  FooterBody,
  FooterContents,
  FooterCompanyWrapper,
  FooterCompanyLine,
} from "./Footer.style";
const FooterPresenter = () => {
  return (
    <>
      <FooterWrapper>
        <FooterBody>
          <FooterCompanyWrapper>
            <FooterCompany
              onClick={() => window.open("https://innofin.co.kr/", "_blank")}
            >
              회사소개
            </FooterCompany>
            <FooterCompanyLine />
            <FooterCompany onClick={() => window.open("/service", "_blank")}>
              서비스 이용약관
            </FooterCompany>
            <FooterCompanyLine />
            <FooterCompany
              onClick={() => window.open("/privacypolicy", "_blank")}
            >
              개인정보처리방침
            </FooterCompany>
            <FooterCompanyLine />
            <FooterCompany
              onClick={() => window.open("/privacydata", "_blank")}
            >
              개인정보 수집 및 이용
            </FooterCompany>
          </FooterCompanyWrapper>

          <FooterCompany>(주)이노핀</FooterCompany>
          <FooterContents>
            주소 : 서울특별시 영등포구 의사당대로 83, 서울핀테크랩 19층
            <br /> 대표 : 이승엽, 손상현 | 사업자등록번호 : 123-86-44800 |
            통신판매번호 : 2017-서울영등포-0758 <br /> 메일 :
            tudal.app@innofin.co.kr
            <br />
            개인정보보호책임자 : 이승엽 <br /> Copyright © 2013-2021 (주)이노핀.
            All Rights Reserved.
          </FooterContents>
        </FooterBody>
      </FooterWrapper>
    </>
  );
};

export default FooterPresenter;
