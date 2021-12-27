import {
  HeaderBody,
  HeaderCharge,
  HeaderLogin,
  HeaderLoginWrapper,
  HeaderLogo,
  HeaderWrapper,
} from "./Header.style";
import tudalLogo from "../../../assets/imges/SVG/tudalLogo.svg";
import { useNavigate } from "react-router";
import { UserData } from "../../../commons/types/types";

interface IHeaderProps {
  path: string;
  handleLogout: () => void;
  userData: UserData;
}

const HeaderPresenter: React.FC<IHeaderProps> = ({
  path,
  handleLogout,
  userData,
}) => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  return (
    <HeaderWrapper path={path}>
      <HeaderBody>
        <HeaderLogo
          src={tudalLogo}
          onClick={() => {
            navigate("/");
          }}
        />
        <HeaderLoginWrapper>
          <HeaderLogin
            onClick={() => {
              if (!userId) {
                navigate("/login");
              } else {
                handleLogout();
              }
            }}
          >
            {!userId ? "로그인" : "로그아웃"}
          </HeaderLogin>
          <HeaderCharge
            onClick={() => {
              navigate("/goldCharge");
            }}
          >
            골드충전
          </HeaderCharge>
        </HeaderLoginWrapper>
      </HeaderBody>
    </HeaderWrapper>
  );
};
export default HeaderPresenter;
