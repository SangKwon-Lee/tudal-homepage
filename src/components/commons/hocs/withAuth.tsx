import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../../App";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userData } = useContext(GlobalContext);
    //* 토큰 체크
    useEffect(() => {
      const handleLoginPage = async () => {
        if (userId === null) {
          alert("로그인이 필요합니다.");
          navigate("/login");
        }
      };

      handleLoginPage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);
    if (!userId) return <></>;
    return <Component {...props}></Component>;
  };
}
