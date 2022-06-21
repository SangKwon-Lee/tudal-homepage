import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();
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
  if (localStorage.getItem("tudalUser")) {
    return decrypt(localStorage.getItem("tudalUser"));
  } else {
    return;
  }
};
