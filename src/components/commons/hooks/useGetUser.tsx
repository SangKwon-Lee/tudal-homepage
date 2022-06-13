import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../App";

const useGetUser = (): null => {
  const userId = localStorage.getItem("tudalUser");
  const { setUserGold, setUserData } = useContext(GlobalContext);

  //* 유저 골드 및 회원 정보 불러오기
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

  useEffect(() => {
    handleGetUserGold();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return null;
};

export default useGetUser;
