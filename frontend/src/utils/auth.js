// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";

// export const getUser = (access_token) => {
//   const user = jwtDecode(access_token) ?? null;
//   return user;
// };

// export const setTokensCookie = (access_token, refresh_token) => {
//   Cookies.set("access_token", access_token, { expires: 1 });
//   Cookies.set("refresh_token", refresh_token, { expires: 7 });
// };

// export const getTokensCookie = () => {
//   const access_token = Cookies.get("access_token")
//     ? Cookies.get("access_token")
//     : null;
//   const refresh_token = Cookies.get("refresh_token")
//     ? Cookies.get("refresh_token")
//     : null;

//   return {
//     access: access_token,
//     refresh: refresh_token,
//   };
// };
