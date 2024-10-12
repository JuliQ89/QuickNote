import { all } from "redux-saga/effects";

import { watcherLoginSaga, watchRegisterSaga } from "./auth/authSaga";
import { watcherGetColorsSaga } from "./colors/colorSaga";
import {
  watcherGetNotesSaga,
  watcherCreateNoteSaga,
  watcherDeleteNoteSaga,
} from "./notes/noteSaga";

function* rootSaga() {
  yield all([
    watcherLoginSaga(),
    watchRegisterSaga(),
    watcherGetColorsSaga(),
    watcherGetNotesSaga(),
    watcherCreateNoteSaga(),
    watcherDeleteNoteSaga(),
  ]);
}

export default rootSaga;
