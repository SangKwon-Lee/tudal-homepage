import {
  Header,
  HeaderNav,
  HeaderNavWrapper,
  HeaderMenu,
} from "./Header.style";
import TudalLogoPng from "../../../assets/images/tudal_logo.png";
import TudalLogoWebp from "../../../assets/images/tudal_logo.webp";
import { useNavigate } from "react-router";

interface IHeaderProps {
  path: string;
  userId: string | null;
}

const HeaderPresenter: React.FC<IHeaderProps> = ({ path, userId }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
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
            <HeaderMenu href={`https://us.tudal.co.kr`}>투달러스</HeaderMenu>
            <HeaderMenu href={`https://newsstock.tudal.co.kr`}>
              뉴스스탁
            </HeaderMenu>
          </HeaderNav>
          <HeaderNav>
            <HeaderMenu path={path === "gold"} href={`/gold`}>
              골드충전
            </HeaderMenu>
            {}
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
