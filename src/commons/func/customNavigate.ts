// * 유저가 tudalus에서 올 경우 route path앞에 tudalus를 붙여줌
export const customNavigate = (path: string, go: string) => {
  if (path === "tudalus") {
    return `/${path}/${go}`;
  } else {
    return `/${go}`;
  }
};
