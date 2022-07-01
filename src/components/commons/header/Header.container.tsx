import { getUserId } from "../../../commons/func/hash";
import HeaderPresenter from "./Header.presenter";

interface IHeaderProps {
  path: string;
  route: string;
}
const HeaderContainer: React.FC<IHeaderProps> = ({ path, route }) => {
  const userId = getUserId();

  return <HeaderPresenter path={path} route={route} userId={userId} />;
};
export default HeaderContainer;
