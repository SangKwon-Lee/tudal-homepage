import styled from "@emotion/styled";

interface IHeaderStyleProps {
  path?: boolean;
}

export const Header = styled.header`
  @media (max-width: 640px) {
    padding: 0px 10px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  height: 70px;
  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.25);
  z-index: 999;
`;

export const HeaderNavWrapper = styled.div`
  width: 100%;
  max-width: 592px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenu = styled.a`
  @media (max-width: 640px) {
    font-size: 15px;
  }
  margin-top: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  margin-left: 16px;
  color: ${(props: IHeaderStyleProps) => (props.path ? "#4b4b4b" : "#7f7f7f")};
  border-bottom: ${(props: IHeaderStyleProps) =>
    props.path ? "2px solid #FF3838" : "none"};
`;
