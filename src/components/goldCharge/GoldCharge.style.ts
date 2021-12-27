import styled from "@emotion/styled";

interface IGoldChargeStyleProps {
  path?: string;
  isCheck?: boolean;
  isGold?: boolean;
}

export const GoldMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GoldMenuBody = styled.div`
  @media (min-width: 680px) {
    width: 1200px;
  }
  width: 100%;
  padding-top: 35px;
  margin: 0px 20px;
`;

export const GoldMenuTitleWrapper = styled.div`
  display: flex;
`;

export const GoldMenuTitle = styled.div`
  @media (min-width: 680px) {
    font-size: 20px;
  }
  font-size: 15px;
  color: ${(props: IGoldChargeStyleProps) =>
    props.path === "charge" ? "#ff3838" : "black"};
  font-weight: 700;
  margin-right: 40px;
  padding-bottom: 2px;
  border-bottom: ${(props: IGoldChargeStyleProps) =>
    props.path === "charge" ? "3px solid #ff3838" : "none"};
  cursor: pointer;
`;

export const MyGoldWrapper = styled.div`
  @media (min-width: 680px) {
    padding-right: 240px;
    display: block;
  }
  padding-right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyGoldText = styled.div`
  @media (min-width: 680px) {
    font-size: 20px;
  }
  font-size: 15px;
`;

export const MyGoldNumber = styled.span`
  font-weight: 700;
  @media (min-width: 680px) {
    font-size: 40px;
  }
  font-size: 25px;
`;

export const GoldChargeWrapper = styled.div`
  @media (min-width: 680px) {
    min-width: 1200px;
    padding-left: 0px;
    padding-right: 0px;
  }
  padding-left: 20px;
  padding-right: 20px;
  background-color: #f7f7f7;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 120px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const GoldChargeBody = styled.div`
  @media (min-width: 680px) {
    flex-direction: row;
    padding: 0px 0px;
    width: 1200px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GoldChargeContentsWrapper = styled.div`
  @media (min-width: 680px) {
    width: 524px;
  }
  width: 100%;
`;

export const GoldChargeTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const GoldChargeBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const GoldChargeBtn = styled.button`
  @media (min-width: 680px) {
    width: 97px;
    font-size: 15px;
  }
  width: 63px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  font-size: 13px;
  height: 46px;
  cursor: pointer;
  outline: none;
  font-weight: ${(props: IGoldChargeStyleProps) =>
    props.isCheck ? "700" : "400"};
  color: ${(props: IGoldChargeStyleProps) =>
    props.isCheck ? "white" : "black"};
  background-color: ${(props: IGoldChargeStyleProps) =>
    props.isCheck ? "#FC8484" : "white"};
`;

export const GoldChareBtnMobileBr = styled.br`
  @media (min-width: 680px) {
    display: none;
  }
`;

export const GoldChargeMax = styled.div`
  font-size: 13px;
  text-align: end;
`;

export const GoldChargeLine = styled.div`
  border-top: 1px solid #c7c7c7;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const GoldChargeMobileLine = styled.div`
  @media (min-width: 680px) {
    display: none;
  }
  border-top: 1px solid #c7c7c7;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const GoldChargeSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GoldChargeSelect = styled.div`
  @media (min-width: 680px) {
    width: 408px;
    margin-right: 0px;
  }
  width: 100%;
  margin-right: 30px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  font-size: ${(props: IGoldChargeStyleProps) =>
    props.isGold ? "20px" : "15px"};
  color: ${(props: IGoldChargeStyleProps) =>
    props.isGold ? "black" : "#c7c7c7"};
  display: flex;
  font-weight: ${(props: IGoldChargeStyleProps) =>
    props.isGold ? "700" : "400"};
  align-items: center;
  padding-left: 20px;
`;

export const GoldChargeBonusWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const GoldChargeBonusTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const GoldChargeBonustext = styled.span`
  font-size: 15px;
  color: #757575;
`;

export const GoldChargeResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const GoldChargeResultTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const GoldChargeResultVATWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const GoldChargeResltGold = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${(props: IGoldChargeStyleProps) =>
    !props.isGold ? "#757575" : "#FF3838"};
`;

export const GOldChargeResultText = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #757575;
  padding-right: 8px;
`;
export const GoldChargeResultLine = styled.div`
  border-left: 1px solid #4b4b4b;
  width: 1px;
  height: 15px;
  margin-top: 5px;
`;

export const GOldChargeVAT = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding-left: 5px;
`;

export const GoldChargeMethodTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 15px;
`;

export const GoldChargeMethodSelect = styled.select`
  position: relative;
  width: 100%;
  border: 1px solid black;
  height: 60px;
  padding: 0.8em 20px;
  border: 1px solid #999;
  font-family: inherit;
  border-radius: 0px;
  background-color: white;
  /* background: url("src/assets/imges/polygon.png") no-repeat 95% 50%; */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  font-size: 15px;
  font-weight: 700;
  ::-ms-expand {
    display: none;
  }
  margin-bottom: 40px;
`;
export const GoldChageMethodOption = styled.option`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: lightcoral;
  color: red;
  padding: 3px 0;
  font-size: 16px;
`;

export const GoldChargeCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 11px;
  cursor: pointer;
  margin-top: 40px;
`;

export const GoldChargeCheckImg = styled.img``;

export const GoldChargeCheckText = styled.div`
  @media (min-width: 680px) {
    font-size: 15px;
  }
  font-size: 13px;
  color: #4b4b4b;
  padding-left: 12px;
`;

export const GoldChargePGBtn = styled.button`
  @media (min-width: 680px) {
    margin-bottom: 0px;
  }
  margin-bottom: 86px;
  width: 100%;
  height: 60px;
  background-color: white;
  cursor: pointer;
  outline: none;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  font-size: 15px;
`;
