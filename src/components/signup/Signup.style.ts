import styled from "@emotion/styled";

interface SignupStyle {
  isActive?: boolean;
}

export const SignupRedLine = styled.div`
  @media (max-width: 600px) {
    width: 136px;
  }
  border-top: 2px solid red;
  width: 159px;
  margin-top: 8px;
  margin-bottom: 25px;
`;

export const SignupBirthWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SignupBirthInput = styled.input`
  @media (max-width: 600px) {
    margin-top: 5px;
  }
  width: 100%;
  max-width: 250px;
  height: 67px;
  min-height: 67px;
  padding-left: 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #c7c7c7;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    font-size: 15px;
    color: #a9a9a9;
  }
  :focus {
    border: 2px solid black;
  }
`;

export const SignupBirthDash = styled.div`
  width: 20px;
  height: 4px;
  background-color: black;
  margin: 0px 7px;
`;

export const SignupBirthCircle = styled.div`
  @media (max-width: 600px) {
    margin-top: 5px;
  }
  max-width: 15px;
  width: 100%;
  height: 15px;
  /* height: 100%; */
  border-radius: 50%;
  background-color: black;
  margin-left: 15px;
`;

export const SignupPhoneBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  height: 46px;
  margin-bottom: 80px;
`;

export const SignupPhoneBtn = styled.button`
  @media (max-width: 600px) {
    font-size: 11px;
  }
  background-color: ${(props: SignupStyle) =>
    props.isActive ? "#FFEBEF" : "#f7f7f7"};
  border: ${(props: SignupStyle) =>
    props.isActive ? "1px solid #FF3838" : "none"};
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 121px;
  padding: 15px 0px;
  margin-right: 16px;
  :hover {
    background-color: #ffebef;
  }
`;

export const SignupBtnArrow = styled.img`
  @media (max-width: 600px) {
    width: 11px;
  }
  margin-left: 12px;
  width: 14px;
`;

export const SignupPhoneAddWrapper = styled.div`
  width: 100%;
  max-width: 121px;
`;

export const SignupPhonePositionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 121px;
  padding: 5px;
  background-color: #f7f7f7;
  margin-top: 5px;
`;

export const SignupPhonePositionBtn = styled.button`
  @media (max-width: 600px) {
    font-size: 11px;
  }
  background-color: ${(props: SignupStyle) =>
    props.isActive ? "#FFEBEF" : "#f7f7f7"};
  border: ${(props: SignupStyle) =>
    props.isActive ? "1px solid #FF3838" : "none"};
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 121px;
  padding: 15px 0px;
  :hover {
    background-color: #ffebef;
  }
`;

export const TitleBtn = styled.div`
  cursor: pointer;
`;

export const CheckImg = styled.img`
  width: 20px;
  margin-right: 12px;
`;

export const SignupCheckBody = styled.div`
  border: 1px solid #e9e9e9;
  padding: 30px;
  border-radius: 10px;
`;

export const SignupCheckLine = styled.div`
  border-top: 1px solid #e9e9e9;
  width: 100%;
  margin-top: 30px;
`;

export const SignupCheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 27px;
`;

export const SignupCheckText = styled.div`
  font-size: 14px;
  color: #7f7f7f;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SignupCheckBtn = styled.button`
  width: 100%;
  padding: 20px 0px;
  cursor: pointer;
  background-color: #ff3838;
  color: white;
  border-radius: 5px;
  margin-top: 15px;
  :disabled {
    background-color: #f7f7f7;
    color: #4b4b4b;
  }
`;

export const SingupCheckDetail = styled.button`
  font-size: 12px;
  padding: 5px 14.5px;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
  cursor: pointer;
`;

export const SignupARSText = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const SignupArsBody = styled.div`
  @media (max-width: 680px) {
    padding-top: 50px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  align-items: center;
`;

export const SignupArsWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const SignupArsNum = styled.div`
  background-color: #f7f7f7;
  width: 74px;
  height: 80px;
  display: flex;
  margin-right: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  border-radius: 10px;
`;

export const SignupArsText = styled.h3`
  @media (max-width: 680px) {
    font-size: 16px;
  }
  text-align: center;
  line-height: 30px;
`;

export const SignupSubText = styled.div`
  @media (max-width: 680px) {
    font-size: 10px;
  }
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const SignupImg = styled.img`
  margin-right: 12px;
`;

export const SignupSuccessBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SignupSuccessWrapper = styled.div`
  @media (max-width: 680px) {
    padding-top: 50px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const SignupSuccessImg = styled.img`
  @media (max-width: 680px) {
    width: 250px;
  }
  width: 300px;
`;

export const SignupSuccessText = styled.div`
  @media (max-width: 680px) {
    font-size: 18px;
  }
  font-weight: 700;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const SignupSuccessSubText = styled.div`
  @media (max-width: 680px) {
    font-size: 12px;
  }
  text-align: center;
  font-size: 18px;
  margin-bottom: 80px;
`;

export const SignupSuccessBtn = styled.button`
  width: 256px;
  height: 58px;
  font-size: 15px;
  color: white;
  background-color: #4b4b4b;
  font-weight: 700;
  border-radius: 5px;
`;
