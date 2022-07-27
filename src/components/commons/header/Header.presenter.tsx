import {
  Header,
  HeaderNav,
  HeaderNavWrapper,
  HeaderMenu,
  HeaderArrow,
  HeaderBtn,
  HeaderLogo,
  DropdownToggle,
  DropdownWrapper,
  DropdownMenu,
  HeaderMenuLine,
  HeaderMyIcon,
} from "./Header.style";
import TudalLogoPng from "../../../assets/images/tudal_logo.png";
import TudalUsLogo from "../../../assets/images/tudalus_logo02.svg";
import NewsLogo from "../../../assets/images/newsstock.svg";
import DownArrow from "../../../assets/images/downArrow.png";
import { useNavigate } from "react-router";
import { customNavigate } from "../../../commons/func/customNavigate";
import MySvg from "../../../assets/images/my.svg";

interface IHeaderProps {
  path: string;
  route: string;
  userId: string | null;
}

const HeaderPresenter: React.FC<IHeaderProps> = ({ path, route, userId }) => {
  const navigate = useNavigate();
  return (
    <Header path={path === "/"}>
      <HeaderNavWrapper path={path === "/"}>
        <HeaderNav>
          <HeaderLogo
            style={{ width: "100px" }}
            src={route === "tudalus" ? TudalUsLogo : TudalLogoPng}
            onClick={() => {
              if (route === "tudalus") {
                window.location.href = "https://us.tudal.co.kr";
              } else {
                navigate("/");
              }
            }}
          />
          <DropdownWrapper>
            <DropdownToggle>
              <HeaderArrow
                style={{ marginTop: route === "tudalus" ? "10px" : "0px" }}
                src={DownArrow}
              />
            </DropdownToggle>
            <DropdownMenu>
              {route === "tudalus" ? (
                <>
                  <HeaderBtn
                    onClick={() => {
                      window.open("https://newsstock.tudal.co.kr");
                    }}
                  >
                    <HeaderLogo src={NewsLogo} />
                    뉴스스탁
                  </HeaderBtn>
                  <HeaderBtn
                    onClick={() => {
                      window.open("https://tudal.co.kr");
                    }}
                  >
                    <HeaderLogo src={TudalLogoPng} />
                    투자의달인
                  </HeaderBtn>
                </>
              ) : (
                <>
                  <HeaderBtn
                    onClick={() => {
                      window.open("https://us.tudal.co.kr");
                    }}
                  >
                    <HeaderLogo src={TudalUsLogo} />
                    투달유에스
                  </HeaderBtn>
                  <HeaderBtn
                    onClick={() => {
                      window.open("https://newsstock.tudal.co.kr");
                    }}
                  >
                    <HeaderLogo src={NewsLogo} />
                    뉴스스탁
                  </HeaderBtn>
                </>
              )}
            </DropdownMenu>
          </DropdownWrapper>
        </HeaderNav>
        <HeaderNav>
          {userId ? (
            <>
              <HeaderMyIcon
                src={MySvg}
                onClick={() => navigate(customNavigate(route, "mypage"))}
              ></HeaderMyIcon>
            </>
          ) : (
            <>
              <HeaderMenu
                path={path === "signup" || path === "mypage"}
                onClick={() => {
                  navigate(customNavigate(route, "welcome"));
                }}
              >
                회원가입
              </HeaderMenu>
              <HeaderMenuLine />
              <HeaderMenu
                path={path === "login"}
                onClick={() => {
                  navigate(customNavigate(route, "login"));
                }}
              >
                로그인
              </HeaderMenu>
            </>
          )}
        </HeaderNav>
      </HeaderNavWrapper>
    </Header>
  );
};
export default HeaderPresenter;
