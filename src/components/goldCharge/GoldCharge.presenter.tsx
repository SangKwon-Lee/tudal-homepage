import {
  GoldChargeCheckImg,
  GoldChargeCheckText,
  GoldChargeCheckWrapper,
  GoldChargePGBtn,
  GoldChargeResltGold,
  GoldChargeResultLine,
  GOldChargeResultText,
  GoldChargeResultVATWrapper,
  GOldChargeVAT,
  GoldMenuWrapper,
  GoldWarningWrapper,
  GoldWarningTitle,
  GoldWarningText,
  GoldChargeWarningText,
  GoldMoneyImg,
  GoldMyMoneyWrapper,
  GoldMyGold,
  GoldText,
  GoldDetailWrapper,
  GoldDetail,
  // GoldChargeSubText,
  // GoldChargeSubGold,
  GoldMenuCircle,
  GoldMenuCircleWrapper,
  GoldMenuCharge,
  GoldMenuChargeBonus,
  GoldMenuChargeBonusSpan,
  GoldResultWrapper,
  GoldResultLine,
  GoldMethodWrapper,
  GoldMethodBtn,
  GoldChargeServiceWrapper,
  GoldChargeServiceText,
  GoldChargeTitleWrapper,
  GoldChargeWarningImg,
  GoldChargeWarningImgWrapper,
  GoldChargeWarningRedText,
  GoldChargeWarningTextRed,
  GoldChargeWarningWrapper,
} from "./GoldCharge.style";
import { UserGold } from "../../commons/types/types";
import moneyPNG from "../../assets/images/money.png";
import checkGray from "../../assets/images/checkGray.png";
import checkColor from "../../assets/images/checkColor.png";
import goldCheckPNG from "../../assets/images/goldCheck.png";
import moneyWhitePNG from "../../assets/images/goldWhite.png";
import WarningSVG from "../../assets/images/SVG/warning.svg";
import { Body, Contents, Title } from "../commons/ui/commonStyle";

interface IGoldChargeProps {
  gold: string;
  money: number;
  isCheck: boolean;
  isCharge: boolean;
  userGold: UserGold;
  handleInnoPay: () => void;
  handleIsCharge: () => void;
  handleIsCheck: () => void;
  handleGold: (e: any) => void;
}

