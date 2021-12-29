import { useNavigate } from "react-router";
import {
  GoldChargeBody,
  GoldChargeBonustext,
  GoldChargeBonusTitle,
  GoldChargeBonusWrapper,
  GoldChargeBtn,
  GoldChargeBtnWrapper,
  GoldChargeCheckImg,
  GoldChargeCheckText,
  GoldChargeCheckWrapper,
  GoldChargeContentsWrapper,
  GoldChargeLine,
  GoldChargeMax,
  GoldChargeMethodTitle,
  GoldChargePGBtn,
  GoldChargeResltGold,
  GoldChargeResultLine,
  GOldChargeResultText,
  GoldChargeResultTitle,
  GoldChargeResultVATWrapper,
  GoldChargeResultWrapper,
  GoldChargeSelect,
  GoldChargeSelectWrapper,
  GoldChargeTitle,
  GOldChargeVAT,
  GoldChargeWrapper,
  GoldMenuBody,
  GoldMenuTitle,
  GoldMenuTitleWrapper,
  GoldMenuWrapper,
  MyGoldNumber,
  MyGoldText,
  MyGoldWrapper,
  GoldChargeMobileLine,
  GoldChareBtnMobileBr,
  GoldWarningWrapper,
  GoldWarningTitle,
  GoldWarningText,
} from "./GoldCharge.style";
import checkGray from "../../assets/imges/checkGray.png";
import checkColor from "../../assets/imges/checkColor.png";
import MultipleSelect from "../commons/option/option.container";
import { UserData, UserGold } from "../../commons/types/types";
interface IGoldChargeProps {
  path: string;
  userGold: UserGold;
  userData: UserData;
  gold: string;
  handleGold: (e: any) => void;
  handleInputCharge: (e: any) => void;
  inputCharge: {
    check: boolean;
    money: number;
    method: string;
  };
  handleInnoPay: () => void;
}

