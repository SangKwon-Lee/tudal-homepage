import WelcomePresenter from "../welcome/Welcome.presenter";

interface WelcomeContainerProps {
  path: string;
}
const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ path }) => {
  return <WelcomePresenter path={path} />;
};
export default WelcomeContainer;
