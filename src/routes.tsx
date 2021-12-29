import { Suspense, lazy } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );

const Header = Loadable(
  lazy(() => import("../src/components/commons/header/Header.container"))
);
const Footer = Loadable(
  lazy(() => import("../src/components/commons/footer/Footer.container"))
);

const Home = Loadable(
  lazy(() => import("../src/components/home/Home.container"))
);
const Login = Loadable(
  lazy(() => import("../src/components/login/Login.container"))
);
const GoldCharge = Loadable(
  lazy(() => import("./components/goldCharge/GoldCharge.container"))
);
const GoldHistory = Loadable(
  lazy(() => import("./components/goldHistory/GoldHistory.container"))
);

const PaySuccess = Loadable(
  lazy(() => import("./components/paySuccess/PaySuccess.container"))
);

const Service = Loadable(
  lazy(() => import("./components/terms/Service.container"))
);
const PrivacyPolicy = Loadable(
  lazy(() => import("./components/terms/PrivacyPolicy.container"))
);
const PrivacyData = Loadable(
  lazy(() => import("./components/terms/PrivacyData"))
);

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
];

export default routes;
