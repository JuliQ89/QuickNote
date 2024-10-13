import { all } from "redux-saga/effects";

import { watcherLoginSaga, watchRegisterSaga } from "./auth/authSaga";
import {
  watcherGetColorsSaga,
  watcherCreateColorSaga,
  watcherDeleteColorSaga,
} from "./colors/colorSaga";
import {
  watcherGetNotesSaga,
  watcherCreateNoteSaga,
  watcherDeleteNoteSaga,
  watcherUpdateNoteSaga,
} from "./notes/noteSaga";
import { watcherGetModeSaga, watcherUpdateModeSaga } from "./mode/modeSaga";

function* rootSaga() {
  yield all([
    watcherLoginSaga(),
    watchRegisterSaga(),
    watcherGetColorsSaga(),
    watcherCreateColorSaga(),
    watcherDeleteColorSaga(),
    watcherGetNotesSaga(),
    watcherCreateNoteSaga(),
    watcherDeleteNoteSaga(),
    watcherUpdateNoteSaga(),
    watcherGetModeSaga(),
    watcherUpdateModeSaga(),
  ]);
}

export default rootSaga;
