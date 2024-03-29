import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../App";
import { apiServer } from "../../../commons/axios/axios";
import { getUserId } from "../../../commons/func/hash";

const useGetUser = (): null => {
  const userId = getUserId();

  const { setUserGold, setUserData } = useContext(GlobalContext);

  //* 유저 골드 및 회원 정보 불러오기
  const handleGetUserGold = async () => {
    if (userId) {
      try {
        const { data, status: goldStatus } = await apiServer.get(
          `/golds/${userId}`,
          {
            headers: {
              pragma: "no-cache",
            },
          }
        );
        const { data: userData, status } = await apiServer.get(
          `/user/${userId}`,
          {
            headers: {
              pragma: "no-cache",
            },
          }
        );
        if (status === 200 && userData[0]) {
          setUserData(userData[0]);
        }
        if (goldStatus === 200 && data) {
          if (data.msg === "골드 내역이 없는 사용자 입니다.") {
            setUserGold(data);
          } else {
            setUserGold(data[0]);
          }
        }
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
