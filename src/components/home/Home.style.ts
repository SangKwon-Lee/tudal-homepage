import styled from "@emotion/styled";

//* 제일 위
export const HomeMainWrapper = styled.div`
  @media (max-width: 640px) {
    align-items: flex-start;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const HomeMainImgWeb = styled.img`
  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 640px) {
    height: 700px;
    display: none;
  }

  width: 100%;
  object-fit: cover;
`;
export const HomeMainImgMobile = styled.img`
  @media (max-width: 640px) {
    height: 700px;
    display: flex;
  }
  display: none;
  width: 100%;
  object-fit: cover;
`;

export const HomeMainContentsWrapper = styled.div`
  @media (max-width: 1100px) {
    max-width: 640px;
    padding: 20px;
  }
  @media (max-width: 640px) {
    margin-top: 130px;
    align-items: center;
  }
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
`;

export const HomeMainTitleBold = styled.div`
  font-weight: 700;
`;

export const HomeMainTitle = styled.div`
  @media (max-width: 1100px) {
    font-size: 33px;
  }
  font-size: 46px;
`;

export const HomeMainSubText = styled.div`
  @media (max-width: 1100px) {
    font-size: 17px;
    color: #000000;
  }
  font-size: 20px;
  margin-top: 35px;
`;

export const HomeMainBtnWrapper = styled.div`
  @media (max-width: 1100px) {
    margin-top: 60px;
  }
  display: flex;
  margin-top: 60px;
`;

export const HomeMainBtn = styled.button`
  @media (max-width: 1100px) {
    font-size: 14px;
    margin: 0px 12.5px;
  }
  box-shadow: 15px 15px 17px 0px #00000040;
  border-radius: 5px;
  padding: 12.5px;
  background-color: #000000;
  margin-right: 30px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HomeMainIcon = styled.img`
  margin-right: 12px;
`;

//* 공통
export const HomeContents = styled.div`
  @media (max-width: 640px) {
    padding: 10px;
    flex-direction: column;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//* 첫 번째
export const HomeFirstContentsWrapper = styled.div`
  @media (max-width: 640px) {
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 150px;
    height: auto;
    align-items: flex-start;
    padding-left: 20px;
  }
  align-items: center;
  display: flex;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
`;

export const HomeSecondContentsWrapper = styled.div`
  @media (max-width: 640px) {
    padding-top: 50px;
    padding-left: 20px;
    padding-bottom: 300px;
    height: auto;
    align-items: flex-start;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1100px;
  padding-top: 100px;
`;

export const HomeContentsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeSecendContentsTextWrapper = styled.div`
  @media (max-width: 640px) {
    padding-right: 40px;
  }
  display: flex;
  flex-direction: column;
`;

export const HomeContentsTitle = styled.div`
  @media (max-width: 640px) {
    font-size: 24px;
  }
  font-size: 44px;
  font-weight: 700;
`;

export const HomeContentsIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const HomeContentsIcon = styled.img`
  @media (max-width: 640px) {
    width: 20px;
    height: 20px;
  }
  margin-right: 10px;
`;

export const HomeContentsTextBold = styled.div`
  @media (max-width: 640px) {
    font-size: 15px;
  }
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  display: flex;
`;

export const HomeContentsText = styled.div`
  @media (max-width: 640px) {
    font-size: 15px;
    margin-top: 17px;
  }
  margin-top: 17px;
  font-size: 18px;
`;

export const HomeDalinPngWrapper = styled.div`
  @media (max-width: 640px) {
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 30px;
  }
  display: flex;
  position: relative;
  width: 50%;
`;

export const HomeDalinMediaPngWrapper = styled.div`
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 30px;
  }
  display: none;
  position: relative;
  width: 50%;
`;

export const HomeFirstPngWrapper = styled.div`
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 30px;
  }
  display: flex;
  position: relative;
  width: 50%;
`;

export const HomeLastPngWrapper = styled.div`
  @media (max-width: 640px) {
    display: flex;
    margin-top: 30px;
    margin-left: 0px;
    width: 100%;
  }
  display: flex;
  position: relative;
  width: 50%;
  align-items: center;
`;

export const HomeLastPng = styled.img`
  @media (max-width: 640px) {
    width: 50%;
    left: 0px;
  }
  width: 50%;
  z-index: 2;
`;

export const HomeLastPng2 = styled.img`
  @media (max-width: 640px) {
    width: 60%;
  }
  position: absolute;
  width: 60%;
  left: 20%;
  z-index: 1;
`;

export const HomeLastPng3 = styled.img`
  @media (max-width: 640px) {
    width: 50%;
  }
  position: absolute;
  width: 50%;
  left: 50%;
`;

export const HomeMyPng = styled.img`
  @media (max-width: 640px) {
    width: 50%;
  }
  width: 55%;
`;

export const HomeKeyPng = styled.img`
  @media (max-width: 640px) {
    width: 50%;
    left: 0%;
    display: flex;
    position: relative;
    top: 100px;
  }
  position: absolute;
  width: 55%;
  top: 20%;
  left: 42%;
`;

export const HomeMyDalin = styled.img`
  @media (max-width: 640px) {
    width: 50%;
  }
  width: 60%;
`;
export const HomeMyDalin2 = styled.img`
  @media (max-width: 640px) {
    width: 50%;
    left: 0%;
    display: flex;
    position: relative;
    top: 100px;
  }
  width: 60%;
  left: 45%;
  top: 10%;
  position: absolute;
`;

//* 두 번째
export const HomeSecondPngWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 30px;
`;

export const HomeTriplePng1 = styled.img`
  @media (max-width: 640px) {
    width: 100%;
  }
  width: 55%;
`;

export const HomeTriplePng2 = styled.img`
  @media (max-width: 640px) {
    width: 100%;
    top: 75%;
    left: -20%;
  }
  width: 55%;
  position: absolute;
  left: 0%;
`;

export const HomeTriplePng3 = styled.img`
  @media (max-width: 640px) {
    width: 55%;
    top: 90%;
    left: 45%;
  }
  left: 58%;
  top: 10%;
  width: 33%;
  position: absolute;
`;
