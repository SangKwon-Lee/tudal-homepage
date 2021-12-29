import styled from "@emotion/styled";

export const HomeMainWrapper = styled.div`
  @media (min-width: 680px) {
    height: 100%;
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeMainImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100vh;
`;
export const HomeMainContentsWrapper = styled.div`
  @media (min-width: 680px) {
    flex-direction: column;
    padding: 330px 0px;
    align-items: flex-start;
  }
  max-width: 1280px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0;
  padding: 200px 0px;
  width: 100%;
`;
export const HomeLogoWrapper = styled.div`
  @media (min-width: 680px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 300px 0px;
    width: 100%;
    padding-left: 90px;
  }
  position: absolute;
  display: flex;
  justify-self: flex-start;
  align-self: flex-start;
  flex-direction: column;
  padding: 10px 0px;
  width: 100%;
  padding-left: 30px;
`;

export const HomeTudalLogo = styled.img`
  @media (min-width: 680px) {
    width: 122px;
  }
  width: 122px;
`;

export const HomeMainTitle = styled.div`
  font-size: 220%;
  margin-top: 20px;
  color: white;
  font-weight: 400;
  text-shadow: 1px 1px 8px gray;
  @media (min-width: 680px) {
    font-size: 38px;
    margin-top: 20px;
    color: #3e3939;
    font-weight: 400;
    text-shadow: none;
  }
`;

export const HomeFirstTitle = styled.div`
  @media (min-width: 680px) {
    font-size: 38px;
    font-weight: 500;
    text-align: start;
  }
  font-size: 150%;
  margin-top: 20px;
  color: #3e3939;
  font-weight: 400;
  text-align: center;
`;

export const HomeFirstSubTitle = styled.div`
  @media (min-width: 680px) {
    font-size: 58px;
    text-align: start;
  }
  color: #3e3939;
  font-size: 280%;
  font-weight: bold;
  text-align: center;
`;

export const HomeMainSubTitle = styled.div`
  @media (min-width: 680px) {
    color: #3e3939;
    font-size: 58px;
    text-shadow: none;
  }
  color: white;
  font-size: 280%;
  font-weight: bold;
  text-shadow: 1px 1px 8px gray;
`;

export const HomeMainText = styled.div`
  @media (min-width: 680px) {
    color: #3e3939;
    font-size: 27px;
    font-weight: 450;
    text-shadow: none;
  }
  color: white;
  font-size: 120%;
  line-height: 32px;
  margin-top: 20px;
  text-shadow: 1px 1px 8px gray;
`;

export const HomeMainBtnWrapper = styled.div`
  @media (min-width: 680px) {
    margin-top: 60px;
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
`;

export const HomeMainGoogleBtn = styled.button`
  @media (min-width: 680px) {
    color: #3e3939;
    margin-right: 15px;
    width: 230px;
    height: 55px;
    border: 1px solid black;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 23px;
  width: 300px;
  height: 55px;
  background: none;
  cursor: pointer;
`;

export const HomeMainAppleBtn = styled.button`
  @media (min-width: 680px) {
    border: 1px solid #3e3939;
    color: #3e3939;
    font-size: 23px;
    width: 200px;
    height: 55px;
    margin: 0px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 23px;
  width: 300px;
  height: 55px;
  background: none;
  cursor: pointer;
  margin-top: 15px;
`;

export const HomeMainGoogleImg = styled.img`
  height: 30px;
  margin-right: 10px;
`;

export const HomeMainAppImg = styled.img`
  height: 30px;
  margin-right: 10px;
`;

//* 첫 번째

export const HomeFirstContentsWrapper = styled.div`
  @media (min-width: 680px) {
    min-width: 1440px;
    height: 900px;
  }
  width: 100%;

  background-color: white;
  display: flex;
  justify-content: center;
`;
export const HomeFirstBody = styled.div`
  @media (min-width: 680px) {
    width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeFirstText = styled.div`
  @media (min-width: 680px) {
    font-size: 23px;
    text-align: start;
  }
  color: #3e3939;
  font-size: 110%;
  line-height: 26px;
  font-weight: 500;
  margin-top: 35px;
  text-align: center;
