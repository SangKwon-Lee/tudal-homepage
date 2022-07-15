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
  GoldChargeWarningWrapper,
  GoldChargeWarningImgWrapper,
  GoldChargeWarningImg,
  GoldChargeWarningRedText,
  GoldChargeWarningText,
  GoldChageMethodOption,
  GoldChargeAccountBigText,
  GoldChargeAccountLine,
  GoldChargeAccountSmallText,
  GoldChargeAccountWrapper,
  GoldChargeAccoutPhoneWrapper,
  GoldChargeCheckImg,
  GoldChargeCheckText,
  GoldChargeCheckWrapper,
  GoldChargeMethodSelect,
  GoldChargeNameInput,
  GoldChargePGBtn,
  GoldChargeReceiptBtnWrapper,
  GoldChargeReceiptsinput,
  GoldChargeReceiptsRadio,
  GoldChargeReceiptsTitle,
  GoldChargeReceiptsWrapper,
  GoldChargeServiceText,
  GoldChargeServiceWrapper,
  GoldMenuCircle,
  GoldMethodBtn,
  GoldMethodWrapper,
  GoldMoneyImg,
  GoldWarningText,
  GoldWarningTitle,
  GoldWarningWrapper,
  GoldChargeBankImg,
  GoldChargeReceiptBox,
  GoldChargeReceiptBox2,
  GoldChargeReceiptsBoldText,
  GoldChargeReceiptSmallText,
  GoldChargeReceiptsResultWrapper,
  GoldChargeReceiptsText,
} from "../goldCharge/GoldCharge.style";
import WarningSVG from "../../assets/images/SVG/warning.svg";
import goldCheckPNG from "../../assets/images/goldCheck.png";
import checkGray from "../../assets/images/checkGray.png";
import checkColor from "../../assets/images/checkColor.png";
import moneyPNG from "../../assets/images/money.png";
import moneyWhitePNG from "../../assets/images/goldWhite.png";
import BankPng from "../../assets/images/bank.png";
import { priceToString } from "../goldCharge/GoldCharge.presenter";
import { useContext } from "react";
import { GlobalContext } from "../../App";
interface PaymentCashProps {
  path: string;
  step: number;
  product: {
    period: number;
    gold: number;
    name: string;
  };
  tudlaUsHistory: any;
  inputCharge: {
    check: boolean;
    money: number;
    method: string;
    number: string;
    isReceipt: boolean;
    name: string;
  };
  handleInnoPay: () => void;
  handleRecipts: (e: any) => void;
  handleSavePaymentInfo: () => void;
  handleInputCharge: (e: any) => void;
}

