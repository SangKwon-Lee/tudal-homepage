import { Body, Contents } from "../commons/ui/commonStyle";
import {
  PaymentBodyWrapper,
  PaymentBtn,
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
import { useContext } from "react";
import { GlobalContext } from "../../App";
import useGetUser from "../commons/hooks/useGetUser";
import { useNavigate } from "react-router";
import { GoldMoneyImg } from "../goldCharge/GoldCharge.style";
import moneyWhitePNG from "../../assets/images/goldWhite.png";
interface PaymentProps {
  path: string;
  product: any;
  canBuy: boolean;
  loading: boolean;
  subtractGold: {
    remainGold: number;
    remainBonusGold: number;
    remainUserGold: number;
    remainUserBonusGold: number;
  };
  tudlaUsHistory: any;
  handleUserGoldSubtract: () => void;
}

const PaymentPresenter: React.FC<PaymentProps> = ({
  path,
  loading,
  canBuy,
  product,
  subtractGold,
  tudlaUsHistory,
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
              <PaymentIcon src={canBuy ? plusIcon : miusIcon}></PaymentIcon>

              <PaymetnTitleWrapper>
                {canBuy ? (
                  <PaymentTitle>
                    {path === "tudalus" ? "투달유에스" : "뉴스스탁"} 한 달 구독
                    하기
                  </PaymentTitle>
                ) : (
                  <PaymentTitle>결제할 골드가 부족합니다</PaymentTitle>
                )}
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
                    구독({product[0].period}일)
                  </PaymentContentsSubText>
                </PaymentContentsWrapper>
                <PaymentContentsWrapper>
                  <PaymentContentsSubTitle>
                    결제시 구독기간
                  </PaymentContentsSubTitle>
                  <PaymentContentsSubText>
                    {dayjs(tudlaUsHistory.endDate).isAfter(dayjs().format())
                      ? dayjs(tudlaUsHistory.endDate)
                          .add(product[0].period, "day")
                          .format("YYYY년 MM월 DD일")
                      : dayjs()
                          .add(product[0].period, "day")
                          .format("YYYY년 MM월 DD일")}
                    &nbsp;까지
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
                    보너스 골드 (구매금액의 10%까지 차감)
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
            <PaymentBtn
              onClick={() => {
                canBuy
                  ? handleUserGoldSubtract()
                  : navigate("/tudalus/payment/cash");
              }}
            >
              {canBuy ? (
                "골드로 결제하기"
              ) : (
                <>
                  <GoldMoneyImg src={moneyWhitePNG} alt="" />
                  즉시 결제하기
                </>
              )}
            </PaymentBtn>
          </>
        )}
      </Contents>
    </Body>
  );
};

export default PaymentPresenter;
