/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { GlobalContext } from "../../App";
import WithAuth from "../commons/hocs/withAuth";
import GoldChargePresenter from "./GoldCharge.presenter";
import moment from "moment";

import $ from "jquery";
import { useNavigate } from "react-router";

interface IGoldChargeProps {
  path: string;
}

const GoldChargeContainer: React.FC<IGoldChargeProps> = ({ path }) => {
  const { userData, setUserGold, userGold, setUserData } =
    useContext(GlobalContext);
  const userId = sessionStorage.getItem("userId");

  const navigate = useNavigate();

  //* 골드
  const [gold, setgold] = useState("충전하실 금액을 선택해주세요.");

  //* 충전 금액
  const [inputCharge, setInputCharge] = useState({
    check: false,
    money: 0,
    method: "CARD",
  });

  const [resultData, setResultData] = useState<any>({});
  //* 골드 선택 및 충전 금액
  const handleGold = (e: any) => {
    setgold(e.target.value);
    setInputCharge({
      ...inputCharge,
      money: Number(e.target.value) * 100 + Number(e.target.value) * 10,
    });
  };

  //* 유저 골드 정보 불러오기
  useEffect(() => {
    handleGetUserGold();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  //* 유저 골드 정보 불러오기
  const handleGetUserGold = async () => {
    if (userId) {
      try {
        const { data } = await axios.get(
          `https://api.tudal.co.kr/api/golds/${userId}`
        );
        const { data: userData } = await axios.get(
          `https://api.tudal.co.kr/api/user/${userId}`
        );
        setUserData(userData[0]);
        setUserGold(data[0]);
      } catch (e) {}
    }
  };

  //* 동의
  const handleInputCharge = (e: any) => {
    if (e.target.id === "check") {
      setInputCharge({
        ...inputCharge,
        check: !inputCharge.check,
      });
    } else {
      setInputCharge({
        ...inputCharge,
        method: e.target.value,
      });
    }
  };

  //* 이노페이 결제
  const handleInnoPay = async () => {
    //@ts-ignore
    await innopay.goPay({
      // 필수 파라미터
      PayMethod: inputCharge.method, // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
      MID: "pgsbcn113m", // 가맹점 MID
      MerchantKey:
        "VbLEjdU/0hl31Cgp4pfjtkkYM0IrCjKPs9r/S7QQ/1qR0YcO6CYxMbjjIU3C4cwYn7p8wpzS5UStBOoWdZkfJA==", // 가맹점 라이센스키
      GoodsName: "투달 테스트 골드", // 상품명
      Amt: "43", // 결제금액(과세)
      BuyerName: userData.name, // 고객명
      BuyerTel: userData.phoneNumber, // 고객전화번호
      BuyerEmail: "PleaseWriteYourEmail@test.com", // 고객이메일
      ResultYN: "Y", // 결제결과창 출력유뮤
      Moid: "testpay01m01234567890", // 가맹점에서 생성한 주문번호 셋팅
      // 선택 파라미터
      // 결제결과 전송 URL(없는 경우 아래 innopay_result 함수에 결제결과가 전송됨)
      // ReturnURL: innopay_result, // 결제결과 전송 URL(없는 경우 아래 innopay_result 함수에 결제결과가 전송됨)
      Currency: "", // 통화코드가 원화가 아닌 경우만 사용(KRW/USD)
    });

    window.addEventListener("message", async function (data: any) {
      if (data.data) {
        var result = JSON.parse(data.data);
        // Sample
        var mid = data.data.MID; // 가맹점 MID
        var tid = data.data.TID; // 거래고유번호
        var amt = data.data.Amt; // 금액
        var moid = data.data.MOID; // 주문번호
        var authdate = data.data.AuthDate; // 승인일자
        var authcode = data.data.AuthCode; // 승인번호
        var resultcode = data.data.ResultCode; // 결과코드(PG)
        var resultmsg = data.data.ResultMsg; // 결과메세지(PG)
        var errorcode = data.data.ErrorCode; // 에러코드(상위기관)
        var errormsg = data.data.ErrorMsg; // 에러메세지(상위기관)
        var EPayCl = data.data.EPayCl;
      }
      if (result.ResultCode === "3001") {
        try {
          const code = `${moment().format("YYYYMMDDHHmmss")}}`;
          const { status, data } = await axios.post(
            `https://api.tudal.co.kr/api/golds/${userId}/add`,
            {
              amount: 1000, // 충전 골드
              bonusAmount: 100, // 충전 보너스 골드
              category: "골드충전", // '골드충전'
              code,
              type: "add",
              isExpired: false,
              datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
              payment: result.TID,
            }
          );
          console.log(data, status);
          alert("결제 성공");
          navigate("/success");
        } catch (e) {
          alert("결제 실패");
        } finally {
        }
      } else {
        alert("결제 오류가 발생했습니다.");
      }
    });
  };

  /**
   * 결제결과 수신 Javascript 함수
   * ReturnURL이 없는 경우 아래 함수로 결과가 리턴됩니다
   */

  //* 골드 충전 함수
  const postPayment = async () => {
    try {
      const code = `${moment().format("YYYYMMDDHHmmss")}}`;
      const { status, data } = await axios.post(
        `https://api.tudal.co.kr/api/golds/${userId}/add`,
        {
          amount: 1000, // 충전 골드
          bonusAmount: 100, // 충전 보너스 골드
          category: "골드충전", // '골드충전'
          code,
          type: "add",
          isExpired: false,
          datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
          payment: resultData.tid,
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <HelmetProvider>
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
      </HelmetProvider>
      <GoldChargePresenter
        path={path}
        userGold={userGold}
        userData={userData}
        gold={gold}
        handleGold={handleGold}
        handleInputCharge={handleInputCharge}
        inputCharge={inputCharge}
        handleInnoPay={handleInnoPay}
      />
    </>
  );
};
export default GoldChargeContainer;
