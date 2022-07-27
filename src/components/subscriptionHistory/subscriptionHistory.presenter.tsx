import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { TudalUsHistory } from "../../commons/types/types";
import { Body, Contents, Title } from "../commons/ui/commonStyle";
import {
  SubWrapper,
  SubTitleWrapper,
  SubLogo,
  SubTitle,
  SubContentsWrapper,
  SubContentsTitle,
  SubContentsTextBold,
  SubContentsSubTitle,
  SubContentsText,
  SubBtn,
} from "./subscriptionHistory.style";
import miniTudal from "../../assets/images/miniUsLogo.png";
import { GoldMoneyImg } from "../goldCharge/GoldCharge.style";
import subsPNG from "../../assets/images/subs.png";

interface SubscriptionHistoryPresenterPrps {
  loading: boolean;
  tudlaUsHistory: any;
}

const SubscriptionHistoryPresenter: React.FC<SubscriptionHistoryPresenterPrps> =
  ({ loading, tudlaUsHistory }) => {
    const navigate = useNavigate();
    return (
      <>
        <Body>
          <Contents>
            <Title id="history">
              <GoldMoneyImg src={subsPNG} alt="" />
              통합 구독 내역
            </Title>
            {!loading &&
              tudlaUsHistory.map((data: TudalUsHistory) => (
                <SubWrapper key={data.id}>
                  <SubTitleWrapper>
                    <SubLogo src={miniTudal} />
                    <SubTitle>투달유에스</SubTitle>
                  </SubTitleWrapper>
                  <SubContentsWrapper>
                    <SubContentsTitle>구독 상태</SubContentsTitle>
                    <SubContentsTextBold>
                      {data.endDate
                        ? dayjs(data?.endDate).isAfter(dayjs().format())
                          ? "구독 중"
                          : "구독 종료"
                        : "구독 중이 아닙니다"}
                      {}
                    </SubContentsTextBold>
                  </SubContentsWrapper>
                  <SubContentsWrapper>
                    <SubContentsTitle>구독 기간</SubContentsTitle>
                    <SubContentsTextBold>
                      {data?.endDate &&
                        `${dayjs(data.startDate).format("YYYY.MM.DD")}~
                    ${dayjs(data?.endDate).format("YYYY.MM.DD")}`}
                    </SubContentsTextBold>
                  </SubContentsWrapper>
                  {/* <SubContentsWrapper>
                  <SubContentsTitle>결제 골드</SubContentsTitle>
                  <SubContentsTextBold>
                    {tudlaUsHistoryGold.length > 0 &&
                      tudlaUsHistoryGold[0]?.amount +
                        tudlaUsHistoryGold[0]?.bonusAmount}
                  </SubContentsTextBold>
                </SubContentsWrapper>
                <SubContentsWrapper>
                  <SubContentsSubTitle>보유 골드</SubContentsSubTitle>
                  <SubContentsText>
                    -
                    {tudlaUsHistoryGold.length > 0 &&
                      tudlaUsHistoryGold[0]?.amount}
                  </SubContentsText>
                </SubContentsWrapper>
                <SubContentsWrapper>
                  <SubContentsSubTitle>보너스 골드</SubContentsSubTitle>
                  <SubContentsText>
                    -
                    {tudlaUsHistoryGold.length > 0 &&
                      tudlaUsHistoryGold[0]?.bonusAmount}
                  </SubContentsText>
                </SubContentsWrapper> */}
                  {/* <SubContentsWrapper>
                  <SubContentsTitle>결제 수단</SubContentsTitle>
                  <SubContentsTextBold>
                    {data.type === "gold" && "골드"}
                  </SubContentsTextBold>
                </SubContentsWrapper> */}
                  {!dayjs(data?.endDate).isAfter(dayjs().format()) && (
                    <SubBtn onClick={() => navigate("/tudalus/payment")}>
                      투달유에스 구독하기
                    </SubBtn>
                  )}
                </SubWrapper>
              ))}
          </Contents>
        </Body>
      </>
    );
  };

export default SubscriptionHistoryPresenter;
