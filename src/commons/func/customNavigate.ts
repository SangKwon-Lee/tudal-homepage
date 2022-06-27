export const customNavigate = (path: string, go: string) => {
  if (path === "tudalus") {
    return `/${path}/${go}`;
  } else {
    return `/${go}`;
  }
};
