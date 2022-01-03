import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  @media only all and (min-width: 680px) {
    width: 100%;
    background-color: #3e3939;
    color: white;
    display: flex;
    justify-content: center;
    padding: 40px 0px;
    min-width: 1440px;
  }
  @media only all and (max-width: 680px) {
    width: 100%;
    min-width: 0px;
    background-color: #3e3939;
    color: white;
    padding: 40px 0px;
  }
`;

export const FooterBody = styled.div`
  @media only all and (min-width: 680px) {
    max-width: 1280px;
    display: flex;
    text-align: start;
    justify-content: center;
  }
  @media only all and (max-width: 680px) {
    flex-direction: column;
    text-align: center;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterCompanyWrapper = styled.div`
  @media only all and (min-width: 680px) {
    justify-content: flex-start;
  }
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;
export const FooterCompany = styled.div`
  @media only all and (min-width: 680px) {
    font-size: 13px;
  }
  font-size: 10px;
  color: white;
  cursor: pointer;
`;

export const FooterCompanyLine = styled.div`
  margin: 0px 30px;
  border-left: 1px solid white;
  height: 13px;
`;

export const FooterContents = styled.div`
  color: white;
  font-size: 13.5px;
`;
