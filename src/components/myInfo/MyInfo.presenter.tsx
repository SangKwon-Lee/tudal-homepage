import { getUser } from "../../commons/func/chargeGold";
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
        <Title onClick={() => getUser("01037682138")}>내정보</Title>
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
        <MyInfoLogout onClick={handleLogout}>로그아웃</MyInfoLogout>
      </Contents>
    </Body>
  );
};

export default MyInfoPresenter;
