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
import {
  watcherGetWhiteBoardSaga,
  watcherUpdateWhiteBoardSaga,
} from "./whiteboard/whiteboardSaga";

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
    watcherGetWhiteBoardSaga(),
    watcherUpdateWhiteBoardSaga(),
  ]);
}

export default rootSaga;
