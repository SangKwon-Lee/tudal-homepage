import { deleteCookie, setCookie } from "../../commons/func/cookie";
import { UserData } from "../../commons/types/types";
import { Body, Contents, Title } from "../commons/ui/commonStyle";
import {
  MyInfoLogout,
  MyInfoText,
  MyInfoTitle,
  MyInfoTitleWrapper,
  MyInfoWrapper,
} from "./Mypage.style";

interface IMyInfoProps {
  userData: UserData;
  handleLogout: () => void;
}

const MyInfoPresenter: React.FC<IMyInfoProps> = ({
  userData,
  handleLogout,
}) => {
  return (
    <Body>
      <Contents>
        <Title>내정보</Title>
        <MyInfoWrapper>
          <MyInfoTitleWrapper>
            <MyInfoTitle>이름</MyInfoTitle>
            <MyInfoText>{userData.name}</MyInfoText>
          </MyInfoTitleWrapper>
          <MyInfoTitleWrapper>
            <MyInfoTitle>생년월일</MyInfoTitle>
            <MyInfoText>{userData.birthday}</MyInfoText>
          </MyInfoTitleWrapper>
          <MyInfoTitleWrapper>
            <MyInfoTitle>핸드폰번호</MyInfoTitle>
            <MyInfoText>{userData.phoneNumber}</MyInfoText>
          </MyInfoTitleWrapper>
        </MyInfoWrapper>
        <MyInfoLogout
          onClick={() => {
            handleLogout();
            setCookie("tudalUser", "", 0);
            deleteCookie("tudalUser");
            //@ts-ignore
            var receiver = document.getElementById("receiver").contentWindow;
            receiver.postMessage("logout", "https://us.tudal.co.kr");
            // if (path === "tudalus") {
            //   window.location.href = "https://us.tudal.co.kr";
            // } else {
            //   navigate("/");
            // }
          }}
        >
          로그아웃
        </MyInfoLogout>
      </Contents>
    </Body>
  );
};

export default MyInfoPresenter;
