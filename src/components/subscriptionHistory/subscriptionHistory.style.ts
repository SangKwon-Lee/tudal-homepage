import styled from "@emotion/styled";

export const SubWrapper = styled.div`
  width: 100%;
  padding: 25px 30px;
  background-color: #f7f7f7;
  margin-top: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const SubLogo = styled.img`
  width: 28px;
  margin-right: 12px;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  background-color: white;
`;

export const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SubContentsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const SubContentsTitle = styled.div`
  font-size: 14px;
  width: 80px;
`;

export const SubContentsSubTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  width: 80px;
`;

export const SubContentsTextBold = styled.div`
  @media (max-width: 600px) {
    font-size: 13px;
  }
  font-weight: 700;
`;

export const SubContentsText = styled.div`
  font-size: 13px;
  font-weight: 400;
`;

export const SubBtn = styled.button`
  background-color: #6b6b6b;
  width: 100%;
  border-radius: 10px;
  color: white;
  height: 54px;
  margin-top: 33px;
  cursor: pointer;
`;
