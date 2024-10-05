import { put, takeEvery } from "redux-saga/effects";
import { GET_TOKENS, SET_TOKENS } from "../types";

import Cookies from "js-cookie";

import { axiosInstance } from "../../utils/constants";

function* getToken(action) {
  const { email, password } = action.payload;
  try {
    const response = yield axiosInstance.post("/api/token/", {
      email,
      password,
    });
    yield Cookies.set("token", JSON.stringify(response.data));
    yield put({ type: SET_TOKENS, data: response.data });
  } catch (error) {
    console.log(error);
  }
}

export function* tokenSaga() {
  yield takeEvery(GET_TOKENS, getToken);
}
