import HeaderPresenter from "./Header.presenter";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../../../App";
interface IHeaderProps {
  path: string;
}
const HeaderContainer: React.FC<IHeaderProps> = ({ path }) => {
  const navigate = useNavigate();
  const { setUserGold, setUserData, userData } = useContext(GlobalContext);
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
  };

  return (
    <HeaderPresenter
      path={path}
      userData={userData}
      handleLogout={handleLogout}
    />
  );
};
export default HeaderContainer;
