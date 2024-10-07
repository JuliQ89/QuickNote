import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import { loginSuccess } from "./authSlice";
import { LOGIN, REGISTER } from "../types";

// LOGIN
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

// REGISTER
// Worker Saga: Handling the register request
function* registerSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/api/users/create/",
      action.payload
    );
    if (response.status === 201 || response.status === 200) {
      const { email, password } = action.payload;
      yield call(loginSaga, {
        type: LOGIN,
        payload: {
          email: String(email).trim(),
          password: String(password).trim(),
        },
      });
    }
  } catch (error) {
    console.error("Register failed:", error);
  }
}

// Watcher Saga: Watching for register actions
export function* watchRegisterSaga() {
  yield takeLatest(REGISTER, registerSaga);
}
