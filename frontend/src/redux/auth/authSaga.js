import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import { loginSuccess } from "./authSlice";
import { LOGIN } from "../types";

// Worker Saga: Handling the login request
function* loginSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/api/token/",
      action.payload
    );
    const { access, refresh } = response.data;
    yield put(loginSuccess({ accessToken: access, refreshToken: refresh }));
  } catch (error) {
    console.error("Login failed:", error);
  }
}

// Watcher Saga: Watching for login actions
export function* watchLoginSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
