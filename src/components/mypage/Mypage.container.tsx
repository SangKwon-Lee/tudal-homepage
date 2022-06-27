import { GlobalContext } from "../../App";
import WithAuth from "../commons/hocs/withAuth";
import MypagePresenter from "./Mypage.presenter";
import { getUserId } from "../../commons/func/hash";
import useGetUser from "../commons/hooks/useGetUser";
import { useContext, useEffect } from "react";

interface MypageContainerProps {
  path: string;
}

const MypageContainer: React.FC<MypageContainerProps> = ({ path }) => {
  const userId = getUserId();
  const { userGold, userData } = useContext(GlobalContext);

  //* 회원 정보 불러오기;
  useGetUser();

  //* 유저 골드, 사용내역 정보 불러오기 useEffect
  useEffect(() => {}, [userId]);

  return (
    <MypagePresenter path={path} userGold={userGold} userData={userData} />
  );
};
export default WithAuth(MypageContainer);
