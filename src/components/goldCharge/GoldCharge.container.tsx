import dayjs from "dayjs";
import moment from "moment";
import { GlobalContext } from "../../App";
import { useNavigate } from "react-router";
import WithAuth from "../commons/hocs/withAuth";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import { apiServer } from "../../commons/axios/axios";
import { useContext, useEffect, useState } from "react";
import GoldChargePresenter from "./GoldCharge.presenter";
import { Helmet } from "react-helmet";

const REACT_APP_INNOPAY_MID = process.env.REACT_APP_INNOPAY_MID;
const REACT_APP_INNOPAY_MERCHANTKEY = process.env.REACT_APP_INNOPAY_MERCHANTKEY;

const GoldChargeContainer = () => {
  const { userData, userGold } = useContext(GlobalContext);
  const navigate = useNavigate();
  const userId = getUserId();

  //* 회원 정보 불러오기;
  useGetUser();

  //* 골드
  const [gold, setgold] = useState("100");

  //* 보너스 골드
  const [bonusGold, setBonusGold] = useState(Number(gold) / 10);

  //* 충전 정보
  const [inputCharge, setInputCharge] = useState({
    check: false,
    money: 11000,
    method: "CARD",
    number: "",
    isReceipt: false,
    name: "",
  });

  // * 결제 정보 Open
  const [isCharge, setIsCharge] = useState(false);

  //* 현금 영수증 종류
  const [reciptsCategory, setReciptesCategory] = useState("미발급");

  //* 유저 골드 정보 불러오기 useEffect
  useEffect(() => {
    if (userData) {
      setInputCharge({
        ...inputCharge,
        number: userData.phoneNumber,
        name: userData.name,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  //*이노페이 결제 결과 (결제 함수 2번 째)
  const InnoPayResult = (data: any) => {
    if (data.data === "close") {
      window.removeEventListener("message", InnoPayResult);
      return;
    } else if (data.data !== "close") {
      var result = JSON.parse(data.data);
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
      if (result.ResultCode === "3001") {
        postPayment(result);
      } else {
        alert("결제 오류가 발생했습니다.");
        window.removeEventListener("message", InnoPayResult);
      }
    }
  };

  //* 이노페이 결제 (결제 함수 1번 째)
  const handleInnoPay = async () => {
    if (inputCharge.money === 0) {
      alert("골드를 선택해주세요");
      return;
    }
    const code = `${moment().format("YYYYMMDDHHmmss")}`;
    //@ts-ignore
    innopay.goPay({
      // 필수 파라미터
      PayMethod: inputCharge.method, // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
      MID: REACT_APP_INNOPAY_MID, // 가맹점 MID
      MerchantKey: REACT_APP_INNOPAY_MERCHANTKEY, // 가맹점 라이센스키
      GoodsName: "투달 골드", // 상품명
      Amt: String(inputCharge.money), // 결제금액(과세)
      BuyerName: userData.name, // 고객명
      BuyerTel: userData.phoneNumber, // 고객전화번호
      BuyerEmail: "@naver.com", // 고객이메일
      ResultYN: "Y", // 결제결과창 출력유뮤
      Moid: `tudalGold${code}`, // 가맹점에서 생성한 주문번호 셋팅
      Currency: "", // 통화코드가 원화가 아닌 경우만 사용(KRW/USD)
    });
    //* 결제 결과가 아래로 전달 (InnoPayResult 함수 실행)
    window.addEventListener("message", InnoPayResult);
  };

  //* 이노페이 결제 성공시 골드 충전 함수 (결제 함수 3번 째)
  const postPayment = async (result: any) => {
    try {
      const code = `${moment().format("YYYYMMDDHHmmss")}`;
      const { status } = await apiServer.post(`/golds/${userId}/add`, {
        amount: gold, // 충전 골드
        bonusAmount: bonusGold, // 충전 보너스 골드
        category: "골드충전", // '골드충전'
        code,
        type: "add",
        isExpired: false,
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
        payment: result.TID,
      });
      if (status === 200) {
        alert("골드가 충전됐습니다.");
        navigate("/success");
      }
    } catch (e) {
      alert("골드 충전에 오류가 발생했습니다. 관리자에게 문의해주세요.");
    }
  };

  //* 다음 스텝 및 결제 정보 저장
  const handleSavePaymentInfo = async () => {
    const code = `${dayjs().format("YYYYMMDDHHmmss")}`;
    const expirationDate = `${dayjs()
      .add(3, "day")
      .set("hour", 0)
      .set("minute", 0)
      .set("second", 0)
      .format("YYYYMMDDHHmmss")}`;
    try {
      await apiServer.post(`/golds/web/depositInfo`, {
        userId,
        userName:
          userData?.name +
          userData?.phoneNumber.slice(
            userData?.phoneNumber.length - 4,
            userData?.phoneNumber.length
          ),
        category: "골드충전",
        chargeCode: code,
        gold,
        bonusGold,
        receiptType: reciptsCategory,
        receiptNumber: inputCharge.number,
        depositAmount: inputCharge.money,
        isExpired: 0,
        expirationDate,
        isCharged: 0,
      });
    } catch (e) {
      alert("에러가 발생했습니다. 처음부터 다시 시도해주세요.");
    }
  };

  // * 결제 선택
  const handleIsCharge = () => {
    setIsCharge(() => !isCharge);
  };

  //* 현금영수증 종류
  const handleRecipts = (e: any) => {
    setReciptesCategory(e.target.value);
    setInputCharge({
      ...inputCharge,
      number: "",
    });
  };

  //* 골드 선택 및 충전 금액
  const handleGold = (e: any) => {
    setgold(e);
    setInputCharge({
      ...inputCharge,
      money: Number(e) * 100 + Number(e) * 10,
    });
    setBonusGold(e / 10);
  };

  //*input 관리
  const handleInputCharge = (e: any) => {
    if (e === "발급" || e === "미발급") {
      setInputCharge({
        ...inputCharge,
        isReceipt: e === "발급" ? true : false,
      });
      return;
    }
    if (e.target.id === "check") {
      setInputCharge({
        ...inputCharge,
        check: !inputCharge.check,
      });
      return;
    }
    setInputCharge({
      ...inputCharge,
      [e.target.name]: e.target.value,
    });
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
          src="https://pg.innopay.co.kr/ipay/js/innopay-2.0.js"
          charSet="utf-8"
        ></script>
      </Helmet>
      <GoldChargePresenter
        gold={gold}
        userGold={userGold}
        isCharge={isCharge}
        handleGold={handleGold}
        inputCharge={inputCharge}
        handleRecipts={handleRecipts}
        handleInnoPay={handleInnoPay}
        handleIsCharge={handleIsCharge}
        handleInputCharge={handleInputCharge}
        handleSavePaymentInfo={handleSavePaymentInfo}
      />
    </>
  );
};
export default WithAuth(GoldChargeContainer);
