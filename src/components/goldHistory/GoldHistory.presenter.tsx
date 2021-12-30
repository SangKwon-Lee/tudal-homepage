import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { UserData, UserGold, UserGoldHistory } from "../../commons/types/types";
import {
  GoldMenuWrapper,
  GoldMenuBody,
  GoldMenuTitleWrapper,
  GoldMenuTitle,
  MyGoldText,
  MyGoldNumber,
} from "../goldCharge/GoldCharge.style";
import {
  GoldHistoryBody,
  GoldHistoryContentsWrapper,
  GoldHistoryMenuBtn,
  GoldHistoryMenuWrapper,
  GoldHistoryTableArrow,
  GoldHistoryTableBtn,
  GoldHistoryTableDate,
  GoldHistoryTableDevice,
  GoldHistoryTableGold,
  GoldHistoryTableMobileGoldWrapper,
  GoldHistoryTableMobileTitleWrapper,
  GoldHistoryTableTitle,
  GoldHistoryTableWrapper,
  GoldHistoryWrapper,
  MyGoldHistoryWrapper,
} from "./GoldHistory.style";
import RightArrow from "../../assets/images/rightArrow.png";

interface IGoldHistoryProps {
  path: string;
  userGold: UserGold;
  userData: UserData;
  goldHistory: UserGoldHistory[];
  handleMenu: (e: any) => void;
  menu: string;
}
const GoldHistoryPresenter: React.FC<IGoldHistoryProps> = ({
  path,
  userData,
  userGold,
  goldHistory,
  handleMenu,
  menu,
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
      <GoldHistoryWrapper>
        <GoldHistoryBody>
          <MyGoldHistoryWrapper>
            <MyGoldText>{userData.name}님의 골드</MyGoldText>
            <MyGoldText>
              <MyGoldNumber>{userGold.gold + userGold.bonusGold}</MyGoldNumber>
              골드
            </MyGoldText>
          </MyGoldHistoryWrapper>
          <GoldHistoryContentsWrapper>
            <GoldHistoryMenuWrapper>
              <GoldHistoryMenuBtn
                value="all"
                onClick={handleMenu}
                isMenu={menu === "all"}
              >
                전체
              </GoldHistoryMenuBtn>
              <GoldHistoryMenuBtn
                value="charge"
                onClick={handleMenu}
                isMenu={menu === "charge"}
              >
                골드 충전내역
              </GoldHistoryMenuBtn>
              <GoldHistoryMenuBtn
                value="used"
                onClick={handleMenu}
                isMenu={menu === "used"}
              >
                골드 사용내역
              </GoldHistoryMenuBtn>
            </GoldHistoryMenuWrapper>
            {goldHistory
              .filter((data) =>
                menu === "all"
                  ? data
                  : menu === "charge"
                  ? data.type === "add"
                  : data.type !== "add"
              )
              .map((data) => (
                <GoldHistoryTableWrapper key={data.id}>
                  <GoldHistoryTableBtn isType={data.type === "add"}>
                    {data.type === "add" ? "충전" : "사용"}
                  </GoldHistoryTableBtn>
                  <GoldHistoryTableMobileTitleWrapper>
                    <GoldHistoryTableTitle>
                      {data.category}
                    </GoldHistoryTableTitle>
                    <GoldHistoryTableDate>
                      {dayjs(data.created_at).format("YYYY.MM.DD.HH:mm")}
                    </GoldHistoryTableDate>
                  </GoldHistoryTableMobileTitleWrapper>
                  <GoldHistoryTableMobileGoldWrapper>
                    <GoldHistoryTableGold>
                      {data.type === "add"
                        ? `+ ${Number(data.amount) + Number(data.bonusAmount)}`
                        : `- ${Number(data.amount) + Number(data.bonusAmount)}`}
                    </GoldHistoryTableGold>
                    <GoldHistoryTableDevice>
                      {data.category === "웹" ? "웹 결제" : "앱 결제"}
                    </GoldHistoryTableDevice>
                  </GoldHistoryTableMobileGoldWrapper>
                  <GoldHistoryTableArrow src={RightArrow} />
                </GoldHistoryTableWrapper>
              ))}
          </GoldHistoryContentsWrapper>
        </GoldHistoryBody>
      </GoldHistoryWrapper>
    </>
  );
};

export default GoldHistoryPresenter;
