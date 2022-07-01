import styled from "@emotion/styled";

export const WelcomeTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 18px;
  }
  font-size: 25px;
  font-weight: 700;
  margin-top: 100px;
`;

export const WelcomeSubTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 13px;
  }
  font-size: 16px;
  text-align: center;
  margin-top: 35px;
  line-height: 24px;
`;

export const WelcomeContentsWrapper = styled.div`
  border-top: 2px solid #e9e9e9;
  border-bottom: 2px solid #e9e9e9;
  width: 100%;
  height: 360px;
  margin-top: 100px;
  max-width: 387px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const WelcomeContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
`;

export const WelcomeLogo = styled.img`
  width: 100px;
`;

export const WelcomeLogoText = styled.div`
  @media (max-width: 600px) {
    font-size: 13px;
  }
  font-size: 15px;
  font-weight: 700;
  margin-top: 5px;
`;

export const WelcomeContentsLine = styled.div`
  border-right: 2px solid #d9d9d9;
  width: 3px;
  height: 27px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const WelcomeContentsText = styled.div`
  font-size: 12px;
  flex-wrap: wrap;
  width: 250px;
`;

export const WelcomeSignupBtn = styled.button`
  font-size: 15px;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 20px 100px;
  border-radius: 5px;
  background-color: #4b4b4b;
  color: white;
  cursor: pointer;
`;
