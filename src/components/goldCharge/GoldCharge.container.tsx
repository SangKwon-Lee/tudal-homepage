/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { GlobalContext } from "../../App";
import WithAuth from "../commons/hocs/withAuth";
import GoldChargePresenter from "./GoldCharge.presenter";

interface IGoldChargeProps {
  path: string;
}

const GoldChargeContainer: React.FC<IGoldChargeProps> = ({ path }) => {
  const { userData, setUserGold, userGold } = useContext(GlobalContext);

  //* 골드
  const [gold, setgold] = useState("충전하실 금액을 선택해주세요.");

  //* 충전 금액
  const [inputCharge, setInputCharge] = useState({
    check: false,
    money: 0,
    method: "CARD",
  });

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
  }, [userData.userId]);

  //* 유저 골드 정보 불러오기
  const handleGetUserGold = async () => {
    if (userData.userId) {
      try {
        const { data } = await axios.get(
          `https://api.tudal.co.kr/api/golds/${userData.userId}`
        );
        setUserGold(data[0]);
      } catch (e) {
        console.log(e);
      }
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
  console.log(inputCharge);

  //* 이노페이 결제
  const handleInnoPay = () => {
    //@ts-ignore
    innopay.goPay({
      //// 필수 파라미터
      //@ts-ignore
      PayMethod: inputCharge.method, // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
      //@ts-ignore
      MID: "testpay01m", // 가맹점 MID
      //@ts-ignore
      MerchantKey:
        "Ma29gyAFhvv/+e4/AHpV6pISQIvSKziLIbrNoXPbRS5nfTx2DOs8OJve+NzwyoaQ8p9Uy1AN4S1I0Um5v7oNUg==", // 가맹점 라이센스키
      //@ts-ignore
      GoodsName: "투달 골드", // 상품명
      //@ts-ignore
      Amt: String(inputCharge.money), // 결제금액(과세)
      //@ts-ignore
      BuyerName: userData.name, // 고객명
      //@ts-ignore
      BuyerTel: userData.phoneNumber, // 고객전화번호
      //@ts-ignore
      BuyerEmail: "", // 고객이메일
      //@ts-ignore
      ResultYN: "Y", // 결제결과창 출력유뮤
      Moid: "testpay01m01234567890", // 가맹점에서 생성한 주문번호 셋팅
      //// 선택 파라미터
      //@ts-ignore
      ReturnURL: "https://pg.innopay.co.kr/ipay/returnPay.jsp", // 결제결과 전송 URL(없는 경우 아래 innopay_result 함수에 결제결과가 전송됨)
      //			ArsConnType:'02', 							///* ARS 결제 연동시 필수 01:호전환, 02(가상번호), 03:대표번호 */
      //			FORWARD:'',									// 결제창 연동방식 (X:레이어, 기본값)
      //			GoodsCnt:'',									// 상품갯수 (가맹점 참고용)
      //			MallReserved:'',								// 가맹점 데이터
      //			OfferingPeriod:'',								// 제공기간
      //			DutyFreeAmt:'',								// 결제금액(복합과세/면세 가맹점의 경우 금액설정)
      //			EncodingType:'utf-8',						// 가맹점 서버 인코딩 타입 (utf-8, euc-kr)
      //			MallIP:'',											// 가맹점 서버 IP
      //			UserIP:'',											// 고객 PC IP
      //			mallUserID:'',									// 가맹점 고객ID
      //			User_ID:'',										// Innopay에 등록된 영업사원ID
      Currency: "", // 통화코드가 원화가 아닌 경우만 사용(KRW/USD)
    });
    /**
     * 결제결과 수신 Javascript 함수
     * ReturnURL이 없는 경우 아래 함수로 결과가 리턴됩니다 (함수명 변경불가!)
     */
    function innopay_result(data: any) {
      var a = JSON.stringify(data);
      // Sample
      var mid = data.MID; // 가맹점 MID
      var tid = data.TID; // 거래고유번호
      var amt = data.Amt; // 금액
      var moid = data.MOID; // 주문번호
      var authdate = data.AuthDate; // 승인일자
      var authcode = data.AuthCode; // 승인번호
      var resultcode = data.ResultCode; // 결과코드(PG)
      var resultmsg = data.ResultMsg; // 결과메세지(PG)
      var errorcode = data.ErrorCode; // 에러코드(상위기관)
      var errormsg = data.ErrorMsg; // 에러메세지(상위기관)
      var EPayCl = data.EPayCl;
      alert("[" + resultcode + "]" + resultmsg);
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
export default WithAuth(GoldChargeContainer);
