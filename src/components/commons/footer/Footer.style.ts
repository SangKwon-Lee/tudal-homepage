import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    background-color: #3e3939;
    color: white;
    display: flex;
    justify-content: center;
    padding: 40px 0px;
  }
  width: 100%;
  background-color: #3e3939;
  color: white;
  padding: 40px 0px;
`;

export const FooterBody = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0px 20px;
`;
export const FooterCompany = styled.div`
  font-size: 18px;
  max-width: 1280px;
  width: 100%;
  color: white;
  margin-bottom: 20px;
`;
export const FooterContents = styled.div`
  color: white;
  font-size: 13.5px;
`;
