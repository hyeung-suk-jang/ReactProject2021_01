// import axios from 'axios';
import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import { authService, firebaseInstance } from "../firebase/fb";

import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,

} from '../reducers/user';

function loginAPI(data) {
  return authService.signInWithEmailAndPassword(data.email, data.password);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data) //call(함수 이름, 매개변수)
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.user.uid,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logout() {
  try {
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}



function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
}
