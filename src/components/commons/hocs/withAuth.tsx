import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = localStorage.getItem("tudalUser");
    //* userId 체크
    useEffect(() => {
      if (userId === null) {
        alert("로그인이 필요합니다.");
        navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);
    if (!userId) return <></>;
    return <Component {...props}></Component>;
  };
}
