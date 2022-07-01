// * 쿠키를 저장, 불러오기, 삭제하는 함수
// * 쿠키에는 userID가 hash값으로 변경되어 저장

//@ts-ignore
export function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

//@ts-ignore
export function getCookie(name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}
//@ts-ignore
export function deleteCookie(name) {
  setCookie(name, "", 0);
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