`;

export const HomeFirstLeftWrapper = styled.div`
  @media (min-width: 680px) {
    padding: 270px 40px;
  }
  padding: 100px 0px 0px 0px;
`;

export const HomeFirstBtnWrapper = styled.div`
  @media (min-width: 680px) {
    margin-top: 100px;
    width: 300px;
  }
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const HomeFirstBtn = styled.img`
  @media (min-width: 680px) {
    width: 63px;
  }
  width: 40px;
  margin-bottom: 10px;
`;

export const HomeFirstBtnText = styled.div`
  @media (min-width: 680px) {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 500;
    color: #3e3939;
  }
  font-size: 100%;
`;

export const HomeFirstBtnTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HomeFirstRightBody = styled.div`
  @media (min-width: 680px) {
    display: flex;
    align-items: center;
    padding-top: 80px;
  }
  display: flex;
  align-items: center;
`;

export const HomeFirstRightImg = styled.img`
  @media (min-width: 680px) {
    width: 770px;
  }
  width: 100%;
`;

//* 두 번째

export const HomeSecondContentsWrapper = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    min-width: 1440px;
    height: 900px;
    background-color: #f7f5ef;
    display: flex;
    justify-content: center;
  }
  width: 100%;
  /* height: 900px; */
  background-color: #f7f5ef;
  display: flex;
  justify-content: center;
`;

//* 테마 스쿨
export const HomeSchoolThemeWrapper = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    min-width: 1440px;
    height: 925px;
    display: flex;
    background-color: #da4446;
    flex-direction: column;
    align-items: center;
    max-width: 1920px;
  }
  width: 100%;
  height: 924px;
  background-color: #da4446;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;
export const HomeSchoolContentsWrapper = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const HomeSchollTextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const HomeSchoolTitle = styled.div`
  @media (min-width: 680px) {
    font-size: 48px;
    margin-bottom: -13px;
  }
  font-size: 150%;
  margin-top: 20px;
  color: white;
  font-weight: 400;
`;

export const HomeSchoolSubTitle = styled.div`
  @media (min-width: 680px) {
    color: white;
    font-size: 58px;
  }
  color: white;
  font-size: 250%;
  font-weight: bold;
`;

export const HomeSchoolText = styled.div`
  @media (min-width: 680px) {
    font-size: 23px;
    line-height: 32px;
  }
  color: white;
  font-size: 110%;
  line-height: 32px;
  font-weight: 450;
  margin-top: 30px;
`;

export const HomeSchoolImgWrapper = styled.div`
  @media (min-width: 680px) {
    display: flex;
  }
  margin-top: 18px;
`;

export const HomeSchoolImg = styled.img`
  width: 320px;
  margin: auto;
`;

//* FAQ
export const HomeFAQWrapper = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    min-width: 1440px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: white;
    padding: 100px 0px;
  }
  padding: 60px 0px;
`;

export const HomeFAQContentsWrapper = styled.div`
  @media (min-width: 680px) {
    width: 100%;
    max-width: 1280px;
  }
`;

export const HomeFAQTitle = styled.div`
  @media (min-width: 680px) {
    font-size: 50px;
    margin-left: 0px;
  }
  margin-left: 30px;
  font-weight: bold;
  font-size: 250%;
  margin-bottom: 30px;
`;

export const HomeFAQ = styled.div`
  @media (min-width: 680px) {
    padding-left: 40px;
  }
  color: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 30px;
  font-size: 16px;
  cursor: pointer;
`;

export const HomeFAQAnswer = styled.div`
  @media (min-width: 680px) {
    padding: 40px;
  }
  color: black;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  padding: 30px;
  background-color: #f7f5ef;
`;
