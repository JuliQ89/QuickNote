import { call, put, takeLatest } from "redux-saga/effects";
import { axiosInstance } from "../../utils/axios";

import {
  getNotesSuccess,
  createNoteSuccess,
  deleteNoteSuccess,
} from "./noteSlice";
import { CREATE_NOTE, DELETE_NOTE, GET_NOTES } from "../types";

// Get Notes
function* getNotesSaga() {
  try {
    const response = yield call(axiosInstance.get, "/api/notes/");
    yield put(getNotesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherGetNotesSaga() {
  yield takeLatest(GET_NOTES, getNotesSaga);
}

// Create Note
function* createNoteSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/api/notes/create/",
      action.payload
    );
    yield put(createNoteSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherCreateNoteSaga() {
  yield takeLatest(CREATE_NOTE, createNoteSaga);
}

// Delete Note
function* deleteNoteSaga(action) {
  try {
    const response = yield call(
      axiosInstance.delete,
      `/api/notes/delete/${action.payload}/`
    );
    yield put(deleteNoteSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherDeleteNoteSaga() {
  yield takeLatest(DELETE_NOTE, deleteNoteSaga);
}