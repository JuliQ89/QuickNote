import { all } from "redux-saga/effects";

import { watchLoginSaga, watchRegisterSaga } from "./auth/authSaga";

export default function* rootSaga() {
  yield all([watchLoginSaga(), watchRegisterSaga()]);
}
