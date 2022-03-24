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

//* 홈, 로그인
const Home = Loadable(
  lazy(() => import("../src/components/home/Home.container"))
);
const Login = Loadable(
  lazy(() => import("../src/components/login/Login.container"))
);

//* 골드 충전, 충전 내역, 결제 성공 페이지
const GoldCharge = Loadable(
  lazy(() => import("./components/goldCharge/GoldCharge.container"))
);
const GoldHistory = Loadable(
  lazy(() => import("./components/goldHistory/GoldHistory.container"))
);
const PaySuccess = Loadable(
  lazy(() => import("./components/paySuccess/PaySuccess.container"))
);

//* 서비스 이용약관, 개인정보처리방침, 개인정보보호
const Service = Loadable(
  lazy(() => import("./components/terms/Service.container"))
);
const PrivacyPolicy = Loadable(
  lazy(() => import("./components/terms/PrivacyPolicy.container"))
);
const PrivacyData = Loadable(
  lazy(() => import("./components/terms/PrivacyData"))
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
      </>
    ),
  },
  {
    path: "/goldCharge",
    element: (
      <>
        <Header path="login" />
        <GoldCharge path="charge" />
      </>
    ),
  },
  {
    path: "/history",
    element: (
      <>
        <Header path="login" />
        <GoldHistory path="history" />
      </>
    ),
  },
  {
    path: "/success",
    element: (
      <>
        <Header path="login" />
        <PaySuccess />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Service />
      </>
    ),
  },
  {
    path: "/privacypolicy",
    element: (
      <>
        <PrivacyPolicy />
      </>
    ),
  },
  {
    path: "/privacydata",
    element: (
      <>
        <PrivacyData />
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
    path: "/landing/3",
    element: (
      <>
        <Landing3 />
      </>
    ),
  },
];

export default routes;
