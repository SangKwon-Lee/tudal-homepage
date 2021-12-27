import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 117px;
`;

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//* 로그인 인증
export const LoginTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 45px;
`;

export const LoginContentsWrapper = styled.div`
  width: 474px;
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 50px 00px 40px 40px;
  border-radius: 22px;
`;

export const LoginInputWrapper = styled.div``;

export const LoginInputTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const LoginAuthInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const LoginInput = styled.input`
  width: 394px;
  height: 60px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid #c7c7c7;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  outline-color: #c7c7c7;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    font-size: 16px;
    color: #a8a8a8;
  }
`;

export const LoginAuthBtn = styled.button`
  width: 109px;
  height: 60px;
  background-color: #ff3838;
  color: white;
  outline: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin-left: 20px;
  :disabled {
    background-color: #a8a8a8;
  }
`;

export const LoginError = styled.div`
  color: #ff3838;
  font-size: 13px;
  padding-top: 13px;
`;

export const LoginAuthInput = styled.input`
  width: 394px;
  height: 60px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid #c7c7c7;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  outline-color: #ff3838;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    font-size: 16px;
    color: #a8a8a8;
  }
`;

export const LoginBtn = styled.button`
  width: 394px;
  height: 60px;
  color: white;
  font-size: 18px;
  background-color: #ff3838;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  :disabled {
    background-color: #a8a8a8;
  }
`;

//* 로그인 성공

export const LoginSuccessWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginSuccessTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const LoginSuccessBtn = styled.button`
  width: 231px;
  height: 65px;
  background-color: #fc8484;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export const LoginSuccessImg = styled.img``;
