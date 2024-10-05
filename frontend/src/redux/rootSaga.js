import { all } from "redux-saga/effects";

import { watchLoginSaga } from "./auth/authSaga";

export default function* rootSaga() {
  yield all([watchLoginSaga()]);
}
