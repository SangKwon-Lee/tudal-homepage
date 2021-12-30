import {
  PaySuccessBody,
  PaySuccessBtn,
  PaySuccessCheck,
  PaySuccessText,
  PaySuccessWrapper,
} from "./PaySuccess.style";
import BigCheck from "../../assets/images/bigCheck.png";
import { useNavigate } from "react-router";

const PaySuccessContainer = () => {
  const navigate = useNavigate();
  return (
    <PaySuccessWrapper>
      <PaySuccessBody>
        <PaySuccessCheck src={BigCheck} />
        <PaySuccessText>결제가 완료되었습니다.</PaySuccessText>
        <PaySuccessBtn
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로 이동
        </PaySuccessBtn>
      </PaySuccessBody>
    </PaySuccessWrapper>
  );
};
export default PaySuccessContainer;
