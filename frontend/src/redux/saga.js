import { all } from "redux-saga/effects";

import { colorSaga } from "./sagas/colorSagas";
import { tokenSaga } from "./sagas/tokenSagas";

function* rootSaga() {
  yield all([colorSaga(), tokenSaga()]);
}

export default rootSaga;
