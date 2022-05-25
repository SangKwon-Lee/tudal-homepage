import styled from "@emotion/styled";

export const LoginSubText = styled.div`
  font-size: 12px;
  padding-top: 8px;
`;

export const LoginInputTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const LoginInputWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 100%;
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

export const LoginAuthBtn = styled.button`
  width: 100%;
  max-width: 167px;
  font-size: 15px;
  height: 67px;
  background-color: #ff3838;
  color: white;
  outline: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  :disabled {
    background-color: #f7f7f7;
    color: #a9a9a9;
  }
`;

export const LoginError = styled.div`
  margin-top: 15px;
  color: #ff3838;
  font-size: 12px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 67px;
  color: white;
  font-size: 18px;
  background-color: #ff3838;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 50px;
  :disabled {
    background-color: #f7f7f7;
    color: #a9a9a9;
  }
`;

export const LoginAuthInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LoginTimer = styled.div`
  font-size: 14px;
  position: absolute;
  color: #ff383899;
  margin-right: 20px;
`;

//* 로그인 성공

export const LoginSuccessImg = styled.img`
  @media (max-width: 600px) {
    max-height: 232px;
  }
  max-height: 464px;
  height: 100%;
  transition: all 1s;
`;

export const LoginSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const LoginSuccessTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 18px;
  }
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const LoginSuccessBtnWapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LoginSuccessBtn = styled.button`
  width: 100%;
  height: 55px;
  background-color: #4b4b4b;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 700;
`;
