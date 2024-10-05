import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = `http://localhost:8000`;

const token = JSON.parse(Cookies.get("token"))?.access;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  console.log(token);
  return req;
});
