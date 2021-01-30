import axios from "axios";
import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  call,
  takeEvery,
} from "redux-saga/effects";
import { authService, firebaseInstance } from "../firebase/fb";

import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  ID_CHECK_REQUEST,
  ID_CHECK_FAILURE,
  ID_CHECK_AVAILABLE,
  ID_CHECK_EXISTING,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

function loginAPI(data) {
  return authService.signInWithEmailAndPassword(
    data.email,
    data.password,
    data.userID
  );
}

async function signUpAPI(data) {
  let userID;
  try {
    const cred = await authService.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    cred.user.updateProfile({
      displayName: data.userID,
    });
    const userId = {
      [data.userID]: data.userID,
    };

    const addResult = await axios.post(
      "https://nllogin-12589-default-rtdb.firebaseio.com/userID.json",
      userId
    );

    userID = addResult && authService.currentUser.displayName;

    return userID;
  } catch (err) {
    console.log(err);
  }
}

async function getUserID(ID) {
  let sameId;
  try {
    //return 유저아이디목록
    const userId = await axios.get(
      "https://nllogin-12589-default-rtdb.firebaseio.com/userID.json"
    );

    sameId = Object.keys(userId.data).filter((id) => {
      return id === ID;
    });
  } catch (err) {
    console.log(err);
  }
  return sameId.length === 0 ? true : false;
}

function* signUpIdCheck(action) {
  //회원가입시 아이디 중복체크하는 함수

  try {
    const result = yield call(getUserID, action.ID);
    result
      ? yield put({
          type: ID_CHECK_AVAILABLE,
        })
      : yield put({
          type: ID_CHECK_EXISTING,
        });
  } catch (err) {
    yield put({
      type: ID_CHECK_FAILURE,
      error: err.response.data,
    });
  }
}

function* signUp(action) {
  const signUpResult = yield call(signUpAPI, action.data);

  try {
    yield put({
      type: SIGN_UP_SUCCESS,
      userID: authService.currentUser.displayName,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data); //call(함수 이름, 매개변수)
    console.log("Login Result", result);
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

function logoutAPI() {
  return authService.signOut();
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

function* watchIdCheck() {
  yield takeLatest(ID_CHECK_REQUEST, signUpIdCheck);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchIdCheck),
    fork(watchSignUp),
  ]);
}
