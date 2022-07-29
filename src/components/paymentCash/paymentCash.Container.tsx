import dayjs from "dayjs";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { GlobalContext } from "../../App";
import { apiServer, cmsServer, CMS_TOKEN } from "../../commons/axios/axios";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import PaymentCashPresenter from "./paymentCash.Presenter";

interface PaymentCahshProps {
  path: string;
}

const PaymentCashContainer: React.FC<PaymentCahshProps> = ({ path }) => {
  const userId = getUserId();

  //* 회원 정보 불러오기;
  useGetUser();

  //* 회원 정보
  const { userGold, userData } = useContext(GlobalContext);

  //* 상품 정보
  const [product, setProduct] = useState({
    period: 0,
    gold: 0,
    name: "",
  });

  //* 충전 정보
  const [inputCharge, setInputCharge] = useState({
    check: false,
    money: 16500,
    method: "CSMS",
    number: "",
    isReceipt: false,
    name: "",
  });

  //* 투달러스 구독 내역
  const [tudlaUsHistory, setTudlaUsHistory] = useState([
    {
      created_at: "",
      endDate: "",
      id: 0,
      startDate: "",
      subscription: false,
      type: "",
      updated_at: "",
      userId: 0,
    },
  ]);
  // ! 지금은 사용하지 않는 코드입니다. 무통장입금 기능을 사용하지 않습니다.
  //* 무통장입금
  const [step, setStep] = useState(0);

  // ! 지금은 사용하지 않는 코드입니다. 무통장입금 기능을 사용하지 않습니다.
  //* 현금 영수증 종류
  const [reciptsCategory, setReciptesCategory] = useState("미발급");

  //* 유저의 구독 정보 불러오기
  const handelGetPremiumUser = async () => {
    try {
      //* 기존에 구독한 적이 있는지
      const { data, status } = await cmsServer.get(
        `/tudalus-premium-users?userId=${userId}&token=${CMS_TOKEN}`
      );
      if (status === 200 && data[0]) {
        setTudlaUsHistory(data[0]);
      }
    } catch (e) {}
  };

  //* 상품 정보 불러오기
  const handleGetProduct = async () => {
    try {
      const { data, status } = await cmsServer.get(
        `/subscription-products?name=${path}&token=${CMS_TOKEN}`
      );
      if (status === 200 && data[0]) {
        setProduct(data[0]);
      }
    } catch (e) {}
  };

  //* 투달러스 구독 및 골드 차감
  const handleUserGoldSubtract = async () => {
    try {
      const code = `${moment().format("YYYYMMDDHHmmss")}`;
      const { status } = await apiServer.post(`golds/${userId}/subtract`, {
        amount: 145,
        bonusAmount: 15,
        category: "TudalUs", // '골드충전'
        code,
        type: "subtract",
        isExpired: false,
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
        payment: "",
      });
      if (status === 200) {
        handleUserSubscription();
      }
    } catch (e) {
      alert("오류가 발생했습니다.");
    }
  };

  //* 유저의 구독 정보 업데이트
  const handleUserSubscription = async () => {
    const createData = {
      userId,
      startDate: dayjs().add(9, "hour"),
      endDate: dayjs().add(30, "day").add(9, "hour"),
      type: "gold",
      subscription: true,
    };
    try {
      const { status } = await cmsServer.post(
        `/tudalus-premium-users?token=${CMS_TOKEN}`,
        createData
      );
      if (status === 200) {
        alert("결제가 완료되었습니다.");
        //* maxx카드 연동
        try {
          const { status } = await apiServer.put(
            `/marketing/tudalus/maxx/${userId}/isSubs`
          );
          if (status === 200) {
            window.location.replace("https://us.tudal.co.kr");
          }
        } catch (e) {}
      }
    } catch (e) {
      alert("오류가 생겼습니다.");
    }
  };

  //*이노페이 결제 결과 (결제 함수 2번 째)
  const innopay_result = async (data: any) => {
    if (data.data.message === "close") {
      // window.removeEventListener("message", innopay_result);
      window.location.href = "https://us.tudal.co.kr";
      return;
    } else if (data.data.message !== "close") {
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
        try {
          let newData = {
            AcquCardCode: result.AcquCardCode,
            AcquCardName: decodeURI(result.AcquCardName),
            Amt: result.Amt,
            AuthCode: result.AuthCode,
            AuthDate: result.AuthDate,
            BuyerAuthNum: result.BuyerAuthNum,
            BuyerEmail: result.BuyerEmail,
            BuyerName: decodeURI(result.BuyerName),
            BuyerTel: result.BuyerTel,
            ErrorCode: result.ErrorCode,
            ErrorMsg: decodeURI(result.ErrorMsg),
            GoodsName: decodeURI(result.GoodsName),
            MID: result.MID,
            MOID: result.MOID,
            OID: result.OID,
            PayMethod: result.PayMethod,
            ResultCode: result.ResultCode,
            ResultMsg: decodeURI(result.ResultMsg),
            TID: result.TID,
            action: result.action,
            fn_cd: result.fn_cd,
            fn_name: decodeURI(result.fn_name),
            name: decodeURI(result.name),
            CardQuota: result.CardQuota,
          };
          await cmsServer.post(
            `/tudalus-payment-histories?token=${CMS_TOKEN}`,
            newData
          );
        } catch (e) {}
      } else {
        alert("결제 오류가 발생했습니다.");
        window.removeEventListener("message", innopay_result);
        window.location.href = "https://us.tudal.co.kr";
      }
    }
  };

  //* 이노페이 결제 (결제 함수 1번 째)
  const handleInnoPay = async () => {
    const code = `${moment().format("YYYYMMDDHHmmss")}`;
    try {
      //@ts-ignore
      await innopay.goPay({
        // 필수 파라미터
        PayMethod: "CSMS", // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
        MID: "pgsbcn111m", // 가맹점 MID
        MerchantKey:
          "GzV1sy9fFQp1FTc+MHWmi9Wpr/8mcgKEeSEn4Zg6pHhUZEnFY0EEgrupAPuOseGP4Dcg2nYM8Yj7SDzK4HOlTg==", // 가맹점 라이센스키
        GoodsName: "TudalUS", // 상품명
        Amt: "10", // 결제금액(과세)
        BuyerName: userData.name, // 고객명
        BuyerTel: userData.phoneNumber, // 고객전화번호
        BuyerEmail: "", // 고객이메일
        ResultYN: "N", // 결제결과창 출력유뮤
        userId: userId,
        Moid: `TudalUs${userId}`, // 가맹점에서 생성한 주문번호 셋팅
        Currency: "", // 통화코드가 원화가 아닌 경우만 사용(KRW/USD)
      });
    } catch (e) {
      console.log(e);
    }

    //* 결제 결과가 아래로 전달 (InnoPayResult 함수 실행)
    window.addEventListener("message", innopay_result);
  };

  //* 이노페이 결제 성공시 골드 충전 함수 (결제 함수 3번 째)
  const postPayment = async (result: any) => {
    try {
      const code = `${moment().format("YYYYMMDDHHmmss")}`;
      const { status } = await apiServer.post(`/golds/${userId}/add`, {
        amount: 150, // 충전 골드
        bonusAmount: 15, // 충전 보너스 골드
        category: "골드충전", // '골드충전'
        code,
        type: "add",
        isExpired: false,
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
        payment: result.TID,
      });
      if (status === 200) {
        handleUserGoldSubtract();
      }
    } catch (e) {
      alert("골드 충전에 오류가 발생했습니다. 관리자에게 문의해주세요.");
    }
  };
  // ! 지금은 사용하지 않는 코드입니다. 무통장입금 기능을 사용하지 않습니다.
  // * 다음 스텝 및 결제 정보 저장
  const handleSavePaymentInfo = async () => {
    const code = `${dayjs().format("YYYYMMDDHHmmss")}`;
    const expirationDate = `${dayjs()
      .add(3, "day")
      .set("hour", 0)
      .set("minute", 0)
      .set("second", 0)
      .format("YYYYMMDDHHmmss")}`;
    try {
      const { status } = await apiServer.post(`/golds/web/depositInfo`, {
        userId,
        userName:
          userData?.name +
          userData?.phoneNumber.slice(
            userData?.phoneNumber.length - 4,
            userData?.phoneNumber.length
          ),
        category: "골드충전(tudalus)",
        chargeCode: code,
        gold: 150,
        bonusGold: 15,
        receiptType: reciptsCategory,
        receiptNumber: inputCharge.number,
        depositAmount: inputCharge.money,
        isExpired: 0,
        expirationDate,
        isCharged: 0,
      });
      if (status === 200) {
        setStep(1);
        window.scrollTo(0, 0);
      }
    } catch (e) {
      alert("에러가 발생했습니다. 처음부터 다시 시도해주세요.");
    }
  };

  // ! 지금은 사용하지 않는 코드입니다. 무통장입금 기능을 사용하지 않습니다.
  //* 현금영수증 종류
  const handleRecipts = (e: any) => {
    setReciptesCategory(e.target.value);
    setInputCharge({
      ...inputCharge,
      number: "",
    });
  };
  // ! 지금은 사용하지 않는 코드입니다. 무통장입금 기능을 사용하지 않습니다.
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

  useEffect(() => {
    if (userId && userGold.userId !== 0) {
      handleGetProduct();
      handelGetPremiumUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, userGold, userId]);

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
      <PaymentCashPresenter
        path={path}
        step={step}
        product={product}
        inputCharge={inputCharge}
        handleInnoPay={handleInnoPay}
        handleRecipts={handleRecipts}
        tudlaUsHistory={tudlaUsHistory}
        handleInputCharge={handleInputCharge}
        handleSavePaymentInfo={handleSavePaymentInfo}
      />
    </>
  );
};

export default PaymentCashContainer;
