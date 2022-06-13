import { useState } from "react";
import HeaderPresenter from "./Header.presenter";

interface IHeaderProps {
  path: string;
}
const HeaderContainer: React.FC<IHeaderProps> = ({ path }) => {
  const userId = sessionStorage.getItem("userId");

  const [isArrow, setIsArrow] = useState(false);

  const handleIsArrow = () => {
    setIsArrow(() => !isArrow);
  };

  return (
    <HeaderPresenter
      path={path}
      userId={userId}
      isArrow={isArrow}
      handleIsArrow={handleIsArrow}
    />
  );
};
export default HeaderContainer;
