import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import GoldHistoryPresenter from "./GoldHistory.presenter";
import WithAuth from "../commons/hocs/withAuth";
interface IGoldHistoryProps {
  path: string;
}

const GoldHistoryContainer: React.FC<IGoldHistoryProps> = ({ path }) => {
  const { userData, userGold, setUserGold, setUserData } =
    useContext(GlobalContext);
  const userId = sessionStorage.getItem("userId");

  //* 메뉴 선택
  const [menu, setMenu] = useState("all");

  //* 사용내역
  const [goldHistory, setGoldHistory] = useState([]);

  //* 유저 골드, 유저 데이터 불러오기
  useEffect(() => {
    handleGetGoldHistory();
    handleGetUserGold();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

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
      } catch (e) {}
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
    } catch (e) {
      console.log(e);
    }
  };

  //* 메뉴 선택
  const handleMenu = (e: any) => {
    setMenu(e.target.value);
  };

  return (
    <GoldHistoryPresenter
      path={path}
      userData={userData}
      userGold={userGold}
      goldHistory={goldHistory}
      handleMenu={handleMenu}
      menu={menu}
    />
  );
};

export default WithAuth(GoldHistoryContainer);
