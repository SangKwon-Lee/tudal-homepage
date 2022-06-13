import {
  Header,
  HeaderNav,
  HeaderNavWrapper,
  HeaderMenu,
  HeaderArrow,
  HeaderModalWrapper,
  HeaderBtn,
  HeaderLogo,
} from "./Header.style";
import TudalLogoPng from "../../../assets/images/tudal_logo.png";
import TudalUsLogo from "../../../assets/images/tudalus_logo02.svg";
import NewsLogo from "../../../assets/images/newsstock.svg";
import TudalLogoWebp from "../../../assets/images/tudal_logo.webp";
import DownArrow from "../../../assets/images/downArrow.png";
import UpArrow from "../../../assets/images/upArrow.png";
import { useNavigate } from "react-router";

interface IHeaderProps {
  path: string;
  userId: string | null;
  isArrow: boolean;
  handleIsArrow: () => void;
}

const HeaderPresenter: React.FC<IHeaderProps> = ({
  path,
  userId,
  isArrow,
  handleIsArrow,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Header path={path === "/"}>
        <HeaderNavWrapper>
          <HeaderNav>
            <picture>
              <source
                srcSet={TudalLogoWebp}
                onClick={() => {
                  navigate("/");
                }}
                type="image/webp"
                width="90"
              ></source>
              <source
                srcSet={TudalLogoWebp}
                type="image/webp"
                width="115"
                media="(max-width:640px)"
                onClick={() => {
                  navigate("/");
                }}
              ></source>
              <img
                src={TudalLogoPng}
                alt="로고"
                width="115"
                onClick={() => {
                  navigate("/");
                }}
              ></img>
            </picture>

            <HeaderArrow
              src={!isArrow ? DownArrow : UpArrow}
              onClick={handleIsArrow}
            />
            {isArrow && (
              <HeaderModalWrapper>
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
              </HeaderModalWrapper>
            )}
          </HeaderNav>
          <HeaderNav>
            <HeaderMenu path={path === "gold"} href={`/gold`}>
              골드충전
            </HeaderMenu>
            <HeaderMenu
              path={path === "login" || path === "mypage"}
              onClick={() => {
                if (!userId) {
                  navigate("/login");
                } else {
                  navigate("/mypage");
                }
              }}
            >
              {!userId ? "로그인" : "마이페이지"}
            </HeaderMenu>
          </HeaderNav>
        </HeaderNavWrapper>
      </Header>
    </>
  );
};
export default HeaderPresenter;
