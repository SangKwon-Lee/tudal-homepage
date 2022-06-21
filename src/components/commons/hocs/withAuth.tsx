import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserId } from "../../../commons/func/hash";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = getUserId();
    //* userId 체크
    useEffect(() => {
      if (userId === null || userId === undefined) {
        alert("로그인이 필요합니다.");
        navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);
    if (!userId) return <></>;
    return <Component {...props}></Component>;
  };
}
