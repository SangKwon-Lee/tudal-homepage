import HeaderPresenter from "./Header.presenter";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../../../App";

interface IHeaderProps {
  path: string;
}
const HeaderContainer: React.FC<IHeaderProps> = ({ path }) => {
  const navigate = useNavigate();
  const { setUserGold, setUserData } = useContext(GlobalContext);
  const userId = sessionStorage.getItem("userId");

  const handleLogout = () => {
    sessionStorage.clear();
    setUserData({
      birthday: "",
      ci: "",
      createdAt: "",
      di: "",
      name: "",
      isDeleted: "",
      gender: "",
      nickname: "",
      phoneNumber: "",
      role: "",
      telecomCode: "",
      updatedAt: "",
      userId: 0,
    });
    setUserGold({
      bonusGold: 0,
      created_at: "",
      gold: 0,
      id: 0,
      updated_at: "",
      userId: 0,
    });
    navigate("/");
    alert("로그아웃 됐습니다.");
  };

  return (
    <HeaderPresenter path={path} handleLogout={handleLogout} userId={userId} />
  );
};
export default HeaderContainer;
