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
  box-shadow: ${(props: IHeaderStyleProps) =>
    props.path ? "none" : "0px -2px 15px rgba(0, 0, 0, 0.25)"};
  z-index: 100;
  background-color: transparent;
  position: ${(props: IHeaderStyleProps) =>
    props.path ? "absolute" : "relative"};
`;

export const HeaderNavWrapper = styled.div`
  width: 100%;
  max-width: 592px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
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
  cursor: pointer;
  margin-bottom: 0px;
  padding-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
  margin-left: 16px;
  color: ${(props: IHeaderStyleProps) => (props.path ? "#4b4b4b" : "#7f7f7f")};
  border-bottom: ${(props: IHeaderStyleProps) =>
    props.path ? "2px solid #FF3838" : "none"};
`;

export const HeaderArrow = styled.img`
  margin-left: 25px;
  cursor: pointer;
`;

export const HeaderModalWrapper = styled.div`
  padding: 30px 20px;
  background-color: white;
  position: absolute;
  top: 100%;
  z-index: 9999;
  box-shadow: 0px 4px 20px 0px #00000040;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const HeaderBtn = styled.button`
  padding: 20px 30px;
  border-radius: 10px;
  width: 100%;
  color: #7f7f7f;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  :hover {
    background-color: #e9e9e9;
  }
`;

export const HeaderLogo = styled.img`
  width: 70px;
  margin-right: 10px;
`;
