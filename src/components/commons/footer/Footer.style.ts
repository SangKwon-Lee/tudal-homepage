import styled from "@emotion/styled";

export const Footer = styled.footer`
  width: 100%;
  background-color: #4b4b4b;
  color: #f7f7f7;
  display: flex;
  justify-content: center;
  padding: 40px 10px;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 592px;
`;

export const FooterCompanyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

export const FooterCompanyBottomWrapper = styled.div`
  display: flex;
`;

export const FooterCompany = styled.div`
  @media only all and (max-width: 640px) {
    font-size: 10px;
  }
  font-size: 12px;
  color: white;
  cursor: pointer;
`;

export const FooterHead = styled.div`
  color: #f7f7f7;
  font-weight: 700;
  font-size: 15px;
  margin-right: 40px;
  min-width: 67px;
`;

export const FooterCompanyLine = styled.div`
  border-left: 1px solid white;
  height: 13px;
`;

export const FooterContents = styled.div`
  @media only all and (max-width: 640px) {
    font-size: 10px;
  }
  color: white;
  font-size: 12px;
  line-height: 18px;
`;

export const FooterSNS = styled.img`
  width: 32px;
  margin-left: 20px;
  cursor: pointer;
`;

export const FooterSNSWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
