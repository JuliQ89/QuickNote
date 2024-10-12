import axios from "axios";
import { refreshAccessToken } from "./auth";
import Cookies from "js-cookie";

import { store } from "../redux/store";
import { baseURL } from "./constants";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// AxiosInstance Request Interceptor (add Authorization Header)
axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      let access_token = store.getState().auth.access_token;

      if (!access_token) {
        if (Cookies.get("access_token")) {
          access_token = Cookies.get("access_token");
          config.headers["Authorization"] = `Bearer ${access_token}`;
        }
      } else {
        config.headers["Authorization"] = `Bearer ${access_token}`;
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
      const new_access_token = await refreshAccessToken();
      if (new_access_token) {
        prevRequest.headers["Authorization"] = `Bearer ${new_access_token}`;
        return axiosInstance(prevRequest);
      }
    }
    return Promise.reject(error);
  }
);
