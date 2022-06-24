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
} from "./Header.style";
import TudalLogoPng from "../../../assets/images/tudal_logo.png";
import TudalUsLogo from "../../../assets/images/tudalus_logo02.svg";
import NewsLogo from "../../../assets/images/newsstock.svg";
import DownArrow from "../../../assets/images/downArrow.png";
import { useNavigate } from "react-router";

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
          />
          <DropdownWrapper>
            <DropdownToggle>
              <HeaderArrow src={DownArrow} />
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
                    <HeaderLogo style={{ width: "70px" }} src={TudalLogoPng} />
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
                    투달러스
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
              <HeaderMenu
                path={path === "login" || path === "mypage"}
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                MY
              </HeaderMenu>
            </>
          ) : (
            <>
              <HeaderMenu path={path === "login"} href={`/login`}>
                로그인
              </HeaderMenu>
              <HeaderMenu
                path={path === "signup" || path === "mypage"}
                onClick={() => {
                  navigate("/welcome");
                }}
              >
                회원가입
              </HeaderMenu>
            </>
          )}
        </HeaderNav>
      </HeaderNavWrapper>
    </Header>
  );
};
export default HeaderPresenter;
