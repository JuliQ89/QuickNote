import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import {
  getTokensCookie,
  setTokenCookies,
  removeTokenCookies,
} from "../../utils/auth";

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
      setTokenCookies(accessToken, refreshToken);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      removeTokenCookies();
    },
    setTokensFromCookies: (state) => {
      const { access: accessToken, refresh: refreshToken } = getTokensCookie();
      if (accessToken) {
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = jwtDecode(accessToken);
        state.isAuthenticated = true;
      }
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setTokensFromCookies,
  setAccessToken,
  setRefreshToken,
} = authSlice.actions;
export default authSlice.reducer;