function priceToString(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const goldData1 = ["100", "500", "1000", "3000", "5000"];
const goldData2 = ["7000", "8000", "10000", "20000", "30000"];

const GoldChargePresenter: React.FC<IGoldChargeProps> = ({
  path,
  userGold,
  userData,
  gold,
  handleGold,
  handleInputCharge,
  inputCharge,
  handleInnoPay,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <GoldMenuWrapper>
        <GoldMenuBody>
          <GoldMenuTitleWrapper>
            <GoldMenuTitle
              path={path === "charge" ? "charge" : "history"}
              onClick={() => {
                navigate("/goldCharge");
              }}
            >
              골드충전
            </GoldMenuTitle>
            <GoldMenuTitle
              path={path === "charge" ? "history" : "charge"}
              onClick={() => {
                navigate("/history");
              }}
            >
              사용내역
            </GoldMenuTitle>
          </GoldMenuTitleWrapper>
        </GoldMenuBody>
      </GoldMenuWrapper>
      <GoldChargeWrapper>
        <GoldChargeBody>
          <MyGoldWrapper>
            <MyGoldText>{sessionStorage.getItem("name")}님의 골드</MyGoldText>
            <MyGoldText>
              <MyGoldNumber>{userGold.gold + userGold.bonusGold}</MyGoldNumber>
              골드
            </MyGoldText>
          </MyGoldWrapper>
          <GoldChargeMobileLine />
          <GoldChargeContentsWrapper>
            <GoldChargeTitle>충전하실 금액을 선택해주세요.</GoldChargeTitle>
            <GoldChargeBtnWrapper>
              {goldData1.map((data, index) => (
                <div key={index}>
                  <GoldChargeBtn
                    value={data}
                    onClick={handleGold}
                    isCheck={data.toString() === gold}
                  >
                    {priceToString(data)}
                    <GoldChareBtnMobileBr />
                    골드
                  </GoldChargeBtn>
                </div>
              ))}
            </GoldChargeBtnWrapper>
            <GoldChargeBtnWrapper>
              {goldData2.map((data, index) => (
                <div key={index}>
                  <GoldChargeBtn
                    value={data}
                    onClick={handleGold}
                    isCheck={data.toString() === gold}
                  >
                    {priceToString(data)}
                    <GoldChareBtnMobileBr />
                    골드
                  </GoldChargeBtn>
                </div>
              ))}
            </GoldChargeBtnWrapper>
            <GoldChargeMax>최대 충전 가능 금액 : 30,000 골드</GoldChargeMax>
            <GoldChargeLine />
            <GoldChargeSelectWrapper>
              <GoldChargeSelect
                isGold={gold !== "충전하실 금액을 선택해주세요."}
              >
                {gold === "충전하실 금액을 선택해주세요."
                  ? gold
                  : `${priceToString(gold)} G`}
              </GoldChargeSelect>
              <GoldChargeBonusWrapper>
                <GoldChargeBonusTitle>추가 적립</GoldChargeBonusTitle>
                <GoldChargeBonusTitle
                  style={{ fontSize: "20px", textAlign: "end" }}
                >
                  {isNaN(Number(gold)) ? 0 : `+ ${Number(gold) / 10}`}
                  <GoldChargeBonustext>골드</GoldChargeBonustext>
                </GoldChargeBonusTitle>
              </GoldChargeBonusWrapper>
            </GoldChargeSelectWrapper>
            <GoldChargeLine />
            <GoldChargeResultWrapper>
              <GoldChargeResultTitle>결제금액</GoldChargeResultTitle>
              <GoldChargeResultVATWrapper>
                <GoldChargeResltGold isGold={inputCharge.money !== 0}>
                  {priceToString(inputCharge.money)}
                  <GOldChargeResultText>원</GOldChargeResultText>
                </GoldChargeResltGold>
                <GoldChargeResultLine />
                <GOldChargeVAT>vat포함</GOldChargeVAT>
              </GoldChargeResultVATWrapper>
            </GoldChargeResultWrapper>
            <GoldChargeLine />
            <GoldChargeMethodTitle>
              결제수단을 선택해주세요.
            </GoldChargeMethodTitle>
            <MultipleSelect
              handleInputCharge={handleInputCharge}
              inputCharge={inputCharge}
            />
            <GoldChargeCheckWrapper id="check" onClick={handleInputCharge}>
              <GoldChargeCheckImg
                id="check"
                src={inputCharge.check ? checkColor : checkGray}
              />
              <GoldChargeCheckText id="check">
                구매하시는 골드의 가격정보를 확인하였으며, 구매에
                동의하시겠습니까?
                <br />
                (전사상거래법 제8조 2항)
              </GoldChargeCheckText>
            </GoldChargeCheckWrapper>
            <GoldWarningWrapper>
              <GoldWarningTitle>결제시 주의사항</GoldWarningTitle>
              <GoldWarningText>
                - 골드 충전 시 결제금액에 VAT(부가세 10%)가 포함되어 있습니다.
                <br />
                - 신용카드 무이자 할부 가능여부는 결제창에 ‘무’표시를 확인하시면
                됩니다. <br />
                - 결제가 완료되기 전에 결제창을 닫으면 결제가 완료되지 않을 수
                있습니다. <br />
                - 결제관련 문의는 고객센터 0000-0000로 연락주시기 바랍니다.
                <br />- 잔여 포인트 환불 시, 사용이력이 있는 경우 이용수수료 10%
                공제 후 환불됩니다.
              </GoldWarningText>
            </GoldWarningWrapper>

            <GoldChargePGBtn
              name="btn_pay"
              onClick={() => {
                inputCharge.check
                  ? handleInnoPay()
                  : alert("골드 구매에 동의하셔야 결제할 수 있습니다.");
              }}
            >
              충전하기
            </GoldChargePGBtn>
            <div id="outside">asd</div>
          </GoldChargeContentsWrapper>
        </GoldChargeBody>
      </GoldChargeWrapper>
    </>
  );
};
export default GoldChargePresenter;
