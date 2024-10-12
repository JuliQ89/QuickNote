import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import { getColorsSuccess } from "./colorSlice";
import { GET_COLORS } from "../types";

function* getColorsSaga() {
  try {
    const response = yield call(axiosInstance.get, "/api/colors/");
    yield put(getColorsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherGetColorsSaga() {
  yield takeLatest(GET_COLORS, getColorsSaga);
}
