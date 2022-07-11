import {
  Body,
  Contents,
  ContentsHover,
  Title,
} from "../commons/ui/commonStyle";
import { priceToString } from "../goldCharge/GoldCharge.presenter";
import {
  GoldMyMoneyWrapper,
  GoldMoneyImg,
  GoldMyGold,
  GoldDetailWrapper,
  GoldDetail,
} from "../goldCharge/GoldCharge.style";
import { UserData, UserGold } from "../../commons/types/types";
import {
  TitleWrapper,
  UserName,
  UserNameIcon,
  UserNameWrapper,
} from "./Mypage.style";
import { useNavigate } from "react-router";
import rightArrowPNG from "../../assets/images/rightArrow2.png";
import subsPNG from "../../assets/images/subs.png";
import goldPNG from "../../assets/images/gold.png";
import chargePNG from "../../assets/images/charge.png";
import { customNavigate } from "../../commons/func/customNavigate";

interface IMypageProps {
  path: string;
  userData: UserData;
  userGold: UserGold;
}

const MypagePresenter: React.FC<IMypageProps> = ({
  path,
  userData,
  userGold,
}) => {
  const navigate = useNavigate();
  return (
    <Body>
      <UserNameWrapper>
        <UserName
          id="myInfo"
          onClick={() => {
            navigate(customNavigate(path, "myinfo"));
          }}
        >
          {userData.name}님
        </UserName>
        <UserNameIcon
          id="myInfo"
          onClick={() => {
            navigate(customNavigate(path, "myinfo"));
          }}
          src={rightArrowPNG}
        />
      </UserNameWrapper>
      <Contents>
        <GoldMyMoneyWrapper>
          <Title>총 보유 골드</Title>
          <GoldMyGold>
            {userGold?.gold || userGold?.bonusGold
              ? priceToString(userGold?.gold + userGold.bonusGold)
              : 0}
            골드
          </GoldMyGold>
        </GoldMyMoneyWrapper>
        <GoldMyMoneyWrapper>
          <GoldDetailWrapper style={{ borderRight: "1px solid #e9e9e9" }}>
            충전한 골드
            <GoldDetail>
              {userGold?.gold ? priceToString(userGold?.gold) : 0}
              골드
            </GoldDetail>
          </GoldDetailWrapper>
          <GoldDetailWrapper>
            보너스 골드
            <GoldDetail>
              {userGold?.bonusGold ? priceToString(userGold.bonusGold) : 0}
              골드
            </GoldDetail>
          </GoldDetailWrapper>
        </GoldMyMoneyWrapper>
      </Contents>
      <ContentsHover
        onClick={() => {
          navigate(customNavigate(path, "gold"));
        }}
      >
        <TitleWrapper>
          <Title id="history" style={{ cursor: "pointer" }}>
            <GoldMoneyImg src={chargePNG} alt="" />
            골드 충전
          </Title>
          <UserNameIcon id="myInfo" src={rightArrowPNG} />
        </TitleWrapper>
      </ContentsHover>
      <ContentsHover
        onClick={() => {
          navigate(customNavigate(path, "history"));
        }}
      >
        <TitleWrapper>
          <Title id="history" style={{ cursor: "pointer" }}>
            <GoldMoneyImg src={goldPNG} alt="" />
            골드 사용 내역
          </Title>
          <UserNameIcon id="myInfo" src={rightArrowPNG} />
        </TitleWrapper>
      </ContentsHover>
      <ContentsHover
        onClick={() => {
          navigate(customNavigate(path, "subscription"));
        }}
      >
        <TitleWrapper>
          <Title id="history" style={{ cursor: "pointer" }}>
            <GoldMoneyImg src={subsPNG} alt="" />
            통합 구독 내역
          </Title>
          <UserNameIcon id="myInfo" src={rightArrowPNG} />
        </TitleWrapper>
      </ContentsHover>
    </Body>
  );
};
export default MypagePresenter;
