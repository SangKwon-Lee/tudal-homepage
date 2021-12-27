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

interface IHeaderProps {
  path: string;
  handleLogout: () => void;
  userData: {
    birthday: string;
    ci: string;
    createdAt: string;
    di: string;
    name: string;
    isDeleted: string;
    gender: string;
    nickname: string;
    phoneNumber: string;
    role: string;
    telecomCode: string;
    updatedAt: string;
    userId: number;
  };
}

const HeaderPresenter: React.FC<IHeaderProps> = ({
  path,
  handleLogout,
  userData,
}) => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper path={path}>
      <HeaderBody>
        <HeaderLogo src={tudalLogo} />
        <HeaderLoginWrapper>
          <HeaderLogin
            onClick={() => {
              if (!userData.userId) {
                navigate("/login");
              } else {
                handleLogout();
              }
            }}
          >
            {!userData.userId ? "로그인" : "로그아웃"}
          </HeaderLogin>
          <HeaderCharge
            onClick={() => {
              if (!userData.userId) {
                alert("로그인 후 이용 가능합니다.");
                navigate("/login");
              } else {
                navigate("/goldCharge");
              }
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
