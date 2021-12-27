import styled from "@emotion/styled";

interface IHeaderStyleProps {
  path: string;
}

export const HeaderWrapper = styled.div`
  position: ${(props: IHeaderStyleProps) =>
    props.path === "login" ? "none" : "absolute"};
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  padding-bottom: 18px;
  border-bottom: ${(props: IHeaderStyleProps) =>
    props.path === "login" ? "0.5px solid #FF3838" : "none"};
`;

export const HeaderBody = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  margin: 0px 20px;
`;

export const HeaderLogo = styled.img`
  width: 100px;
`;

export const HeaderLoginWrapper = styled.div`
  display: flex;
`;

export const HeaderLogin = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-right: 64px;
  cursor: pointer;
`;

export const HeaderCharge = styled.div`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
