import MyInfoPresenter from "./MyInfo.presenter";
import { GlobalContext } from "../../App";
import { useContext, useEffect } from "react";
import axios from "axios";
import WithAuth from "../commons/hocs/withAuth";
import { useNavigate } from "react-router";

const MyInfoContainer = () => {
  const userId = sessionStorage.getItem("userId");
  const { setUserGold, setUserData, userData } = useContext(GlobalContext);
  const navigate = useNavigate();

  //* 유저 불러오기 useEffect
  useEffect(() => {
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
      } catch (e) {
        alert("회원정보가 없습니다.");
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return <MyInfoPresenter userData={userData} handleLogout={handleLogout} />;
};

export default WithAuth(MyInfoContainer);
