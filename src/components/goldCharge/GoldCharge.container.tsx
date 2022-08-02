import { GlobalContext } from "../../App";
import WithAuth from "../commons/hocs/withAuth";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import { useContext, useState } from "react";
import GoldChargePresenter from "./GoldCharge.presenter";
import { Helmet } from "react-helmet";

const GoldChargeContainer = ({ path }: any) => {
  const { userData, userGold } = useContext(GlobalContext);
  const userId = getUserId();
  //* 회원 정보 불러오기;
  useGetUser();

  //* 골드
  const [gold, setgold] = useState("100");

  //* 보너스 골드
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bonusGold, setBonusGold] = useState(Number(gold) / 10);

  //* 충전 정보
  const [money, setMoney] = useState(11000);
  const [isCheck, setIsCheck] = useState(false);

  // * 결제 정보 Open
  const [isCharge, setIsCharge] = useState(false);

  //*이노페이 결제 결과 (결제 함수 2번 째)
  const InnoPayResult = (data: any) => {
    if (data.data.message === "close") {
      if (path === "tudalus") {
        window.location.href = "https://us.tudal.co.kr";
      } else {
        window.location.href = "https://tudal.co.kr/mypage";
      }
      return;
    } else if (data.data !== "close") {
      // var result = JSON.parse(data.data);
      //* 아래 데이터는 필요할 경우 사용하세요
      // var mid = data.data.MID; // 가맹점 MID
      // var tid = data.data.TID; // 거래고유번호
      // var amt = data.data.Amt; // 금액
      // var moid = data.data.MOID; // 주문번호
      // var authdate = data.data.AuthDate; // 승인일자
      // var authcode = data.data.AuthCode; // 승인번호
      // var resultcode = data.data.ResultCode; // 결과코드(PG)
      // var resultmsg = data.data.ResultMsg; // 결과메세지(PG)
      // var errorcode = data.data.ErrorCode; // 에러코드(상위기관)
      // var errormsg = data.data.ErrorMsg; // 에러메세지(상위기관)
      // var EPayCl = data.data.EPayCl;
      // if (result.ResultCode === "3001") {
      //   postPayment(result);
      // } else {
      //   alert("결제 오류가 발생했습니다.");
      //   window.removeEventListener("message", InnoPayResult);
      // }
    }
  };

  //* 이노페이 결제 (결제 함수 1번 째)
  const handleInnoPay = async () => {
    //@ts-ignore
    innopay.goPay({
      // 필수 파라미터
      PayMethod: "CSMS", // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
      MID: "pgsbcn111m", // 가맹점 MID
      MerchantKey:
        "GzV1sy9fFQp1FTc+MHWmi9Wpr/8mcgKEeSEn4Zg6pHhUZEnFY0EEgrupAPuOseGP4Dcg2nYM8Yj7SDzK4HOlTg==", // 가맹점 라이센스키
      GoodsName: "투달골드", // 상품명
      Amt: String(money), // 결제금액(과세)
      BuyerName: userData.name, // 고객명
      BuyerTel: userData.phoneNumber, // 고객전화번호
      BuyerEmail: "@naver.com", // 고객이메일
      ResultYN: "N", // 결제결과창 출력유뮤
      Moid: `TudalGold${userId}`, // 가맹점에서 생성한 주문번호 셋팅
      Currency: "", // 통화코드가 원화가 아닌 경우만 사용(KRW/USD)
    });
    //* 결제 결과가 아래로 전달 (InnoPayResult 함수 실행)
    window.addEventListener("message", InnoPayResult);
  };

  // * 결제 선택
  const handleIsCharge = () => {
    setIsCharge(() => !isCharge);
  };

  //* 골드 선택 및 충전 금액
  const handleGold = (e: any) => {
    setgold(e);
    setMoney(Number(e) * 100 + Number(e) * 10);
    setBonusGold(e / 10);
  };

  const handleIsCheck = () => {
    setIsCheck(() => !isCheck);
  };

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://pg.innopay.co.kr/ipay/js/jquery-2.1.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://pg.innopay.co.kr/ipay/js/innopay-2.0_euc-kr.js"
          charSet="utf-8"
        ></script>
      </Helmet>
      <GoldChargePresenter
        gold={gold}
        money={money}
        isCheck={isCheck}
        userGold={userGold}
        isCharge={isCharge}
        handleGold={handleGold}
        handleIsCheck={handleIsCheck}
        handleInnoPay={handleInnoPay}
        handleIsCharge={handleIsCharge}
      />
    </>
  );
};
export default WithAuth(GoldChargeContainer);
