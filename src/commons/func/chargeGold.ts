import moment from "moment";
import { apiServer } from "../axios/axios";

export const chargeGold = async (userId: string) => {
  try {
    const code = `${moment().format("YYYYMMDDHHmmss")}`;
    const { status } = await apiServer.post(`/golds/${userId}/add`, {
      amount: 10000, // 충전 골드
      bonusAmount: 0, // 충전 보너스 골드
      category: "골드충전", // '골드충전'
      code,
      type: "add",
      isExpired: false,
      datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
      payment: "",
    });
    if (status === 200) {
      await apiServer.get(`/golds/${userId}`, {
        headers: {
          pragma: "no-cache",
        },
      });
      alert("골드가 충전됐습니다.");
    }
  } catch (e) {}
};

export const getUser = async (phoneNumber: string) => {
  try {
    const { data, status } = await apiServer.post(`/user/checkProps`, {
      phoneNumber: phoneNumber,
    });

    if (status === 200) {
      chargeGold(data[0].userId);
    }
  } catch (e) {}
};
