import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import { setWhiteBoardSuccess } from "./whiteboardSlice";
import { GET_WHITEBOARD, UPDATE_WHITEBOARD } from "../types";

// Get WhiteBoard
function* getWhiteBoardSaga() {
  try {
    const response = yield call(axiosInstance.get, "/api/white_board/");
    yield put(setWhiteBoardSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherGetWhiteBoardSaga() {
  yield takeLatest(GET_WHITEBOARD, getWhiteBoardSaga);
}

// Update WhiteBoard
function* updateWhiteBoardSaga(action) {
  try {
    const response = yield call(
      axiosInstance.put,
      `/api/white_board/update/${action.payload.id}/`,
      action.payload
    );
    yield put(setWhiteBoardSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherUpdateWhiteBoardSaga() {
  yield takeLatest(UPDATE_WHITEBOARD, updateWhiteBoardSaga);
}
