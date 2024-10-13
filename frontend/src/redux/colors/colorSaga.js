import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import {
  createColorSuccess,
  deleteColorSuccess,
  getColorsSuccess,
} from "./colorSlice";
import { CREATE_COLOR, DELETE_COLOR, GET_COLORS } from "../types";

// Get Colors
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

// Create Color
function* createColorSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/api/colors/create/",
      action.payload
    );
    yield put(createColorSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherCreateColorSaga() {
  yield takeLatest(CREATE_COLOR, createColorSaga);
}

// Delete Color
function* deleteColorSaga(action) {
  try {
    const response = yield call(
      axiosInstance.delete,
      `/api/colors/delete/${action.payload}/`
    );
    yield put(deleteColorSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherDeleteColorSaga() {
  yield takeLatest(DELETE_COLOR, deleteColorSaga);
}
