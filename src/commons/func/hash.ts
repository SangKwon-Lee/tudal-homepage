import CryptoJS from "crypto-js";
import { getCookie } from "./cookie";
const { REACT_APP_HASH_KEY } = process.env;

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
