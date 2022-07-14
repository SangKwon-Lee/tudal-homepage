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
  const [product, setProduct] = useState([
    {
      period: 0,
      gold: 0,
      name: "",
    },
  ]);

  //* 충전 정보
  const [inputCharge, setInputCharge] = useState({
    check: false,
    money: 10,
    method: "CARD",
    number: "",
    isReceipt: false,
    name: "",
  });
  //* 현금 영수증 종류
  const [reciptsCategory, setReciptesCategory] = useState("미발급");

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

  //* 무통장입금
  const [step, setStep] = useState(0);

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
        setProduct(data);
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
        category: "투달러스 구독", // '골드충전'
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
      //* 기존에 구독한 적이 있는지
      const { data: user, status: userStatus } = await cmsServer.get(
        `/tudalus-premium-users?userId=${userId}&token=${CMS_TOKEN}`
      );
      if (userStatus === 200 && user[0]) {
        //* 구독한 적이 있으면 수정
        const editData = {
          userId,
          endDate: dayjs(user[0].endDate).add(30, "day").add(9, "hour"),
          type: "gold",
          subscription: true,
        };
        const { status } = await cmsServer.put(
          `/tudalus-premium-users/${user[0].id}}?token=${CMS_TOKEN}`,
          editData
        );
        if (status === 200) {
          alert("결제가 완료되었습니다.");
          window.location.replace("https://us.tudal.co.kr");
        }
      } else {
        //* 구독한 적이 없으면 생성
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
      }
    } catch (e) {
      alert("오류가 생겼습니다.");
    }
  };

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
    const code = `${moment().format("YYYYMMDDHHmmss")}`;
    //@ts-ignore$
    innopay.goPay({
      // 필수 파라미터
      PayMethod: inputCharge.method, // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
      MID: "pgsbcn113m", // 가맹점 MID
      MerchantKey:
        "VbLEjdU/0hl31Cgp4pfjtkkYM0IrCjKPs9r/S7QQ/1qR0YcO6CYxMbjjIU3C4cwYn7p8wpzS5UStBOoWdZkfJA==", // 가맹점 라이센스키
      GoodsName: "투달러스 구독", // 상품명
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
      const { status } = await apiServer.post(`/golds/web/depositInfo`, {
        userId,
        userName:
          userData?.name +
          userData?.phoneNumber.slice(
            userData?.phoneNumber.length - 4,
            userData?.phoneNumber.length
          ),
        category: "골드충전",
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

  //* 현금영수증 종류
  const handleRecipts = (e: any) => {
    setReciptesCategory(e.target.value);
    setInputCharge({
      ...inputCharge,
      number: "",
    });
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
