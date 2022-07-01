import styled from "@emotion/styled";
import { Dropdown } from "react-bootstrap";
interface IHeaderStyleProps {
  path?: boolean;
}

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
  padding-top: 10px;
  /* box-shadow: ${(props: IHeaderStyleProps) =>
    props.path ? "none" : "0px -2px 15px rgba(0, 0, 0, 0.25)"}; */
  z-index: 100;
  background-color: white;
  position: ${(props: IHeaderStyleProps) =>
    props.path ? "absolute" : "relative"};
`;

export const HeaderNavWrapper = styled.div`
  @media (max-width: 640px) {
    padding: 0px 22px;
  }
  padding: 0px 10px;
  width: 100%;
  max-width: ${(props: IHeaderStyleProps) => (props.path ? "1080px" : "592px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-weight: ${(props: IHeaderStyleProps) => (props.path ? "700" : "400")};
  font-size: 16px;
  color: ${(props: IHeaderStyleProps) => (props.path ? "#4b4b4b" : "#7f7f7f")};
  border-bottom: ${(props: IHeaderStyleProps) =>
    props.path ? "2px solid #FF3838" : "none"};
`;

export const HeaderMenuLine = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
  border-right: 2px solid #d9d9d9;
  width: 2px;
  height: 16px;
  margin: 0px 26px;
`;

export const HeaderArrow = styled.img`
  cursor: pointer;
  margin-top: 10px;
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
  padding: 20px 10px;
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
  width: 80px;
  cursor: pointer;
  margin-right: 20px;
`;

// * 드롭다운
export const DropdownMenu = styled(Dropdown.Menu)`
  width: 170px;
  border: none;
  box-shadow: 0px 4px 20px 0px #00000040;
  border-radius: 5px;
  outline: none;
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
  outline: none;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
`;

export const DropdownWrapper = styled(Dropdown)`
  background-color: white;
  padding: 0px !important;
  margin: 0px !important;
  width: 0px !important;
  border: none !important;
  outline: none !important;
  box-shadow: none;
  .dropdown-toggle::after {
    display: none !important;
    background-color: white !important;
    outline: none !important;
    padding: 0px !important;
    margin: 0px !important;
    border: none !important;
    outline: none !important;
  }
  .btn:focus {
    outline: none !important;
    box-shadow: none !important;
    padding: 0px !important;
    margin: 0px !important;
    border: none !important;
    outline: none !important;
  }
  .dropdown-toggle {
    background-color: white !important;
    border: none !important;
    outline: none !important;
    padding: 0px !important;
    margin: 0px !important;
    width: 20px !important;
  }
`;

export const HeaderMyIcon = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-top: 6.5px;
`;
