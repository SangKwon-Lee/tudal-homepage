import { GlobalContext } from "../../App";
import WithAuth from "../commons/hocs/withAuth";
import MypagePresenter from "./Mypage.presenter";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import { useCallback, useContext, useEffect, useState } from "react";
import { apiServer, cmsServer, CMS_TOKEN } from "../../commons/axios/axios";

const MypageContainer = () => {
  const userId = getUserId();

  const { userGold, userData } = useContext(GlobalContext);

  //* 회원 정보 불러오기;
  useGetUser();
  //@ts-ignore
  function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  setCookie("pop", "event0405", 7); /* pop=event0405, 7일 뒤 만료됨 */
  // * sort
  const [sort, setSort] = useState("");

  // * 사용내역, 구독내역 보기
  const [isView, setIsView] = useState({
    more: false,
    history: false,
    subscription: false,
  });

  //* 길이 조절
  const [length, setLength] = useState(6);

  //* 사용내역
  const [goldHistory, setGoldHistory] = useState([]);

  //* 투달러스 구독 내역
  const [tudlaUsHistory, setTudlaUsHistory] = useState([
    {
      created_at: "",
      endDate: "",
      id: 0,
      startDate: "",
      subscription: false,
      type: "",
      updated_at: "",
      userId: 0,
    },
  ]);

  //* 투달러스 구독 골드 내역
  const [tudlaUsHistoryGold, setTudlaUsHistoryGold] = useState([]);

  //* 골드 사용내역 불러오기
  const handleGetGoldHistory = useCallback(async () => {
    try {
      const { data, status } = await apiServer.get(
        `golds/history/${userId}?limit=99999`,
        {
          headers: {
            pragma: "no-cache",
          },
        }
      );

      if (status === 200 && data.length > 0) {
        setTudlaUsHistoryGold(
          data.filter((data: any) => data.category === "투달러스 구독")
        );
        setGoldHistory(data);
      }
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  //* 투달러스 구독 내역 불러오기
  const handleGetTudalUsHistory = useCallback(async () => {
    try {
      //* 기존에 구독한 적이 있는지
      const { data, status } = await cmsServer.get(
        `/tudalus-premium-users?userId=${userId}&token=${CMS_TOKEN}`
      );
      if (status === 200 && data[0]) {
        setTudlaUsHistory(data);
      }
    } catch (e) {}
  }, [userId]);

  // * 보기 버튼 관리
  const handleIsView = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLButtonElement;
    setIsView({
      ...isView,
      //@ts-ignore
      [event.id]: !isView[event.id],
    });
    if (event.id === "more") {
      setLength(99999);
    }
  };

  // * 정렬 버튼 관리
  const handleSort = (e: any) => {
    setSort(e.target.value);
  };

  //* 유저 골드, 사용내역 정보 불러오기 useEffect
  useEffect(() => {
    handleGetGoldHistory();
    handleGetTudalUsHistory();
  }, [handleGetGoldHistory, userId, handleGetTudalUsHistory]);

  return (
    <MypagePresenter
      sort={sort}
      length={length}
      isView={isView}
      userGold={userGold}
      userData={userData}
      handleSort={handleSort}
      goldHistory={goldHistory}
      handleIsView={handleIsView}
      tudlaUsHistory={tudlaUsHistory}
      tudlaUsHistoryGold={tudlaUsHistoryGold}
    />
  );
};
export default WithAuth(MypageContainer);
