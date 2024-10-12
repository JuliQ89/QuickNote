import Cookies from "js-cookie";

import { store } from "../redux/store";
import { loginUser, logoutUser } from "../redux/auth/authSlice";
import { axiosInstance } from "./axios";

export const getTokensFromCookies = () => {
  const access_token = Cookies.get("access_token")
    ? Cookies.get("access_token")
    : null;
  const refresh_token = Cookies.get("refresh_token")
    ? Cookies.get("refresh_token")
    : null;

  return {
    access_token,
    refresh_token,
  };
};

export const loginUserOnPageLoad = () => {
  const { access_token, refresh_token } = getTokensFromCookies();
  if (access_token && refresh_token) {
    store.dispatch(loginUser({ access_token, refresh_token }));
  }
};

export const refreshAccessToken = async () => {
  const refresh_token = store.getState().auth.refresh_token;
  try {
    const response = await axiosInstance.post(
      "/api/token/refresh/",
      JSON.stringify({
        refresh: refresh_token,
      })
    );
    if (response.data) {
      store.dispatch(
        loginUser({
          access_token: response.data?.access,
          refresh_token: response.data?.refresh,
        })
      );
      return response.data?.access;
    }
  } catch (error) {
    console.log(error);
    store.dispatch(logoutUser());
    return null;
  }
};
