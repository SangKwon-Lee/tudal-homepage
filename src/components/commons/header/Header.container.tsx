import HeaderPresenter from "./Header.presenter";

interface IHeaderProps {
  path: string;
}
const HeaderContainer: React.FC<IHeaderProps> = ({ path }) => {
  const userId = sessionStorage.getItem("userId");

  return <HeaderPresenter path={path} userId={userId} />;
};
export default HeaderContainer;
