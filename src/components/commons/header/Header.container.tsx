import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { deleteCookie } from "../../../commons/func/cookie";
import { customNavigate } from "../../../commons/func/customNavigate";
import { getUserId } from "../../../commons/func/hash";
import HeaderPresenter from "./Header.presenter";

interface IHeaderProps {
  path: string;
  route: string;
}
const HeaderContainer: React.FC<IHeaderProps> = ({ path, route }) => {
  const userId = getUserId();
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteCookie("tudalUser");
    //@ts-ignore
    var receiver = document.getElementById("receiver").contentWindow;
    receiver.postMessage("logout", "https://us.tudal.co.kr");

    if (route === "tudalus") {
      window.location.href = "https://us.tudal.co.kr";
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderPresenter
      path={path}
      route={route}
      userId={userId}
      handleLogout={handleLogout}
    />
  );
};
export default HeaderContainer;
