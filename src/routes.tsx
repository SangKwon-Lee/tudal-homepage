import { Suspense, lazy } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(
  lazy(() => import("../src/components/home/Home.container"))
);

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
