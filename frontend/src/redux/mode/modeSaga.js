import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import { setModeSuccess } from "./modeSlice";
import { GET_MODE, UPDATE_MODE } from "../types";

// Get Mode
function* getModeSaga() {
  try {
    const response = yield call(axiosInstance.get, "/api/mode/");
    yield put(setModeSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherGetModeSaga() {
  yield takeLatest(GET_MODE, getModeSaga);
}

// Update Mode
function* updateModeSaga(action) {
  try {
    const response = yield call(
      axiosInstance.put,
      `/api/mode/update/${action.payload.id}/`,
      action.payload
    );
    yield put(setModeSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherUpdateModeSaga() {
  yield takeLatest(UPDATE_MODE, updateModeSaga);
}
