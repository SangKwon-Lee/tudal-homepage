import { Body, Contents, Title } from "../commons/ui/commonStyle";
import { priceToString } from "../goldCharge/GoldCharge.presenter";
import {
  GoldMyMoneyWrapper,
  GoldMoneyImg,
  GoldMyGold,
  GoldText,
  GoldDetailWrapper,
  GoldDetail,
} from "../goldCharge/GoldCharge.style";
import moneyPNG from "../../assets/images/money.png";
import paymentPNG from "../../assets/images/payment.png";
// import historyPNG from "../../assets/images/history.png";
import settingPNG from "../../assets/images/setting.png";
import { GoldHistory, UserData, UserGold } from "../../commons/types/types";
import {
  HistoryBonus,
  HistoryBtn,
  HistoryBtnWrapper,
  HistoryDate,
  HistoryGold,
  HistoryGoldWrapper,
  HistoryMore,
  HistoryMoreWrapper,
  HistoryText,
  HistoryTitle,
  HistoryTitleWrapper,
  HistoryType,
  HistoryWrapper,
  UserNameIcon,
  UserNameWrapper,
} from "./Mypage.style";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
interface IMypageProps {
  sort: string;
  isView: {
    more: boolean;
    history: boolean;
    subscription: boolean;
  };
  length: number;
  goldHistory: any;
  userData: UserData;
  userGold: UserGold;
  handleSort: (e: any) => void;
  handleIsView: (e: any) => void;
}

const sortBtn = [
  {
    name: "전체",
    value: "",
  },
  {
    name: "골드충전",
    value: "add",
  },
  {
    name: "골드사용",
    value: "subtract",
  },
];

const MypagePresenter: React.FC<IMypageProps> = ({
  sort,
  length,
  isView,
  userData,
  userGold,
  handleSort,
  goldHistory,
  handleIsView,
}) => {
  const navigate = useNavigate();
  return (
    <Body>
      <Contents>
        <UserNameWrapper>
          <Title>{userData.name}님</Title>
          <UserNameIcon
            id="myInfo"
            onClick={() => {
              navigate("/myInfo");
            }}
            src={settingPNG}
            alt=""
          />
        </UserNameWrapper>
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
        <Title
          id="history"
          style={{ cursor: "pointer" }}
          onClick={handleIsView}
        >
          <GoldMoneyImg src={paymentPNG} alt="" />
          골드 사용내역
        </Title>
        {isView.history && (
          <>
            <HistoryBtnWrapper>
              {sortBtn.map((data: any) => (
                <HistoryBtn
                  key={data.name}
                  value={data.value}
                  onClick={handleSort}
                  isSort={sort === data.value}
                >
                  {data.name}
                </HistoryBtn>
              ))}
            </HistoryBtnWrapper>
            {goldHistory.length > 0 ? (
              goldHistory
                .filter((data: GoldHistory) =>
                  sort !== "" ? data.type === sort : data
                )
                .map((data: GoldHistory) => (
                  <HistoryWrapper key={data.id}>
                    <HistoryType isType={data.type}>
                      {data.type === "add"
                        ? "충전"
                        : data.type === "subtract"
                        ? "사용"
                        : "취소"}
                    </HistoryType>
                    <HistoryTitleWrapper>
                      <HistoryTitle>
                        {data.type === "add"
                          ? "골드 충전"
                          : data.type === "subtract"
                          ? "골드 사용"
                          : "골드 충전취소"}
                      </HistoryTitle>
                      <HistoryText>{data.category}</HistoryText>
                    </HistoryTitleWrapper>
                    <HistoryDate>
                      {dayjs(data.datetime).format("YYYY.MM.DD.HH:mm")}
                    </HistoryDate>
                    <HistoryGoldWrapper>
                      <HistoryGold>
                        {data.type === "add" ? "+" : "-"}&nbsp;
                        {data.amount}골드
                      </HistoryGold>
                      <HistoryBonus>
                        {data.type === "add" ? "+" : "-"}&nbsp;
                        {data.bonusAmount}골드
                      </HistoryBonus>
                    </HistoryGoldWrapper>
                  </HistoryWrapper>
                ))
                .slice(0, length)
            ) : (
              <div>골드 사용 내역이 없습니다.</div>
            )}
            {goldHistory.length > 5 && !isView.more && (
              <HistoryMoreWrapper>
                <HistoryMore id="more" onClick={handleIsView}>
                  더 보기
                </HistoryMore>
              </HistoryMoreWrapper>
            )}
          </>
        )}
      </Contents>
      {/* <Contents>
        <Title
          id="subscription"
          style={{ cursor: "pointer" }}
          onClick={handleIsView}
        >
          <GoldMoneyImg src={historyPNG} alt="" />
          구독내역
        </Title>
      </Contents> */}
    </Body>
  );
};
export default MypagePresenter;