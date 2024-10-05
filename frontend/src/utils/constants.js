// import axios from "axios";
// import { getTokensCookie } from "./auth";

// export const baseURL = `http://localhost:8000`;

// let token = getTokensCookie();

// export const axiosInstance = axios.create({
//   baseURL,
//   timeout: 15000,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//     accept: "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(async (req) => {
//   token = getTokensCookie();
//   req.headers.Authorization = `Bearer ${token}`;
//   console.log("Bearer Token: ", token);
//   return req;
// });
