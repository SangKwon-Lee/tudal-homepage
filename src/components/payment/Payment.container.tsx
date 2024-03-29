import dayjs from "dayjs";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import { cmsServer, CMS_TOKEN, apiServer } from "../../commons/axios/axios";
import { getUserId } from "../../commons/func/hash";
import WithAuth from "../commons/hocs/withAuth";
import useGetUser from "../commons/hooks/useGetUser";
import PaymentPresenter from "./Payment.presenter";
interface PaymentProps {
  path: string;
}

const PaymentContainer: React.FC<PaymentProps> = ({ path }) => {
  const userId = getUserId();
  const [loading, setLoading] = useState(true);

  // const isCash = window.location.href.includes("cash");

  //* 회원 정보 불러오기;
  useGetUser();

  //* 회원 정보
  const { userGold } = useContext(GlobalContext);

  //* 상품 정보
  const [product, setProduct] = useState([
    {
      period: 0,
      gold: 0,
      name: "",
    },
  ]);

  //* 골드 계산
  const [subtractGold, setSubtractGold] = useState({
    remainGold: 0,
    remainBonusGold: 0,
    remainUserGold: 0,
    remainUserBonusGold: 0,
  });

  //* 골드가 부족한지
  const [canBuy, setCanBuy] = useState(true);

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

  useEffect(() => {
    if (userId && userGold.userId !== 0) {
      handleGetProduct();
      handelGetPremiumUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, userGold, userId]);

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
        setLoading(false);
        setProduct(data);
        //* 상품 가격의 10%만 보너스 골드로 차감
        const Subtractgold = data[0].gold * 0.9;
        const SubtractBonus = data[0].gold * 0.1;
        const diffBonusGold =
          userGold.bonusGold - SubtractBonus < 0
            ? Math.abs(userGold.bonusGold - SubtractBonus)
            : 0;
        //* 차감되는 골드
        const remainGold = diffBonusGold + Subtractgold;
        //* 차감되는 보너스 골드
        const remainBonusGold =
          userGold.bonusGold - SubtractBonus > 0
            ? SubtractBonus
            : userGold.bonusGold;
        setSubtractGold({
          ...subtractGold,
          remainGold,
          remainBonusGold,
          remainUserGold: userGold.gold - remainGold,
          remainUserBonusGold: userGold.bonusGold - remainBonusGold,
        });
        if (userGold.gold < data[0].gold * 0.9) {
          setCanBuy(false);
          window.location.replace("https://tudal.co.kr/tudalus/payment/cash");
        }
        if (
          userGold.gold > data[0].gold * 0.9 &&
          userGold.bonusGold > userGold.gold - remainGold
        ) {
          setCanBuy(false);
          window.location.replace("https://tudal.co.kr/tudalus/payment/cash");
        }
      }
    } catch (e) {}
  };

  const handleUserGoldSubtract = async () => {
    //* 골드가 부족할 경우
    if (!canBuy) {
      alert("골드가 부족합니다.");
      return;
    }
    try {
      const code = `${moment().format("YYYYMMDDHHmmss")}`;
      const { status } = await apiServer.post(`golds/${userId}/subtract`, {
        amount: subtractGold.remainGold,
        bonusAmount: subtractGold.remainBonusGold,
        category: "투달유에스", // '골드충전'
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

  return (
    <PaymentPresenter
      path={path}
      canBuy={canBuy}
      loading={loading}
      product={product}
      subtractGold={subtractGold}
      tudlaUsHistory={tudlaUsHistory}
      handleUserGoldSubtract={handleUserGoldSubtract}
    />
  );
};

export default WithAuth(PaymentContainer);
