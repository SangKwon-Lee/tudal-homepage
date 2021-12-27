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
];

export default routes;
