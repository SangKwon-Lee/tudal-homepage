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
  GoldChargeMethodSelect,
  GoldChageMethodOption,
  GoldChargeWarningWrapper,
  GoldChargeWarningImgWrapper,
  GoldChargeWarningImg,
  GoldChargeWarningRedText,
  GoldChargeWarningText,
  GoldChargeWarningBold,
  MyGoldLine,
  MyGoldAmountWrapper,
  MyGoldAmountText,
  MyGoldAmount,
  MyGoldTextTopWrapper,
  MyGoldLineMobile,
  GoldChargeAccountWrapper,
  GoldChargeAccountSmallText,
  GoldChargeAccountBigText,
  GoldChargeAccountText,
  GoldChargeAccountName,
  GoldChargeAccountDate,
  GoldChargeAccoutPhoneWrapper,
  GoldChargeReceiptsWrapper,
  GoldChargeReceiptsTitle,
  GoldChargeReceiptsRadio,
  GoldChargeReceiptsLabel,
  Br,
  GoldChargeReceiptsinput,
  GoldChargeReceiptsResultWrapper,
  GoldChargeReceiptsText,
  GoldChargeReceiptsBoldText,
  GoldChargeReceiptBox,
  GoldChargeBankImg,
  GoldChargeReceiptBox2,
  GoldChargeReceiptSmallText,
} from "./GoldCharge.style";
import checkGray from "../../assets/images/checkGray.png";
import checkColor from "../../assets/images/checkColor.png";
import WarningSVG from "../../assets/images/SVG/warning.svg";
import BankPng from "../../assets/images/bank.png";
import { UserData, UserGold } from "../../commons/types/types";
import dayjs from "dayjs";
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
    number: string;
    isReceipt: boolean;
  };
  handleInnoPay: () => void;
  bonusGold: string | number;
  handleRecipts: (e: any) => void;
  reciptsCategory: string;
  handleSavePaymentInfo: () => void;
  step: number;
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
  bonusGold,
  handleRecipts,
  reciptsCategory,
  handleSavePaymentInfo,
  step,
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
            <MyGoldTextTopWrapper>
              <MyGoldText>{userData?.name}님의 골드</MyGoldText>
              <MyGoldText>
                <MyGoldNumber>
                  {userGold?.gold || userGold?.bonusGold
                    ? priceToString(userGold?.gold + userGold.bonusGold)
                    : 0}
                </MyGoldNumber>
                골드
              </MyGoldText>
            </MyGoldTextTopWrapper>
            <MyGoldLine />
            <MyGoldAmountWrapper>
              <MyGoldAmountText>충전한 골드</MyGoldAmountText>
              <MyGoldAmount>
                {userGold?.gold ? priceToString(userGold.gold) : 0}
                <MyGoldAmountText style={{ marginLeft: "5px" }}>
                  골드
                </MyGoldAmountText>
              </MyGoldAmount>
            </MyGoldAmountWrapper>
            <MyGoldLineMobile>
              <MyGoldLine />
            </MyGoldLineMobile>
            <MyGoldAmountWrapper>
              <MyGoldAmountText>보너스 골드</MyGoldAmountText>
              <MyGoldAmount>
                {userGold?.bonusGold ? priceToString(userGold.bonusGold) : "0"}
                <MyGoldAmountText style={{ marginLeft: "5px" }}>
                  골드
                </MyGoldAmountText>
              </MyGoldAmount>
            </MyGoldAmountWrapper>
            <MyGoldLineMobile>
              <MyGoldLine />
            </MyGoldLineMobile>
          </MyGoldWrapper>
          <GoldChargeMobileLine />
          <GoldChargeContentsWrapper>
            {step === 0 ? (
              <>
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
                  {goldData2.map((data: any, index) => (
                    <div key={index}>
                      <GoldChargeBtn
                        value={data}
                        onClick={handleGold}
                        isCheck={String(data) === gold}
                      >
                        {priceToString(data)}
                        <GoldChareBtnMobileBr />
                        골드
                      </GoldChargeBtn>
                    </div>
                  ))}
                </GoldChargeBtnWrapper>
                <GoldChargeMax>최대 충전 가능 골드 : 30,000 골드</GoldChargeMax>
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
                      {isNaN(Number(bonusGold)) ? 0 : priceToString(bonusGold)}
                      <GoldChargeBonustext> 보너스 골드</GoldChargeBonustext>
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
                <GoldChargeWarningWrapper>
                  <GoldChargeWarningImgWrapper>
                    <GoldChargeWarningImg src={WarningSVG} />
                    <GoldChargeWarningRedText>
                      입금 전 잠깐!
                    </GoldChargeWarningRedText>
                  </GoldChargeWarningImgWrapper>
                  <GoldChargeWarningText>
                    무통장 입금과 신용카드
                    <GoldChargeWarningBold>
                      &nbsp;비씨카드, 삼성카드, 롯데카드 &nbsp;
                    </GoldChargeWarningBold>
                    일시불 결제로 골드를 충전하실 수 있습니다.
                  </GoldChargeWarningText>
                </GoldChargeWarningWrapper>
                <GoldChargeMethodTitle>
                  결제수단을 선택해주세요.
                </GoldChargeMethodTitle>
                <GoldChargeMethodSelect
                  name="method"
                  onChange={handleInputCharge}
                >
                  <GoldChageMethodOption value={"CARD"}>
                    신용카드(일반)
                  </GoldChageMethodOption>
                  <GoldChageMethodOption value={"VBANK"}>
                    무통장 입금
                  </GoldChageMethodOption>
                </GoldChargeMethodSelect>
                {inputCharge.method === "VBANK" && (
                  <>
                    <GoldChargeAccountWrapper>
                      <GoldChargeAccountSmallText>
                        입금계좌번호
                      </GoldChargeAccountSmallText>
                      <GoldChargeAccountBigText>
                        신한은행 140-011-507200 <Br />
                        (예금주 : 이노핀)
                      </GoldChargeAccountBigText>
                    </GoldChargeAccountWrapper>
                    <GoldChargeWarningImgWrapper>
                      <GoldChargeWarningImg src={WarningSVG} />
                      <GoldChargeWarningRedText>
                        결제 전 잠깐!
                      </GoldChargeWarningRedText>
                    </GoldChargeWarningImgWrapper>
                    <GoldChargeAccountText>
                      입금자는 반드시 이름과 핸드폰 번호 뒷자리로 입금해주셔야
                      합니다.
                    </GoldChargeAccountText>
                    <GoldChargeAccountName>
                      {`${userData?.name}${userData?.phoneNumber.slice(
                        userData?.phoneNumber.length - 4,
                        userData?.phoneNumber.length
                      )}`}
                    </GoldChargeAccountName>
                    <GoldChargeAccountDate>
                      입금마감일 :
                      {dayjs(new Date()).add(2, "day").format("YYYY.MM.DD")}
                    </GoldChargeAccountDate>
                    <GoldChargeReceiptsWrapper>
                      <GoldChargeReceiptsTitle>
                        현금영수증 신청
                      </GoldChargeReceiptsTitle>
                      <GoldChargeReceiptsRadio
                        type="radio"
                        name="receipt"
                        id="receipt"
                        value="true"
                        checked={inputCharge.isReceipt === true ? true : false}
                        onChange={handleInputCharge}
                      />
                      <GoldChargeReceiptsLabel htmlFor="receipt">
                        발급
                      </GoldChargeReceiptsLabel>
                      <GoldChargeReceiptsRadio
                        type="radio"
                        name="receipt"
                        id="receipt2"
                        value="false"
                        checked={inputCharge.isReceipt === false ? true : false}
                        onChange={handleInputCharge}
                      />
                      <GoldChargeReceiptsLabel htmlFor="receipt2">
                        미발급
                      </GoldChargeReceiptsLabel>
                    </GoldChargeReceiptsWrapper>
                    <GoldChargeLine />
                  </>
                )}
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
                <GoldWarningWrapper>
                  <GoldWarningTitle>결제시 주의사항</GoldWarningTitle>
                  <GoldWarningText>
                    - 골드 충전 시 결제금액에 VAT(부가세 10%)가 포함되어
                    있습니다.
                  </GoldWarningText>
                  <GoldWarningText>
                    - 신용카드 결제시 일시불 결제만 가능합니다.
                  </GoldWarningText>
                  <GoldWarningText>
                    - 결제가 완료되기 전에 결제창을 닫으면 결제가 완료되지 않을
                    수 있습니다.
                  </GoldWarningText>
                  <GoldWarningText>
                    - 골드 충전 시 지급되는 보너스 골드는 환불금액에 포함되지
                    않습니다.
                  </GoldWarningText>
                  <GoldWarningText>
                    - 결제관련 문의는 카카오톡으로 연락주시기 바랍니다.
                  </GoldWarningText>
                  <GoldWarningText>
                    - 잔여 포인트 환불 시, 사용이력이 있는 경우 이용수수료 10%
                    공제 후 환불됩니다.
                  </GoldWarningText>
                </GoldWarningWrapper>
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
                  충전하기
                </GoldChargePGBtn>
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
                    입금 마감일은 신청일로부터 2일 뒤 입니다.
                  </GoldChargeReceiptsText>
                  <GoldChargeReceiptBox>
                    <GoldChargeBankImg src={BankPng} />
                    <GoldChargeReceiptsBoldText>
                      신한은행
                      <br /> 140-011-507200 (예금주 : 이노핀)
                    </GoldChargeReceiptsBoldText>
                  </GoldChargeReceiptBox>
                  <GoldChargeReceiptBox2>
                    <GoldChargeReceiptSmallText>
                      입금금액
                    </GoldChargeReceiptSmallText>
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
          </GoldChargeContentsWrapper>
        </GoldChargeBody>
      </GoldChargeWrapper>
    </>
  );
};
export default GoldChargePresenter;
