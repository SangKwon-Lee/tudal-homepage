import MyInfoPresenter from "./MyInfo.presenter";
import { GlobalContext } from "../../App";
import { useContext } from "react";
import WithAuth from "../commons/hocs/withAuth";
import { useNavigate } from "react-router";
import useGetUser from "../commons/hooks/useGetUser";

const MyInfoContainer = () => {
  const { userData } = useContext(GlobalContext);
  const navigate = useNavigate();

  //* 회원정보 불러오기
  useGetUser();

  const handleLogout = () => {
    localStorage.removeItem("tudalUser");
    navigate("/");
  };

  return <MyInfoPresenter userData={userData} handleLogout={handleLogout} />;
};

export default WithAuth(MyInfoContainer);
