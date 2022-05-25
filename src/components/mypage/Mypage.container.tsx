import MypagePresenter from "./Mypage.presenter";
import { GlobalContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import WithAuth from "../commons/hocs/withAuth";

const MypageContainer = () => {
  const userId = sessionStorage.getItem("userId");
  const { setUserGold, userGold, setUserData, userData } =
    useContext(GlobalContext);

  // * sort
  const [sort, setSort] = useState("");

  // * 더 보기 수
  const [length, setLength] = useState(0);

  // * 사용내역, 구독내역 보기
  const [isView, setIsView] = useState({
    more: false,
    history: false,
    subscription: false,
  });

  //* 사용내역
  const [goldHistory, setGoldHistory] = useState([
    {
      id: 0,
      type: "",
      code: "",
      userId: 0,
      amount: 0,
      payment: [],
      category: "",
      datetime: "",
      isExpired: 0,
      bonusAmount: 0,
      created_at: "",
      updated_at: "",
    },
  ]);

  //* 유저 골드, 사용내역 정보 불러오기 useEffect
  useEffect(() => {
    handleGetUserGold();
    handleGetGoldHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // * 더 보기 버튼 클릭시
  useEffect(() => {
    if (isView.more) {
      setLength(-1);
    }
  }, [isView.more]);

  //* 유저 골드 정보 불러오기
  const handleGetUserGold = async () => {
    if (userId) {
      try {
        const { data } = await axios.get(
          `https://api.tudal.co.kr/api/golds/${userId}`,
          {
            headers: {
              pragma: "no-cache",
            },
          }
        );
        const { data: userData } = await axios.get(
          `https://api.tudal.co.kr/api/user/${userId}`,
          {
            headers: {
              pragma: "no-cache",
            },
          }
        );
        setUserData(userData[0]);
        setUserGold(data[0]);
      } catch (e) {
        alert("회원정보가 없습니다.");
      }
    }
  };

  //* 골드 사용내역 불러오기
  const handleGetGoldHistory = async () => {
    try {
      const { data } = await axios.get(
        `https://api.tudal.co.kr/api/golds/history/${userId}?limit=100`,
        {
          headers: {
            pragma: "no-cache",
          },
        }
      );
      setGoldHistory(data);
      if (data.length > 6) {
        setLength(6);
      } else {
        setLength(-1);
      }
    } catch (e) {}
  };

  // * 보기 버튼 관리
  const handleIsView = (e: any) => {
    if (e.target.id === "history") {
      setIsView({
        ...isView,
        history: !isView.history,
      });
    } else if (e.target.id === "subscription") {
      setIsView({
        ...isView,
        subscription: !isView.subscription,
      });
    } else {
      setIsView({
        ...isView,
        more: !isView.more,
      });
    }
  };

  // * 정렬 버튼 관리
  const handleSort = (e: any) => {
    setSort(e.target.value);
  };

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
