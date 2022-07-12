import MyInfoPresenter from "./MyInfo.presenter";
import { GlobalContext } from "../../App";
import { useContext } from "react";
import WithAuth from "../commons/hocs/withAuth";
import useGetUser from "../commons/hooks/useGetUser";
import { deleteCookie } from "../../commons/func/cookie";

interface MyInfoProps {
  path: string;
}

const MyInfoContainer: React.FC<MyInfoProps> = ({ path }) => {
  const { userData } = useContext(GlobalContext);
  // const navigate = useNavigate();

  //* 회원정보 불러오기
  useGetUser();

  const handleLogout = () => {
    // eslint-disable-next-line no-useless-concat
    document.cookie = "tudalUser" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    deleteCookie("tudalUser");
    console.log("ASD");
    //@ts-ignore
    // var receiver = document.getElementById("receiver").contentWindow;
    // receiver.postMessage("logout", "https://us.tudal.co.kr");
    // alert("로그아웃 됐습니다");
    // if (path === "tudalus") {
    //   window.location.replace("https://us.tudal.co.kr");
    //   // window.location.href = "https://us.tudal.co.kr";
    // } else {
    //   window.location.replace("https://tudal.co.kr");
    // }
  };

  return <MyInfoPresenter userData={userData} handleLogout={handleLogout} />;
};

export default WithAuth(MyInfoContainer);
