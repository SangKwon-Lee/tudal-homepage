import { Suspense, lazy } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );

//* 헤더 푸터
const Header = Loadable(
  lazy(() => import("../src/components/commons/header/Header.container"))
);
const Footer = Loadable(
  lazy(() => import("../src/components/commons/footer/Footer.container"))
);

//* 홈, 로그인, 마이페이지
const Home = Loadable(
  lazy(() => import("../src/components/home/Home.container"))
);
const Login = Loadable(
  lazy(() => import("../src/components/login/Login.container"))
);
const Mypage = Loadable(
  lazy(() => import("../src/components/mypage/Mypage.container"))
);
const MyInfo = Loadable(
  lazy(() => import("../src/components/myInfo/MyInfo.container"))
);

//* 골드 충전, 충전 내역, 결제 성공 페이지
const GoldCharge = Loadable(
  lazy(() => import("./components/goldCharge/GoldCharge.container"))
);
const PaySuccess = Loadable(
  lazy(() => import("./components/paySuccess/PaySuccess.container"))
);

const Landing2 = Loadable(lazy(() => import("./components/landing/Landing2")));
const Landing3 = Loadable(lazy(() => import("./components/landing/Landing3")));

const routes = [
  {
    path: "/",
    element: (
      <>
        <Header path="/" />
        <Home />
        <Footer />
      </>
    ),
  },

  {
    path: "/login",
    element: (
      <>
        <Header path="login" />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/gold",
    element: (
      <>
        <Header path="gold" />
        <GoldCharge path="charge" />
        <Footer />
      </>
    ),
  },
  {
    path: "/mypage",
    element: (
      <>
        <Header path="mypage" />
        <Mypage path="mypage" />
        <Footer />
      </>
    ),
  },
  {
    path: "/myInfo",
    element: (
      <>
        <Header path="mypage" />
        <MyInfo path="mypage" />
        <Footer />
      </>
    ),
  },
  {
    path: "/success",
    element: (
      <>
        <Header path="login" />
        <PaySuccess />
        <Footer />
      </>
    ),
  },
  {
    path: "/landing/2",
    element: (
      <>
        <Landing2 />
      </>
    ),
  },
  {
    path: "ubussttfbkd3g8oxmxyolyg91c24n4.html",
    element: (
      <>
        <Landing3 />
      </>
    ),
  },
];

export default routes;
