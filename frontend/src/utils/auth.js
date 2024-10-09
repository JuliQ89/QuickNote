import Cookies from "js-cookie";

import { axiosInstance } from "./axios";
import {
  logout,
  setAccessToken,
  setRefreshToken,
} from "../redux/auth/authSlice";

import { store } from "../redux/store";

export const refreshAccessToken = async () => {
  const refreshToken = store.getState().auth.refreshToken;
  try {
    const response = await axiosInstance.post("/api/token/refresh/", {
      refresh: refreshToken,
    });
    if (response.data) {
      store.dispatch(setAccessToken(response.data?.access));
      store.dispatch(setRefreshToken(response.data?.refresh));
      setTokenCookies(response.data?.access, response.data?.refresh);
      return response.data?.access;
    }
  } catch (error) {
    console.log(error);
    store.dispatch(logout());
    return null;
  }
};

export const getTokensCookie = () => {
  const access_token = Cookies.get("access_token")
    ? Cookies.get("access_token")
    : null;
  const refresh_token = Cookies.get("refresh_token")
    ? Cookies.get("refresh_token")
    : null;

  return {
    access: access_token,
    refresh: refresh_token,
  };
};

export const setTokenCookies = (access_token, refresh_token) => {
  Cookies.set("access_token", access_token);
  Cookies.set("refresh_token", refresh_token);
};

export const removeTokenCookies = () => {
  Cookies.get("access_token") && Cookies.remove("access_token");
  Cookies.get("refresh_token") && Cookies.remove("refresh_token");
};
