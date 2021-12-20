import React from "react";
import "./App.css";
import { GlobalStyles } from "./commons/styles/globalStyles";
import { useRoutes } from "react-router";
import routes from "./routes";
import useScrollReset from "./components/commons/hooks/useScrollReset";
import FooterContainer from "./components/commons/footer/Footer.container";

function App() {
  //* 라우드 설정
  const content = useRoutes(routes);

  //* 스크롤 초기화
  useScrollReset();

  return (
    <>
      <GlobalStyles />
      {content}
      <FooterContainer />
    </>
  );
}

export default App;
