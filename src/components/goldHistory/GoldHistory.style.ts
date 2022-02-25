import styled from "@emotion/styled";

interface IGoldHistoryStyle {
  isType?: boolean;
  isMenu?: boolean;
}

export const GoldHistoryWrapper = styled.div`
  @media (min-width: 680px) {
    min-width: 1400px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 90px;
  }
  background-color: #f7f7f7;
  width: 100%;
  padding-bottom: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const GoldHistoryBody = styled.div`
  @media (min-width: 680px) {
    flex-direction: row;
    padding: 0px 0px;
    width: 1200px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MyGoldHistoryWrapper = styled.div`
  @media (min-width: 680px) {
    display: block;
    width: 380px;
    flex-direction: row;
    background-color: #f7f7f7;
    padding-top: 0px;
  }
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fcf2f2;
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;
`;

export const GoldHistoryContentsWrapper = styled.div`
  padding: 0px 20px;
`;

export const GoldHistoryMenuWrapper = styled.div`
  margin-bottom: 40px;
`;

export const GoldHistoryMenuBtn = styled.button`
  @media (min-width: 680px) {
    padding: 0px 30px;
    margin-right: 20px;
    font-size: 18px;
  }
  height: 45px;
  background-color: ${(props: IGoldHistoryStyle) =>
    props.isMenu ? "#fc8484" : "transparent"};
  border-radius: 10px;
  color: ${(props: IGoldHistoryStyle) => (props.isMenu ? "white" : "#A8A8A8")};
  font-size: 15px;
  font-weight: ${(props: IGoldHistoryStyle) => (props.isMenu ? "700" : "400")};
  outline: none;
  cursor: pointer;
  border: ${(props: IGoldHistoryStyle) =>
    props.isMenu ? "none" : "1px solid #A8A8A8"};
  padding: 0px 15px;
  margin-right: 10px;
`;

export const GoldHistoryTableWrapper = styled.div`
  @media (min-width: 680px) {
    padding-bottom: 25px;
    padding-top: 25px;
  }
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid #c7c7c7;
  align-items: center;
  width: 100%;
`;

export const GoldHistoryTableBtn = styled.button`
  @media (min-width: 680px) {
    width: 54px;
    height: 28px;
  }
  width: 40px;
  height: 25px;
  font-size: 13px;
  font-weight: 700;
  border: ${(props: IGoldHistoryStyle) =>
    props.isType ? "1px solid #00B06A" : "1px solid #FF3838"};
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  color: ${(props: IGoldHistoryStyle) =>
    props.isType ? "#00B06A" : "#FF3838"};
`;

export const GoldHistoryTableMobileTitleWrapper = styled.div`
  @media (min-width: 680px) {
    display: flex;
    flex-direction: row;
    width: 470px;
    align-items: center;
  }
  display: flex;
  width: 220px;
  padding-left: 15px;
  flex-direction: column;
`;

export const GoldHistoryTableTitleWrapper = styled.div`
  @media (min-width: 680px) {
    margin-left: 20px;
    font-weight: 700;
    width: 260px;
  }

  margin-left: 0px;
  font-weight: 400;
  font-size: 15px;
  color: #4b4b4b;
  width: 100%;
`;

export const GoldHistoryTableTitle = styled.div`
  @media (min-width: 680px) {
    font-weight: 700;
  }
  font-weight: 400;
  font-size: 15px;
  color: #4b4b4b;
`;

export const GoldHistoryTableDate = styled.div`
  @media (min-width: 680px) {
    color: #4b4b4b;
    margin-top: 0px;
  }
  margin-top: 5px;
  margin-right: 0px;
  width: 120px;
  font-size: 15px;
  color: #a8a8a8;
`;

export const GoldHistoryTableMobileGoldWrapper = styled.div`
  @media (min-width: 680px) {
    display: flex;
    flex-direction: row;
    width: 240px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin-right: 20px;
`;

export const GoldHistoryTableGoldWrapper = styled.div`
  @media (min-width: 680px) {
    margin-right: 70px;
    width: 85px;
  }
  display: flex;
  flex-direction: column;
  margin-right: 0px;
`;

export const GoldHistoryTableGold = styled.div`
  @media (min-width: 680px) {
    text-align: end;
  }
  text-align: end;
  font-size: 15px;
  font-weight: 700;
`;

export const GoldHistoryTableDevice = styled.div`
  @media (min-width: 680px) {
    /* margin-right: 80px; */
    margin-top: 0px;
  }
  text-align: end;
  margin-top: 5px;
  margin-right: 0px;
  color: #a8a8a8;
  font-size: 15px;
`;

export const GoldHistoryTableArrow = styled.img`
  @media (min-width: 680px) {
    margin-right: 10px;
  }
  margin-right: 0px;
  cursor: pointer;
`;
