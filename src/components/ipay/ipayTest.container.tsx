/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet, HelmetProvider } from "react-helmet-async";

const InnoPay = () => {
  const handleInnoPay = () => {
    jQuery(document).ready(function () {
      jQuery("input[name=btn_pay]").click(function () {
        // 결제요청 함수
        //@ts-ignore
        innopay.goPay({
          //// 필수 파라미터
          //@ts-ignore
          PayMethod: frm.PayMethod.value, // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
          //@ts-ignore
          MID: frm.MID.value, // 가맹점 MID
          //@ts-ignore
          MerchantKey: frm.MerchantKey.value, // 가맹점 라이센스키
          //@ts-ignore
          GoodsName: frm.GoodsName.value, // 상품명
          //@ts-ignore
          Amt: frm.Amt.value, // 결제금액(과세)
          //@ts-ignore
          BuyerName: frm.BuyerName.value, // 고객명
          //@ts-ignore
          BuyerTel: frm.BuyerTel.value, // 고객전화번호
          //@ts-ignore
          BuyerEmail: frm.BuyerEmail.value, // 고객이메일
          //@ts-ignore
          ResultYN: frm.ResultYN.value, // 결제결과창 출력유뮤
          Moid: "testpay01m01234567890", // 가맹점에서 생성한 주문번호 셋팅
          //// 선택 파라미터
          //@ts-ignore
          ReturnURL: frm.ReturnURL.value, // 결제결과 전송 URL(없는 경우 아래 innopay_result 함수에 결제결과가 전송됨)
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
      });
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
      <div style={{ width: "100%" }}>
        <form action="" name="frm" id="frm" method="post">
          <div id="pay_method">
            <select name="PayMethod" id="PayMethod">
              <option value="CARD">신용카드(일반)</option>
              <option value="BANK">계좌이체</option>
              <option value="VBANK">무통장입금(가상계좌)</option>
              <option value="CARS">ARSPAY Web LINK</option>
              <option value="CSMS">SMS카드결제 Web LINK(인증)</option>
              <option value="DSMS">SMS카드결제 Web LINK(수기)</option>
              <option value="CKEYIN">수기결제 WebLink</option>
              <option value="EPAY">간편결제</option>
              <option value="EBANK">계좌간편결제</option>
            </select>
          </div>
          <div>
            <input type="text" name="MID" defaultValue="testpay01m" />
            <input
              type="text"
              name="MerchantKey"
              defaultValue="Ma29gyAFhvv/+e4/AHpV6pISQIvSKziLIbrNoXPbRS5nfTx2DOs8OJve+NzwyoaQ8p9Uy1AN4S1I0Um5v7oNUg=="
            />
            <input
              type="text"
              name="GoodsName"
              defaultValue="테스트상품"
              placeholder=""
            ></input>
            <input
              type="text"
              name="Amt"
              defaultValue="1000"
              // onKeyUp="javascript:numOnly(this,document.frm,false);"
            ></input>
            <input
              type="text"
              name="BuyerName"
              defaultValue="mn_홍길동"
              placeholder=""
            ></input>
            <input
              type="text"
              name="BuyerTel"
              defaultValue="012345678"
              placeholder=""
            ></input>
            <input
              type="text"
              name="BuyerEmail"
              defaultValue="test@test.com"
              placeholder=""
            ></input>
            <input type="text" name="ResultYN" defaultValue="Y" />
            <input
              type="text"
              name="ReturnURL"
              defaultValue="https://pg.innopay.co.kr/ipay/returnPay.jsp"
              placeholder=""
            />
            <input
              type="button"
              className="btn_submit"
              name="btn_pay"
              defaultValue="결제요청"
              onClick={handleInnoPay}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default InnoPay;
