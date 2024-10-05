import { put, takeEvery } from "redux-saga/effects";
import { GET_COLORS, SET_COLORS } from "../types";

import { axiosInstance } from "../../utils/constants";

function* getColors() {
  let response = yield axiosInstance.get("/api/colors/");
  yield put({ type: SET_COLORS, data: response.data });
}

export function* colorSaga() {
  yield takeEvery(GET_COLORS, getColors);
}
