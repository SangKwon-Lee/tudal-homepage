import CryptoJS from "crypto-js";

// encrypt
export const encrypted = (userId: string) => {
  const secretKey = "xnekf";
  return CryptoJS.AES.encrypt(JSON.stringify(userId), secretKey).toString();
};
// decrypt

export const decrypt = (hash: string) => {
  const secretKey = "xnekf";
  const bytes = CryptoJS.AES.decrypt(hash, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
