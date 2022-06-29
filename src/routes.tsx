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

//* 홈, 로그인, 마이페이지 회원가입
const Home = Loadable(
  lazy(() => import("../src/components/home/Home.container"))
);
const Login = Loadable(
  lazy(() => import("../src/components/login/Login.container"))
);
const Welcome = Loadable(
  lazy(() => import("../src/components/welcome/Welcome.container"))
);
const Signup = Loadable(
  lazy(() => import("../src/components/signup/Signup.container"))
);
const Mypage = Loadable(
  lazy(() => import("../src/components/mypage/Mypage.container"))
);
const MyInfo = Loadable(
  lazy(() => import("../src/components/myInfo/MyInfo.container"))
);
const GoldHistory = Loadable(
  lazy(() => import("../src/components/goldHistory/GoldHistory.container"))
);
const SubscriptionHistory = Loadable(
  lazy(
    () =>
      import(
        "../src/components/subscriptionHistory/subscriptionHistory.container"
      )
  )
);

//* 골드 충전, 구독결제,  충전 내역, 결제 성공 페이지
const GoldCharge = Loadable(
  lazy(() => import("./components/goldCharge/GoldCharge.container"))
);
const Payment = Loadable(
  lazy(() => import("./components/payment/Payment.container"))
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
        <Login path="tudal" />
        <Footer />
      </>
    ),
  },

  {
    path: "/signup",
    element: (
      <>
        <Header path="signup" />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/welcome",
    element: (
      <>
        <Header path="signup" />
        <Welcome />
        <Footer />
      </>
    ),
  },
  {
    path: "/gold",
    element: (
      <>
        <Header path="mypage" />
        <GoldCharge path="mypage" />
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
    path: "/history",
    element: (
      <>
        <Header path="mypage" />
        <GoldHistory path="mypage" />
        <Footer />
      </>
    ),
  },
  {
    path: "/subscription",
    element: (
      <>
        <Header path="mypage" />
        <SubscriptionHistory path="mypage" />
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
  //* 투달러스 페이지
  {
    path: "/tudalus/login",
    element: (
      <>
        <Header path="login" route="tudalus" />
        <Login path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/signup",
    element: (
      <>
        <Header path="signup" route="tudalus" />
        <Signup path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/payment",
    element: (
      <>
        <Header path="mypage" route="tudalus" />
        <Payment path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/welcome",
    element: (
      <>
        <Header path="signup" route="tudalus" />
        <Welcome path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/mypage",
    element: (
      <>
        <Header path="mypage" route="tudalus" />
        <Mypage path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/gold",
    element: (
      <>
        <Header path="mypage" route="tudalus" />
        <GoldCharge path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/history",
    element: (
      <>
        <Header path="mypage" route="tudalus" />
        <GoldHistory path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/subscription",
    element: (
      <>
        <Header path="mypage" route="tudalus" />
        <SubscriptionHistory path="tudalus" />
        <Footer />
      </>
    ),
  },
  {
    path: "/tudalus/myInfo",
    element: (
      <>
        <Header path="mypage" route="tudalus" />
        <MyInfo path="tudalus" />
        <Footer />
      </>
    ),
  },
];

export default routes;
