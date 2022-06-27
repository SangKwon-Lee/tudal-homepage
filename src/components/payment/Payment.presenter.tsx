import { Body, Contents } from "../commons/ui/commonStyle";
import {
  PaymentBodyWrapper,
  PaymentBtn,
  PaymentCheck,
  PaymentContents,
  PaymentContentsSubText,
  PaymentContentsSubTitle,
  PaymentContentsTitle,
  PaymentContentsWrapper,
  PaymentIcon,
  PaymentTitle,
  PaymetnTitleWrapper,
} from "./Payment.style";
import dayjs from "dayjs";
import plusIcon from "../../assets/images/plusIcon.png";
import miusIcon from "../../assets/images/miusIcon.png";
import paycheck from "../../assets/images/paycheck.png";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import useGetUser from "../commons/hooks/useGetUser";
import { useNavigate } from "react-router";
import { GoldMoneyImg } from "../goldCharge/GoldCharge.style";
import moneyWhitePNG from "../../assets/images/goldWhite.png";
interface PaymentProps {
  path: string;
  step: number;
  product: any;
  canBuy: boolean;
  loading: boolean;
  subtractGold: {
    remainGold: number;
    remainBonusGold: number;
    remainUserGold: number;
    remainUserBonusGold: number;
  };
  handleUserGoldSubtract: () => void;
}

const PaymentPresenter: React.FC<PaymentProps> = ({
  path,
  step,
  loading,
  canBuy,
  product,
  subtractGold,
  handleUserGoldSubtract,
}) => {
  const navigate = useNavigate();

  //* 회원 정보 불러오기;
  useGetUser();

  //* 회원 정보
  const { userGold } = useContext(GlobalContext);

  return (
    <Body>
      <Contents>
        {!loading && (
          <>
            <PaymentBodyWrapper>
              {step === 0 ? (
                <PaymentIcon src={canBuy ? plusIcon : miusIcon}></PaymentIcon>
              ) : (
                <PaymentIcon src={paycheck}></PaymentIcon>
              )}

              <PaymetnTitleWrapper>
                {step === 1 ? (
                  <PaymentTitle>
                    {path === "tudalus" ? "투달러스" : "뉴스스탁"}한 달
                    구독하기가 결제 완료되었습니다
                  </PaymentTitle>
                ) : canBuy ? (
                  <PaymentTitle>
                    {path === "tudalus" ? "투달러스" : "뉴스스탁"}한 달
                    구독하기를 구매합니다.
                  </PaymentTitle>
                ) : (
                  <PaymentTitle>결제할 골드가 부족합니다</PaymentTitle>
                )}
                {step === 1 && (
                  <PaymentCheck>
                    결제일 : {dayjs().format("YYYY년 MM월 DD일 HH:mm")}
                  </PaymentCheck>
                )}
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
                    구독({product[0].period}일)
                  </PaymentContentsSubText>
                </PaymentContentsWrapper>
                <PaymentContentsWrapper>
                  <PaymentContentsSubTitle>
                    결제시 구독기간
                  </PaymentContentsSubTitle>
                  <PaymentContentsSubText>
                    {dayjs().format("YYYY년 MM월 DD일")}~
                    {dayjs().add(product[0].period, "day").format("MM월 DD일")}
                  </PaymentContentsSubText>
                </PaymentContentsWrapper>
              </PaymentContents>
              <PaymentContents>
                <PaymentContentsTitle>
                  결제할 골드 : -{product[0].gold}개
                </PaymentContentsTitle>
                <PaymentContentsWrapper
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <PaymentContentsSubTitle>골드</PaymentContentsSubTitle>
                  <PaymentContentsSubText>
                    -{product[0].gold * 0.9}개
                  </PaymentContentsSubText>
                </PaymentContentsWrapper>
                <PaymentContentsWrapper>
                  <PaymentContentsSubTitle>
                    보너스 골드 (구매금액의 10% 보너스 골드 차감)
                  </PaymentContentsSubTitle>
                  <PaymentContentsSubText>
                    -{product[0].gold / 10}개
                  </PaymentContentsSubText>
                </PaymentContentsWrapper>
              </PaymentContents>
              <PaymentContents style={{ borderBottom: "5px solid #f7f7f7" }}>
                {canBuy ? (
                  <PaymentContentsTitle>
                    결제 후 남은 골드 : &nbsp;
                    {subtractGold.remainUserGold +
                      subtractGold.remainUserBonusGold}
                    개
                  </PaymentContentsTitle>
                ) : (
                  <PaymentContentsTitle>
                    보유 중인 골드 : &nbsp;
                    {userGold.gold}개
                  </PaymentContentsTitle>
                )}

                <PaymentContentsWrapper
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <PaymentContentsSubTitle>골드</PaymentContentsSubTitle>
                  {canBuy ? (
                    <PaymentContentsSubText>
                      {subtractGold.remainUserGold}개
                    </PaymentContentsSubText>
                  ) : (
                    <PaymentContentsSubText>
                      {userGold.gold}개
                    </PaymentContentsSubText>
                  )}
                </PaymentContentsWrapper>
                <PaymentContentsWrapper>
                  <PaymentContentsSubTitle>보너스 골드</PaymentContentsSubTitle>
                  {canBuy ? (
                    <PaymentContentsSubText>
                      {subtractGold.remainUserBonusGold}개
                    </PaymentContentsSubText>
                  ) : (
                    <PaymentContentsSubText>
                      {userGold.bonusGold}개
                    </PaymentContentsSubText>
                  )}
                </PaymentContentsWrapper>
              </PaymentContents>
            </PaymentBodyWrapper>
            {step === 1 ? (
              <PaymentBtn
                onClick={() => {
                  window.location.href = "https://us.tudal.co.kr";
                }}
              >
                {path === "tudalus" ? "투달러스" : "뉴스스탁"} 보러가기
              </PaymentBtn>
            ) : (
              <PaymentBtn
                onClick={() => {
                  canBuy ? handleUserGoldSubtract() : navigate("/gold");
                }}
              >
                {canBuy ? (
                  "결제하기"
                ) : (
                  <>
                    <GoldMoneyImg src={moneyWhitePNG} alt="" />
                    투달 골드 충전하기
                  </>
                )}
              </PaymentBtn>
            )}
          </>
        )}
      </Contents>
    </Body>
  );
};

export default PaymentPresenter;
