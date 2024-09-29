import axios from "axios";

export const baseURL = `http://localhost:8000`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3NjMxMjY0LCJpYXQiOjE3Mjc2MzA5NjQsImp0aSI6Ijc5M2M1MWE3MzhjMzQyNzJhMzI2ODg1MGFiYjRjMjJkIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJqdWxpYW4uc2luZ2hlaXNlciIsImVtYWlsIjoianVsaWFuLnNpbmdoZWlzZXIub2ZmaWNpYWxAZ21haWwuY29tIiwiaWQiOjF9.FgJ26UDwyDZWEtWuLdGCxEBOU9IM4uKFxxbX_GHP5Oc";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  console.log("Interceptor ran");
  return req;
});
