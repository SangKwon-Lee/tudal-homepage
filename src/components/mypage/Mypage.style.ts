import styled from "@emotion/styled";

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  max-width: 592px;
`;
export const UserName = styled.div`
  @media (max-width: 640px) {
    font-size: 20px;
  }
  margin-right: 32px;
  font-weight: 700;
  font-size: 25px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserNameIcon = styled.img`
  cursor: pointer;
  width: 10px;
  height: 16px;
`;
