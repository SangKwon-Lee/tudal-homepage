import { useCallback, useEffect, useState } from "react";
import { apiServer } from "../../commons/axios/axios";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import GoldHistoryPresenter from "./GoldHistory.presenter";

const GoldHistoryContainer = () => {
  const userId = getUserId();

  //* 회원 정보 불러오기;
  useGetUser();

  const [loading, setLoading] = useState(false);

  //* 더 보기
  const [more, setMore] = useState(false);

  // * sort
  const [sort, setSort] = useState("");

  //* 길이 조절
  const [length, setLength] = useState(6);

  //* 사용내역
  const [goldHistory, setGoldHistory] = useState([]);

  //* 골드 사용내역 불러오기
  const handleGetGoldHistory = useCallback(async () => {
    setLoading(true);
    try {
      const { data, status } = await apiServer.get(
        `golds/history/${userId}?limit=99999`,
        {
          headers: {
            pragma: "no-cache",
          },
        }
      );
      if (status === 200 && data.length > 0) {
        setLoading(false);
        setGoldHistory(data);
      }
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  //* 유저 골드 사용내역 정보 불러오기
  useEffect(() => {
    handleGetGoldHistory();
  }, [handleGetGoldHistory, userId]);

  // * 보기 버튼 관리
  const handleIsView = () => {
    setLength(99999);
    setMore(true);
  };

  // * 정렬 버튼 관리
  const handleSort = (e: any) => {
    setSort(e.target.value);
  };

  return (
    <GoldHistoryPresenter
      sort={sort}
      more={more}
      length={length}
      loading={loading}
      handleSort={handleSort}
      goldHistory={goldHistory}
      handleIsView={handleIsView}
    />
  );
};

export default GoldHistoryContainer;
