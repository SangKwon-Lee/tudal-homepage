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
  GoldChargeMethodSelect,
  GoldChageMethodOption,
  GoldChargeWarningWrapper,
  GoldChargeWarningImgWrapper,
  GoldChargeWarningImg,
  GoldChargeWarningRedText,
  GoldChargeWarningText,
  GoldChargeAccountWrapper,
  GoldChargeAccountSmallText,
  GoldChargeAccountBigText,
  GoldChargeAccoutPhoneWrapper,
  GoldChargeReceiptsWrapper,
  GoldChargeReceiptsTitle,
  GoldChargeReceiptsRadio,
  GoldChargeReceiptsinput,
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
  GoldChargeAccountLine,
  GoldChargeReceiptBtnWrapper,
  GoldChargeNameInput,
  GoldChargeServiceWrapper,
  GoldChargeServiceText,
} from "./GoldCharge.style";
import { UserGold } from "../../commons/types/types";
import moneyPNG from "../../assets/images/money.png";
import checkGray from "../../assets/images/checkGray.png";
import checkColor from "../../assets/images/checkColor.png";
import WarningSVG from "../../assets/images/SVG/warning.svg";
import goldCheckPNG from "../../assets/images/goldCheck.png";
import moneyWhitePNG from "../../assets/images/goldWhite.png";
import { Body, Contents, Title } from "../commons/ui/commonStyle";

interface IGoldChargeProps {
  gold: string;
  userGold: UserGold;
  isCharge: boolean;
  inputCharge: {
    check: boolean;
    money: number;
    method: string;
    number: string;
    isReceipt: boolean;
    name: string;
  };
  handleInnoPay: () => void;
  handleIsCharge: () => void;
  handleGold: (e: any) => void;
  handleRecipts: (e: any) => void;
  handleSavePaymentInfo: () => void;
  handleInputCharge: (e: any) => void;
}

export function priceToString(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const goldData = [
  "100",
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
  userGold,
  isCharge,
  handleGold,
  inputCharge,
  handleRecipts,
  handleInnoPay,
  handleIsCharge,
  handleInputCharge,
  handleSavePaymentInfo,
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
          <GoldMyMoneyWrapper>
            <Title
              style={{
                cursor: "pointer",
                marginBottom: isCharge ? "30px" : "0px",
              }}
              onClick={handleIsCharge}
            >
              충전하실 골드를 선택해 주세요
            </Title>
            {/* <GoldChargeSubText>
              최대 충전 가능 금액 :
              <GoldChargeSubGold>30,000 골드</GoldChargeSubGold>
            </GoldChargeSubText> */}
          </GoldMyMoneyWrapper>
          {isCharge && (
            <>
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
                      + {priceToString(Number(data) / 10)}
                    </GoldMenuChargeBonusSpan>
                    골드
                  </GoldMenuChargeBonus>
                </GoldMenuWrapper>
              ))}
              <GoldResultWrapper>
                <GoldMyMoneyWrapper>
                  <Title>결제금액</Title>
                  <GoldChargeResultVATWrapper>
                    <GoldChargeResltGold isGold={inputCharge.money !== 0}>
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
            </>
          )}
        </Contents>
        <Contents
          style={{
            height:
              isCharge &&
              inputCharge.isReceipt &&
              inputCharge.method === "VBANK"
                ? "950px"
                : isCharge && inputCharge.method === "VBANK"
                ? "850px"
                : isCharge
                ? "630px"
                : "80px",
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
              value={"CARD"}
              onClick={handleInputCharge}
              isMethod={inputCharge.method === "CARD"}
            >
              신용카드(일반)
            </GoldMethodBtn>
            <GoldMethodBtn
              name="method"
              value={"VBANK"}
              isMethod={inputCharge.method === "VBANK"}
              onClick={handleInputCharge}
            >
              무통장입금
            </GoldMethodBtn>
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
              구매하는 골드의 가격정보를 확인하였으며, 구매에 동의하시겠습니까?
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