export function priceToString(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const goldData = [
  "100",
  "150",
  "500",
  "1000",
  "3000",
  "5000",
  "7000",
  "8000",
  "10000",
  "20000",
  "30000",
];

const GoldChargePresenter: React.FC<IGoldChargeProps> = ({
  gold,
  money,
  isCheck,
  userGold,
  isCharge,
  handleGold,
  handleInnoPay,
  handleIsCheck,
  handleIsCharge,
}) => {
  return (
    <>
      <Body>
        <Contents>
          <GoldMyMoneyWrapper>
            <Title>
              <GoldMoneyImg src={moneyPNG} alt="" />총 보유 골드
            </Title>
            <GoldMyGold>
              <GoldText>
                {userGold?.gold || userGold?.bonusGold
                  ? priceToString(userGold?.gold + userGold.bonusGold)
                  : 0}
              </GoldText>
              골드
            </GoldMyGold>
          </GoldMyMoneyWrapper>
          <GoldMyMoneyWrapper>
            <GoldDetailWrapper style={{ borderRight: "1px solid #e9e9e9" }}>
              충전한 골드
              <GoldDetail>
                {userGold?.gold ? priceToString(userGold?.gold) : 0}
                골드
              </GoldDetail>
            </GoldDetailWrapper>
            <GoldDetailWrapper>
              보너스 골드
              <GoldDetail>
                {userGold?.bonusGold ? priceToString(userGold.bonusGold) : 0}
                골드
              </GoldDetail>
            </GoldDetailWrapper>
          </GoldMyMoneyWrapper>
        </Contents>
        <Contents>
          <GoldChargeTitleWrapper>
            <Title
              style={{
                cursor: "pointer",
                marginBottom: isCharge ? "10px" : "0px",
              }}
              onClick={handleIsCharge}
            >
              충전하실 골드를 선택해 주세요
            </Title>
          </GoldChargeTitleWrapper>
          {isCharge && (
            <>
              <GoldChargeWarningText>
                1골드는 VAT포함하여 110원입니다
              </GoldChargeWarningText>
              {goldData.map((data) => (
                <GoldMenuWrapper
                  key={data}
                  onClick={() => handleGold(data)}
                  isCheck={gold === data}
                >
                  <GoldMenuCircleWrapper>
                    {gold === data ? (
                      <img src={goldCheckPNG} alt=""></img>
                    ) : (
                      <GoldMenuCircle></GoldMenuCircle>
                    )}

                    <GoldMenuCharge isCheck={gold === data}>
                      {priceToString(data)}골드
                    </GoldMenuCharge>
                  </GoldMenuCircleWrapper>
                  <GoldMenuChargeBonus isCheck={gold === data}>
                    보너스
                    <GoldMenuChargeBonusSpan isCheck={gold === data}>
                      {priceToString(Number(data) / 10)}
                    </GoldMenuChargeBonusSpan>
                    골드
                  </GoldMenuChargeBonus>
                </GoldMenuWrapper>
              ))}
              <GoldResultWrapper>
                <GoldMyMoneyWrapper>
                  <Title>결제금액</Title>
                  <GoldChargeResultVATWrapper>
                    <GoldChargeResltGold isGold={money !== 0}>
                      {priceToString(money)}
                      <GOldChargeResultText>원</GOldChargeResultText>
                    </GoldChargeResltGold>
                    <GoldChargeResultLine />
                    <GOldChargeVAT>vat포함</GOldChargeVAT>
                  </GoldChargeResultVATWrapper>
                </GoldMyMoneyWrapper>
                <GoldResultLine />
                <GoldChargeWarningWrapper>
                  <GoldChargeWarningImgWrapper>
                    <GoldChargeWarningImg src={WarningSVG} />
                    <GoldChargeWarningRedText>
                      입금 전 잠깐!
                    </GoldChargeWarningRedText>
                  </GoldChargeWarningImgWrapper>
                  <GoldChargeWarningText>
                    SMS인증 결제 시
                    <GoldChargeWarningTextRed>
                      &nbsp;현대, 하나, 삼성카드는&nbsp;
                    </GoldChargeWarningTextRed>
                    사용이 불가능합니다.
                  </GoldChargeWarningText>
                  <GoldChargeWarningText>
                    결제 후 적용까지
                    <GoldChargeWarningTextRed>
                      &nbsp;최대 2분이&nbsp;
                    </GoldChargeWarningTextRed>
                    소요될 수 있습니다.
                  </GoldChargeWarningText>
                </GoldChargeWarningWrapper>
              </GoldResultWrapper>
            </>
          )}
        </Contents>
        <Contents
          style={{
            height: isCharge ? "650px" : "80px",
          }}
        >
          <Title
            style={{
              marginBottom: "50px",
            }}
          >
            결제수단을 선택해주세요
          </Title>
          <GoldMethodWrapper>
            <GoldMethodBtn
              style={{ marginRight: "20px" }}
              name="method"
              value={"CSMS"}
            >
              SMS인증결제
            </GoldMethodBtn>
          </GoldMethodWrapper>
          <GoldChargeCheckWrapper id="check" onClick={handleIsCheck}>
            <GoldChargeCheckImg
              id="check"
              src={isCheck ? checkColor : checkGray}
            />
            <GoldChargeCheckText id="check">
              구매하는 골드의 가격정보를 확인하였으며, 구매에 동의하시겠습니까?
              <br />
              (전사상거래법 제8조 2항)
            </GoldChargeCheckText>
          </GoldChargeCheckWrapper>
          <GoldChargePGBtn
            name="btn_pay"
            isCheck={isCheck}
            disabled={true}
            onClick={() => {
              handleInnoPay();
            }}
          >
            {isCheck ? (
              <GoldMoneyImg src={moneyWhitePNG} alt="" />
            ) : (
              <GoldMoneyImg src={moneyPNG} alt="" />
            )}
            투달 골드 충전
          </GoldChargePGBtn>
          <GoldWarningWrapper>
            <GoldWarningTitle>결제시 주의사항</GoldWarningTitle>
            <GoldWarningText>
              ∙ 골드 충전 시 결제금액에 VAT(부가세 10%)가 포함되어 있습니다.
            </GoldWarningText>
            <GoldWarningText>
              ∙ 신용카드 결제시 일시불 결제만 가능합니다.
            </GoldWarningText>
            <GoldWarningText>
              ∙ 결제가 완료되기 전에 결제창을 닫으면 결제가 완료되지 않을 수
              있습니다.
            </GoldWarningText>
            <GoldWarningText>
              ∙ 골드 충전 시 지급되는 보너스 골드는 환불금액에 포함되지
              않습니다.
            </GoldWarningText>
            <GoldWarningText>
              ∙ 결제관련 문의는 카카오톡으로 연락주시기 바랍니다.
            </GoldWarningText>
            <GoldWarningText>
              ∙ 잔여 포인트 환불 시, 사용이력이 있는 경우 이용수수료 10% 공제 후
              환불됩니다.
            </GoldWarningText>
          </GoldWarningWrapper>
          <GoldChargeServiceWrapper>
            <GoldChargeServiceText
              onClick={() => {
                window.open(
                  "https://app.tudal.co.kr/terms/service.html",
                  "_blank"
                );
              }}
            >
              서비스 이용약관
            </GoldChargeServiceText>
          </GoldChargeServiceWrapper>
        </Contents>
      </Body>
    </>
  );
};
export default GoldChargePresenter;
