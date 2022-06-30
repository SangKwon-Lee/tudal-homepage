import styled from "@emotion/styled";

interface IMypageStyle {
  isSort?: boolean;
  isType?: string;
}

export const HistoryBtnWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const HistoryBtn = styled.button`
  @media (max-width: 640px) {
    font-size: 12px;
    max-width: 70px;
  }
  font-size: 14px;
  max-width: 86px;
  width: 100%;
  height: 36px;
  border: ${(props: IMypageStyle) =>
    props.isSort ? "none" : "1px solid #D9D9D9"};
  background-color: ${(props: IMypageStyle) =>
    props.isSort ? "#4B4B4B" : "transparent"};
  color: ${(props: IMypageStyle) => (props.isSort ? "white" : "#4B4B4B")};
  margin-right: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const HistoryWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #d9d9d9;
  padding: 16px 5px;
  justify-content: space-between;
`;

export const HistoryType = styled.div`
  @media (max-width: 640px) {
    width: 30px;
    height: 30px;
  }
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 8px;
  border: ${(props: IMypageStyle) =>
    props.isType === "add"
      ? "1px solid #00B06A"
      : props.isType === "subtract"
      ? "1px solid #FF3838"
      : "1px solid #2499FF"};
  color: ${(props: IMypageStyle) =>
    props.isType === "add"
      ? "#00B06A"
      : props.isType === "subtract"
      ? "#FF3838"
      : "#2499FF"};

  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HistoryTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75px;
`;

export const HistoryTitle = styled.div`
  @media (max-width: 640px) {
    font-size: 12px;
  }
  font-size: 14px;
  padding-bottom: 6px;
`;

export const HistoryText = styled.div`
  font-size: 11px;
  color: #6b6b6b;
`;

export const HistoryDate = styled.div`
  font-size: 13px;
`;

export const HistoryGoldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65px;
  align-items: flex-end;
`;

export const HistoryGold = styled.div`
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 6px;
`;

export const HistoryBonus = styled.div`
  font-size: 11px;
  color: #6b6b6b;
`;

export const HistoryApp = styled.div`
  font-size: 14px;
`;

export const HistoryMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const HistoryMore = styled.button`
  background-color: #e9e9e9;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 12px;
`;

export const NoHistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NoHistory = styled.img`
  width: 200px;
`;
