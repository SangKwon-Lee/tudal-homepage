import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../../App";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");
    const { userData } = useContext(GlobalContext);

    //* 토큰 체크
    useEffect(() => {
      if (userData.userId !== 0) return;

      const handleLoginPage = async () => {
        if (userData.userId === 0) {
          alert("로그인이 필요합니다.");
          navigate("/login");
        }
      };

      handleLoginPage();
    }, [navigate, userData.userId, userId]);
    if (userData.userId === 0) return <></>;
    return <Component {...props}></Component>;
  };
}
