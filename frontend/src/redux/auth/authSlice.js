import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = jwtDecode(accessToken);
      state.isAuthenticated = true;
      Cookies.set("access_token", accessToken);
      Cookies.set("refresh_token", refreshToken);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
    },
    setTokensFromCookies: (state) => {
      const accessToken = Cookies.get("access_token");
      const refreshToken = Cookies.get("refresh_token");
      if (accessToken) {
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = jwtDecode(accessToken);
        state.isAuthenticated = true;
      }
    },
  },
});

export const { loginSuccess, logout, setTokensFromCookies } = authSlice.actions;
export default authSlice.reducer;
