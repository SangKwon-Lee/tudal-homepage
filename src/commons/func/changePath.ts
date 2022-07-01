// * 유저가 투달러스에서 들어온 사람이면 text를 투달러스로 변경해줌
export const changePath = (path: string) => {
  if (path === "tudalus") {
    return "투달러스";
  } else {
    return "투자의달인";
  }
};
