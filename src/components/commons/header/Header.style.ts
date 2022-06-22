import styled from "@emotion/styled";

interface IHeaderStyleProps {
  path?: boolean;
}

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 70px;
  box-shadow: ${(props: IHeaderStyleProps) =>
    props.path ? "none" : "0px -2px 15px rgba(0, 0, 0, 0.25)"};
  z-index: 100;

  background-color: white;
  position: ${(props: IHeaderStyleProps) =>
    props.path ? "absolute" : "relative"};
`;

export const HeaderNavWrapper = styled.div`
  padding: 0px 10px;
  width: 100%;
  max-width: ${(props: IHeaderStyleProps) => (props.path ? "1080px" : "592px")};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderMenu = styled.a`
  @media (max-width: 640px) {
    font-size: 14px;
    margin-left: 25px;
  }
  cursor: pointer;
  margin-bottom: 0px;
  padding-bottom: 5px;
  font-weight: 700;
  font-size: 16px;
  margin-left: 48px;
  color: ${(props: IHeaderStyleProps) => (props.path ? "#4b4b4b" : "#7f7f7f")};
  border-bottom: ${(props: IHeaderStyleProps) =>
    props.path ? "2px solid #FF3838" : "none"};
`;

export const HeaderArrow = styled.img`
  margin-left: 25px;
  cursor: pointer;
`;

export const HeaderModalWrapper = styled.div`
  @media (max-width: 640px) {
    width: 100%;
    left: 0px;
  }
  background-color: white;
  position: absolute;
  top: 70px;
  outline: none;
  box-shadow: none;
  z-index: 9999;
  box-shadow: 0px 4px 20px 0px #00000040;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const HeaderBtn = styled.button`
  padding: 20px 15px;
  border-radius: 5px;
  width: 100%;
  color: #7f7f7f;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  align-items: flex-end;
  :hover {
    background-color: #e9e9e9;
  }
`;

export const HeaderLogo = styled.img`
  width: 70px;
  margin-right: 10px;
`;
