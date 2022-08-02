import dayjs from "dayjs";
import { Body, Contents, Title } from "../commons/ui/commonStyle";
import {
  PaymentBodyWrapper,
  PaymentIcon,
  PaymetnTitleWrapper,
  PaymentTitle,
  PaymentContents,
  PaymentContentsTitle,
  PaymentContentsWrapper,
  PaymentContentsSubTitle,
  PaymentContentsSubText,
} from "../payment/Payment.style";
import plusIcon from "../../assets/images/plusIcon.png";
import {
  GoldResultWrapper,
  GoldMyMoneyWrapper,
  GoldChargeResultVATWrapper,
  GoldChargeResltGold,
  GOldChargeResultText,
  GoldChargeResultLine,
  GOldChargeVAT,
  GoldResultLine,
  GoldChargeCheckImg,
  GoldChargeCheckText,
  GoldChargeCheckWrapper,
  GoldChargePGBtn,
  GoldChargeServiceText,
  GoldChargeServiceWrapper,
  GoldMethodBtn,
  GoldMethodWrapper,
  GoldMoneyImg,
  GoldWarningText,
  GoldWarningTitle,
  GoldWarningWrapper,
  GoldChargeWarningImg,
  GoldChargeWarningImgWrapper,
  GoldChargeWarningRedText,
  GoldChargeWarningText,
  GoldChargeWarningTextRed,
  GoldChargeWarningWrapper,
} from "../goldCharge/GoldCharge.style";
import checkGray from "../../assets/images/checkGray.png";
import checkColor from "../../assets/images/checkColor.png";
import moneyPNG from "../../assets/images/money.png";
import WarningSVG from "../../assets/images/SVG/warning.svg";
import moneyWhitePNG from "../../assets/images/goldWhite.png";
import { priceToString } from "../goldCharge/GoldCharge.presenter";
interface PaymentCashProps {
  path: string;
  product: {
    period: number;
    gold: number;
    name: string;
  };
  money: string;
  isCheck: boolean;
  tudlaUsHistory: any;
  handleIsCheck: () => void;
  handleInnoPay: () => void;
}

const PaymentCashPresenter: React.FC<PaymentCashProps> = ({
  path,
  money,
  isCheck,
  product,
  handleIsCheck,
  handleInnoPay,
  tudlaUsHistory,
}) => {
  return (
    <Body>
      <Contents>
        <PaymentBodyWrapper>
          <PaymentIcon src={plusIcon}></PaymentIcon>
          <PaymetnTitleWrapper>
            <PaymentTitle>
              {path === "tudalus" ? "투달유에스" : "뉴스스탁"} 한 달 구독 하기
            </PaymentTitle>
          </PaymetnTitleWrapper>
          <PaymentContents>
            <PaymentContentsTitle>
              상품명 : {path === "tudalus" ? "투달유에스" : "뉴스스탁"}
            </PaymentContentsTitle>
            <PaymentContentsWrapper
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <PaymentContentsSubTitle>결제방식</PaymentContentsSubTitle>
              <PaymentContentsSubText style={{ color: "#00B06A" }}>
                구독({product.period}일)
              </PaymentContentsSubText>
            </PaymentContentsWrapper>
            <PaymentContentsWrapper>
              <PaymentContentsSubTitle>결제시 구독기간</PaymentContentsSubTitle>
              <PaymentContentsSubText>
                {dayjs(tudlaUsHistory.endDate).isAfter(dayjs().format())
                  ? dayjs(tudlaUsHistory.endDate)
                      .add(product.period, "day")
                      .format("YYYY년 MM월 DD일")
                  : dayjs()
                      .add(product.period, "day")
                      .format("YYYY년 MM월 DD일")}
                &nbsp;까지
              </PaymentContentsSubText>
            </PaymentContentsWrapper>
          </PaymentContents>
          <PaymentContents>
            <PaymentContentsTitle>골드 상세</PaymentContentsTitle>
            <PaymentContentsWrapper style={{ marginTop: "10px" }}>
              <PaymentContentsSubTitle>충전되는 골드</PaymentContentsSubTitle>
              <PaymentContentsSubText>165개</PaymentContentsSubText>
            </PaymentContentsWrapper>
            <PaymentContentsWrapper style={{ marginTop: "10px" }}>
              <PaymentContentsSubTitle>차감되는 골드</PaymentContentsSubTitle>
              <PaymentContentsSubText>-{product.gold}개</PaymentContentsSubText>
            </PaymentContentsWrapper>
          </PaymentContents>
          <GoldResultWrapper>
            <GoldMyMoneyWrapper>
              <Title>결제금액</Title>
              <GoldChargeResultVATWrapper>
                <GoldChargeResltGold isGold={true}>
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
                결제 후 적용까지
                <GoldChargeWarningTextRed> 최대 3분</GoldChargeWarningTextRed>이
                소요될 수 있습니다.
              </GoldChargeWarningText>
            </GoldChargeWarningWrapper>
          </GoldResultWrapper>
        </PaymentBodyWrapper>
      </Contents>
      <Contents>
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
          disabled={!isCheck}
          onClick={() => {
            handleInnoPay();
          }}
        >
          {isCheck ? (
            <GoldMoneyImg src={moneyWhitePNG} alt="" />
          ) : (
            <GoldMoneyImg src={moneyPNG} alt="" />
          )}
          투달유에스 구독 결제
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
            ∙ 골드 충전 시 지급되는 보너스 골드는 환불금액에 포함되지 않습니다.
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
  );
};

export default PaymentCashPresenter;
