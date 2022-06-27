import { useCallback, useEffect, useState } from "react";
import { cmsServer, CMS_TOKEN } from "../../commons/axios/axios";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import SubscriptionHistoryPresenter from "./subscriptionHistory.presenter";

const SubscriptionHistoryContainer = () => {
  const userId = getUserId();
  //* 회원 정보 불러오기;
  useGetUser();

  const [loading, setLoading] = useState(false);

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

  //   //* 사용내역
  //   const [goldHistory, setGoldHistory] = useState([]);
  //   //* 투달러스 구독 골드 내역
  //   const [tudlaUsHistoryGold, setTudlaUsHistoryGold] = useState([]);
  // //* 골드 사용내역 불러오기
  // const handleGetGoldHistory = useCallback(async () => {
  //   try {
  //     const { data, status } = await apiServer.get(
  //       `golds/history/${userId}?limit=99999`,
  //       {
  //         headers: {
  //           pragma: "no-cache",
  //         },
  //       }
  //     );

  //     if (status === 200 && data.length > 0) {
  //       setTudlaUsHistoryGold(
  //         data.filter((data: any) => data.category === "투달러스 구독")
  //       );
  //       setGoldHistory(data);
  //     }
  //   } catch (e) {}
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userId]);

  //* 투달러스 구독 내역 불러오기
  const handleGetTudalUsHistory = useCallback(async () => {
    setLoading(true);
    try {
      //* 기존에 구독한 적이 있는지
      const { data, status } = await cmsServer.get(
        `/tudalus-premium-users?userId=${userId}&token=${CMS_TOKEN}`
      );
      if (status === 200 && data[0]) {
        setLoading(false);
        setTudlaUsHistory(data);
      }
    } catch (e) {}
  }, [userId]);

  //* 투달러스 구독 내역 불러오기 useEffect
  useEffect(() => {
    handleGetTudalUsHistory();
  }, [userId, handleGetTudalUsHistory]);

  return (
    <SubscriptionHistoryPresenter
      loading={loading}
      tudlaUsHistory={tudlaUsHistory}
    />
  );
};

export default SubscriptionHistoryContainer;
