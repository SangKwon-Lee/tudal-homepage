import { GlobalStyles } from "./commons/styles/globalStyles";
import { useRoutes } from "react-router";
import routes from "./routes";
import useScrollReset from "./components/commons/hooks/useScrollReset";
import { createContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import favicon from "./assets/images/SVG/tudal.svg";
import ogImg from "./assets/images/ogimg.png";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const userDataInit = {
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
};

const userGoldInit = {
  bonusGold: 0,
  created_at: "",
  gold: 0,
  id: 0,
  updated_at: "",
  userId: 0,
};

//* 전역 상태 값
export const GlobalContext = createContext({
  userData: userDataInit,
  setUserData: (__: typeof userDataInit) => {},
  userGold: userGoldInit,
  setUserGold: (__: typeof userGoldInit) => {},
});

function App() {
  //* 라우드 설정
  const content = useRoutes(routes);

  //* 전역상태 관리
  const [userData, setUserData] = useState(userDataInit);
  const [userGold, setUserGold] = useState(userGoldInit);
  const value = {
    userGold,
    setUserGold,
    userData,
    setUserData,
  };

  //* 스크롤 초기화
  useScrollReset();

  return (
    <>
      <GlobalContext.Provider value={value}>
        <HelmetProvider>
          <Helmet title="투자의 달인">
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta name="subject" content="정말 쉬운 주식투자 투자의 달인" />
            <meta name="author" content="투달-투자의 달인" />
            <meta
              name="keywords"
              content="주식앱, 주식앱추천, 증권앱, 주식어플리케이션, 모바일어플리케이션, 종목상담, 종목상담앱, 주식투자어플리케이션, 모바일앱, 인공지능, 로보어드바이저, 주식분석, 주식종목추천, 주식로봇, 주식인공지능, 가치투자, 모멘텀분석, 모멘텀발굴, 주식알고리즘, 수익률, 주식수익률, 인공지능수익률, 로보어드바이저수익률, AI1008, AI2001"
            />
            <meta
              name="description"
              content="투자는 어렵지만 투달은 쉽습니다. 정말 쉬운 주식투자 투자의 달인"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="투달-투자의 달인" />
            <meta
              property="og:description"
              content="투자는 어렵지만 투달은 쉽습니다. 정말 쉬운 주식투자 투자의 달인"
            />
            <meta property="og:site_name" content="투달-투자의 달인" />
            <meta property="og:image" content={ogImg} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:url" content="https://app.tudal.co.kr" />
            <meta name="content-language" content="kr" />
            <link rel="apple-touch-icon" href="../src/assets/ogimg.png" />
            <link rel="icon" href={favicon} />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-10869743597"
            ></script>
          </Helmet>
        </HelmetProvider>
        <GlobalStyles />
        {content}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
