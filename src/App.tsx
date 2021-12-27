import "./App.css";
import { GlobalStyles } from "./commons/styles/globalStyles";
import { useRoutes } from "react-router";
import routes from "./routes";
import useScrollReset from "./components/commons/hooks/useScrollReset";
import { createContext, useState } from "react";
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
        <GlobalStyles />
        {content}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
