import MypagePresenter from "./Mypage.presenter";
import { GlobalContext } from "../../App";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import WithAuth from "../commons/hocs/withAuth";
import useGetUser from "../commons/hooks/useGetUser";

const MypageContainer = () => {
  const userId = localStorage.getItem("tudalUser");
  const { userGold, userData } = useContext(GlobalContext);

  //* 회원 정보 불러오기;
  useGetUser();

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

  //* 골드 사용내역 불러오기
  const handleGetGoldHistory = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.tudal.co.kr/api/golds/history/${userId}?limit=99999`,
        {
          headers: {
            pragma: "no-cache",
          },
        }
      );
      setGoldHistory(data);
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
  }, [handleGetGoldHistory, userId]);

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
    />
  );
};
export default WithAuth(MypageContainer);
