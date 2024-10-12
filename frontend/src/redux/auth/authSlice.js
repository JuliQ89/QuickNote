import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  refresh_token: null,
  access_token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      Cookies.set("refresh_token", refresh_token);
      Cookies.set("access_token", access_token);
      state.user = jwtDecode(access_token);
      state.refresh_token = refresh_token;
      state.access_token = access_token;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      Cookies.remove("refresh_token");
      Cookies.remove("access_token");
      state.user = null;
      state.refresh_token = null;
      state.access_token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