const PaymentCashPresenter: React.FC<PaymentCashProps> = ({
  path,
  step,
  product,
  inputCharge,
  handleInnoPay,
  handleRecipts,
  tudlaUsHistory,
  handleInputCharge,
  handleSavePaymentInfo,
}) => {
  const { userData } = useContext(GlobalContext);

  return (
    <Body>
      {step === 0 ? (
        <>
          {" "}
          <Contents>
            <PaymentBodyWrapper>
              <PaymentIcon src={plusIcon}></PaymentIcon>
              <PaymetnTitleWrapper>
                <PaymentTitle>
                  {path === "tudalus" ? "투달러스" : "뉴스스탁"} 한 달 구독 하기
                </PaymentTitle>
              </PaymetnTitleWrapper>
              <PaymentContents>
                <PaymentContentsTitle>
                  상품명 : {path === "tudalus" ? "투달러스" : "뉴스스탁"}
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
                  <PaymentContentsSubTitle>
                    결제시 구독기간
                  </PaymentContentsSubTitle>
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
                  <PaymentContentsSubTitle>
                    충전되는 골드
                  </PaymentContentsSubTitle>
                  <PaymentContentsSubText>165개</PaymentContentsSubText>
                </PaymentContentsWrapper>
                <PaymentContentsWrapper style={{ marginTop: "10px" }}>
                  <PaymentContentsSubTitle>
                    차감되는 골드
                  </PaymentContentsSubTitle>
                  <PaymentContentsSubText>
                    -{product.gold}개
                  </PaymentContentsSubText>
                </PaymentContentsWrapper>
              </PaymentContents>
              <GoldResultWrapper>
                <GoldMyMoneyWrapper>
                  <Title>결제금액</Title>
                  <GoldChargeResultVATWrapper>
                    <GoldChargeResltGold isGold={true}>
                      {priceToString(inputCharge.money)}
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
                    무통장 입금과 신용카드 비씨카드, 삼성카드, 롯데카드 일시불
                    결제로 골드를 충전하실 수 있습니다.
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
                value={"CARD"}
                onClick={handleInputCharge}
                isMethod={inputCharge.method === "CARD"}
              >
                신용카드(일반)
              </GoldMethodBtn>
              {/* <GoldMethodBtn
                name="method"
                value={"VBANK"}
                isMethod={inputCharge.method === "VBANK"}
                onClick={handleInputCharge}
              >
                무통장입금
              </GoldMethodBtn> */}
            </GoldMethodWrapper>
            {inputCharge.method === "VBANK" && (
              <>
                <GoldChargeAccountWrapper>
                  <GoldChargeAccountSmallText>
                    입금계좌번호
                  </GoldChargeAccountSmallText>
                  <GoldChargeAccountBigText>
                    신한은행 140-011-507200 (예금주 : 이노핀)
                  </GoldChargeAccountBigText>
                </GoldChargeAccountWrapper>
                <GoldChargeAccountLine />
                <GoldChargeReceiptsTitle>입금자명</GoldChargeReceiptsTitle>
                <GoldChargeNameInput
                  onChange={handleInputCharge}
                  name="name"
                  value={inputCharge.name}
                />
                <GoldChargeReceiptsWrapper>
                  <GoldChargeReceiptsTitle>현금영수증</GoldChargeReceiptsTitle>
                  <GoldChargeReceiptBtnWrapper
                    id="receipt"
                    onClick={() => {
                      handleInputCharge("발급");
                    }}
                  >
                    {inputCharge.isReceipt ? (
                      <img src={goldCheckPNG} alt=""></img>
                    ) : (
                      <GoldMenuCircle id="receipt"></GoldMenuCircle>
                    )}
                    <GoldChargeReceiptsRadio
                      id="receipt"
                      isReceipt={inputCharge.isReceipt === true}
                    >
                      발급 신청
                    </GoldChargeReceiptsRadio>
                  </GoldChargeReceiptBtnWrapper>
                  <GoldChargeReceiptBtnWrapper
                    id="receipt"
                    onClick={() => {
                      handleInputCharge("미발급");
                    }}
                  >
                    {!inputCharge.isReceipt ? (
                      <img src={goldCheckPNG} alt=""></img>
                    ) : (
                      <GoldMenuCircle id="receipt"></GoldMenuCircle>
                    )}
                    <GoldChargeReceiptsRadio
                      id="receipt"
                      isReceipt={inputCharge.isReceipt === false}
                    >
                      신청 안 함
                    </GoldChargeReceiptsRadio>
                  </GoldChargeReceiptBtnWrapper>
                </GoldChargeReceiptsWrapper>
                {inputCharge.isReceipt && (
                  <>
                    <GoldChargeMethodSelect onChange={handleRecipts}>
                      <GoldChageMethodOption value={"핸드폰"}>
                        개인 소득공제용 (휴대폰 번호)
                      </GoldChageMethodOption>
                      <GoldChageMethodOption value="주민등록번호">
                        개인 소득공재용 (주민등록번호)
                      </GoldChageMethodOption>
                      <GoldChageMethodOption value="카드">
                        개인 소득공재용 (현금영수증 카드)
                      </GoldChageMethodOption>
                      <GoldChageMethodOption value="사업자">
                        사업자 지출 증빙용
                      </GoldChageMethodOption>
                    </GoldChargeMethodSelect>
                    <GoldChargeAccoutPhoneWrapper>
                      <GoldChargeReceiptsinput
                        value={inputCharge.number}
                        type="number"
                        onChange={handleInputCharge}
                        name="number"
                        placeholder={"숫자만 입력해주세요."}
                      ></GoldChargeReceiptsinput>
                    </GoldChargeAccoutPhoneWrapper>
                  </>
                )}
              </>
            )}
            <GoldChargeCheckWrapper id="check" onClick={handleInputCharge}>
              <GoldChargeCheckImg
                id="check"
                src={inputCharge.check ? checkColor : checkGray}
              />
              <GoldChargeCheckText id="check">
                구매하는 골드의 가격정보를 확인하였으며, 구매에
                동의하시겠습니까?
                <br />
                (전사상거래법 제8조 2항)
              </GoldChargeCheckText>
            </GoldChargeCheckWrapper>
            <GoldChargePGBtn
              name="btn_pay"
              isCheck={inputCharge.check}
              disabled={!inputCharge.check}
              onClick={() => {
                inputCharge.method === "CARD"
                  ? handleInnoPay()
                  : handleSavePaymentInfo();
              }}
            >
              {inputCharge.check ? (
                <GoldMoneyImg src={moneyWhitePNG} alt="" />
              ) : (
                <GoldMoneyImg src={moneyPNG} alt="" />
              )}
              투달러스 구독 결제
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
                ∙ 잔여 포인트 환불 시, 사용이력이 있는 경우 이용수수료 10% 공제
                후 환불됩니다.
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
        </>
      ) : (
        <>
          <GoldChargeReceiptsResultWrapper>
            <GoldChargeReceiptsText>
              무통장 입금을 선택하셨습니다.
            </GoldChargeReceiptsText>
            <GoldChargeReceiptsBoldText>
              아래 계좌번호로 충전하실 금액을 이체해 주세요.
              <br /> 반드시
              {` ${userData?.name}${userData?.phoneNumber.slice(
                userData?.phoneNumber.length - 4,
                userData?.phoneNumber.length
              )}`}
              으로 입금해주세요.
            </GoldChargeReceiptsBoldText>
            <GoldChargeReceiptsText>
              <br />
              {`입금마감일 :
                      ${dayjs(new Date()).add(2, "day").format("YYYY.MM.DD")}
                       오후 23시 59분 59초`}
            </GoldChargeReceiptsText>
            <GoldChargeReceiptBox>
              <GoldChargeBankImg src={BankPng} />
              <GoldChargeReceiptsBoldText>
                신한은행
                <br /> 140-011-507200 (예금주 : 이노핀)
              </GoldChargeReceiptsBoldText>
            </GoldChargeReceiptBox>
            <GoldChargeReceiptBox2>
              <GoldChargeReceiptSmallText>입금금액</GoldChargeReceiptSmallText>
              <GoldChargeReceiptsBoldText>
                &nbsp;&nbsp;&nbsp;{priceToString(inputCharge.money)}
              </GoldChargeReceiptsBoldText>
              <GoldChargeReceiptSmallText>
                원 (VAT 포함)
              </GoldChargeReceiptSmallText>
            </GoldChargeReceiptBox2>
          </GoldChargeReceiptsResultWrapper>
        </>
      )}
    </Body>
  );
};

export default PaymentCashPresenter;
