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
  MyGoldLine,
  MyGoldAmountWrapper,
  MyGoldAmountText,
  MyGoldAmount,
  MyGoldTextTopWrapper,
  MyGoldLineMobile,
} from "../goldCharge/GoldCharge.style";
import {
  GoldHistoryBody,
  GoldHistoryContentsWrapper,
  GoldHistoryMenuBtn,
  GoldHistoryMenuWrapper,
  // GoldHistoryTableArrow,
  GoldHistoryTableBtn,
  GoldHistoryTableDate,
  GoldHistoryTableDevice,
  GoldHistoryTableGold,
  GoldHistoryTableGoldWrapper,
  GoldHistoryTableMobileGoldWrapper,
  GoldHistoryTableMobileTitleWrapper,
  GoldHistoryTableTitle,
  GoldHistoryTableTitleWrapper,
  GoldHistoryTableWrapper,
  GoldHistoryWrapper,
  MyGoldHistoryWrapper,
} from "./GoldHistory.style";
// import RightArrow from "../../assets/images/rightArrow.png";

interface IGoldHistoryProps {
  path: string;
  userGold: UserGold;
  userData: UserData;
  goldHistory: UserGoldHistory[];
  handleMenu: (e: any) => void;
  menu: string;
}
function priceToString(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const GoldHistoryPresenter: React.FC<IGoldHistoryProps> = ({
  path,
  userData,
  userGold,
  goldHistory,
  handleMenu,
  menu,
}) => {
  console.log(goldHistory);
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
            <MyGoldTextTopWrapper>
              <MyGoldText>{userData.name}님의 골드</MyGoldText>
              <MyGoldText>
                <MyGoldNumber>
                  {userGold.gold || userGold.bonusGold
                    ? priceToString(userGold.gold + userGold.bonusGold)
                    : 0}
                </MyGoldNumber>
                골드
              </MyGoldText>
            </MyGoldTextTopWrapper>
            <MyGoldLine />
            <MyGoldAmountWrapper>
              <MyGoldAmountText>충전한 골드</MyGoldAmountText>
              <MyGoldAmount>
                {userGold.gold ? priceToString(userGold.gold) : 0}
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
                {userGold.bonusGold ? priceToString(userGold.bonusGold) : "0"}
                <MyGoldAmountText style={{ marginLeft: "5px" }}>
                  골드
                </MyGoldAmountText>
              </MyGoldAmount>
            </MyGoldAmountWrapper>
            <MyGoldLineMobile>
              <MyGoldLine />
            </MyGoldLineMobile>
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
                    <GoldHistoryTableTitleWrapper>
                      <GoldHistoryTableTitle>
                        {data.category}
                      </GoldHistoryTableTitle>
                      {data.bonusAmount ? (
                        <GoldHistoryTableTitle style={{ paddingTop: "10px" }}>
                          {data.bonusAmount ? "골드충전 보너스 지급" : ""}
                        </GoldHistoryTableTitle>
                      ) : (
                        ""
                      )}
                    </GoldHistoryTableTitleWrapper>
                    <GoldHistoryTableDate>
                      {dayjs(data.created_at).format("YYYY.MM.DD.HH:mm")}
                    </GoldHistoryTableDate>
                  </GoldHistoryTableMobileTitleWrapper>
                  <GoldHistoryTableMobileGoldWrapper>
                    <GoldHistoryTableGoldWrapper>
                      <GoldHistoryTableGold>
                        {data.type === "add" ? (
                          <>
                            <GoldHistoryTableGold>
                              + {Number(data.amount)} 골드
                            </GoldHistoryTableGold>
                            {data.bonusAmount ? (
                              <GoldHistoryTableGold
                                style={{ fontWeight: 400, paddingTop: "10px" }}
                              >
                                + {Number(data.bonusAmount)} 골드
                              </GoldHistoryTableGold>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          <>
                            <GoldHistoryTableGold>
                              - {Number(data.amount)} 골드
                            </GoldHistoryTableGold>
                            {data.bonusAmount ? (
                              <GoldHistoryTableGold
                                style={{ fontWeight: 400, paddingTop: "10px" }}
                              >
                                - {Number(data.bonusAmount)} 골드
                              </GoldHistoryTableGold>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                      </GoldHistoryTableGold>
                    </GoldHistoryTableGoldWrapper>
                    <GoldHistoryTableDevice>
                      {data.category === "웹" ? "웹 결제" : "앱 결제"}
                    </GoldHistoryTableDevice>
                  </GoldHistoryTableMobileGoldWrapper>
                  {/* <GoldHistoryTableArrow src={RightArrow} /> */}
                </GoldHistoryTableWrapper>
              ))}
          </GoldHistoryContentsWrapper>
        </GoldHistoryBody>
      </GoldHistoryWrapper>
    </>
  );
};

export default GoldHistoryPresenter;
