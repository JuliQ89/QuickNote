import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = `http://localhost:8000`;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// Request Interceptor to add Authorization Header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor to handle Token Refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refresh_token");
        const { data } = await axios.post("/refresh/", {
          refresh: refreshToken,
        });

        Cookies.set("access_token", data.access);
        axiosInstance.defaults.headers[
          "Authorization"
        ] = `Bearer ${data.access}`;
        originalRequest.headers["Authorization"] = `Bearer ${data.access}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Log the user out or prompt for re-login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
