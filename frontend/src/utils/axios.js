import axios from "axios";
import Cookies from "js-cookie";

import { store } from "../redux/store";
import { refreshAccessToken } from "./auth";
import { baseURL } from "./constants";
import { logout } from "../redux/auth/authSlice";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// AxiosInstance Request Interceptor (add Authorization Header)
axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      let accessToken = store.getState().auth.accessToken;

      if (accessToken == null) {
        if (Cookies.get("access_token")) {
          accessToken = Cookies.get("access_token");
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
      } else {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AxiosInstance Response Interceptor: 401 Unauthorized -> (handle Token Refresh)
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(prevRequest);
      } else {
        store.dispatch(logout());
      }
    }
    return Promise.reject(error);
  }
);
