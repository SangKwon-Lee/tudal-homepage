import CryptoJS from "crypto-js";
import { getCookie } from "./cookie";
const { REACT_APP_HASH_KEY } = process.env;
// * 유저 ID를 hash값으로 변경하여 암호화 및 해독 하는 함수
// * getUserId가 암호화된 userId를 해독해서 알려줌
// encrypt
export const encrypted = (userId: string) => {
  const secretKey = REACT_APP_HASH_KEY || "";
  return CryptoJS.AES.encrypt(JSON.stringify(userId), secretKey).toString();
};

// decrypt
export const decrypt = (hash: any) => {
  const secretKey = REACT_APP_HASH_KEY || "";
  const bytes = CryptoJS.AES.decrypt(hash, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// getUserId
export const getUserId = () => {
  if (getCookie("tudalUser")) {
    return decrypt(getCookie("tudalUser"));
  } else {
    return;
  }
};
