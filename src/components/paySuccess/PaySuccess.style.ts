import styled from "@emotion/styled";

export const PaySuccessWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-self: center; */
`;
export const PaySuccessBody = styled.div`
  @media (min-width: 680px) {
    padding-top: 300px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;
export const PaySuccessCheck = styled.img`
  @media (min-width: 680px) {
    width: 90px;
    height: 90px;
  }
  width: 48px;
  height: 48px;
`;

export const PaySuccessText = styled.div`
  @media (min-width: 680px) {
    font-size: 20px;
  }
  font-size: 15px;
  color: #757575;
  font-weight: 700;
  margin-top: 30px;
`;
export const PaySuccessBtn = styled.button`
  @media (min-width: 680px) {
    font-size: 18px;
    width: 227px;
    height: 65px;
    margin-top: 60px;
  }
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 14px;
  color: white;
  background-color: #fc8484;
  font-weight: 700;
  margin-top: 55px;
  width: 118px;
  height: 40px;
`;
