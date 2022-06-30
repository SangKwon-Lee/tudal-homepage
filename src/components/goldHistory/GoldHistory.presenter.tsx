import dayjs from "dayjs";
import { GoldHistory } from "../../commons/types/types";
import { Body, Contents, Title } from "../commons/ui/commonStyle";
import {
  HistoryBtnWrapper,
  HistoryBtn,
  HistoryWrapper,
  HistoryType,
  HistoryTitleWrapper,
  HistoryTitle,
  HistoryText,
  HistoryDate,
  HistoryGoldWrapper,
  HistoryGold,
  HistoryBonus,
  NoHistoryWrapper,
  NoHistory,
  HistoryMoreWrapper,
  HistoryMore,
} from "./GoldHistory.style";
import noGoldHistory from "../../assets/images/noGoldHistory.png";
import { GoldMoneyImg } from "../goldCharge/GoldCharge.style";
import chargePNG from "../../assets/images/charge.png";

interface GoldHistoryProps {
  sort: string;
  more: boolean;
  length: number;
  loading: boolean;
  goldHistory: any;
  handleSort: (e: any) => void;
  handleIsView: () => void;
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

const GoldHistoryPresenter: React.FC<GoldHistoryProps> = ({
  sort,
  more,
  length,
  loading,
  handleSort,
  goldHistory,
  handleIsView,
}) => {
  return (
    <Body>
      <Contents>
        <Title id="history">
          <GoldMoneyImg src={chargePNG} alt="" />
          골드 사용 내역
        </Title>
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
          {!loading && goldHistory.length > 0 ? (
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
                    {dayjs(data.datetime).format("YY.MM.DD HH:mm")}
                  </HistoryDate>
                  <HistoryGoldWrapper>
                    <HistoryGold>
                      {/* {data.type === "add" ? "+" : "-"}&nbsp; */}
                      {data.amount}골드
                    </HistoryGold>
                    <HistoryBonus>
                      {/* {data.type === "add" ? "+" : "-"}&nbsp; */}
                      {data.bonusAmount}골드
                    </HistoryBonus>
                  </HistoryGoldWrapper>
                </HistoryWrapper>
              ))
              .slice(0, length)
          ) : (
            <NoHistoryWrapper>
              <NoHistory src={noGoldHistory}></NoHistory>
            </NoHistoryWrapper>
          )}
          {goldHistory.length > 5 && !more && (
            <HistoryMoreWrapper>
              <HistoryMore onClick={handleIsView}>더 보기</HistoryMore>
            </HistoryMoreWrapper>
          )}
        </>
      </Contents>
    </Body>
  );
};

export default GoldHistoryPresenter;
