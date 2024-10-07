import axios from "axios";
import Cookies from "js-cookie";

import { store } from "../redux/store";
import { refreshAccessToken } from "./auth";
import { baseURL } from "./constants";

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
      prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(error);
  }
);

// Request Interceptor to add Authorization Header
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("access_token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor to handle Token Refresh
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error?.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = Cookies.get("refresh_token");
//         const { data } = await axios.post("/refresh/", {
//           refresh: refreshToken,
//         });

//         Cookies.set("access_token", data.access);
//         axiosInstance.defaults.headers[
//           "Authorization"
//         ] = `Bearer ${data.access}`;
//         originalRequest.headers["Authorization"] = `Bearer ${data.access}`;

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         // Log the user out or prompt for re-login
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
