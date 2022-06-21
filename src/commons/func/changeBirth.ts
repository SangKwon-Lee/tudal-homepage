export const changeBirth = (birth: string) => {
  if (birth.slice(0, 1) !== "0") {
    return "19" + birth;
  } else {
    return "20" + birth;
  }
};
