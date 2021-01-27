import axios from "axios";
import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";
import { authService, firebaseInstance } from "../firebase/fb";

import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  ID_CHECK_REQUEST,
  // ID_CHECK_FAILURE,
  // ID_CHECK_AVAILABLE,
  // ID_CHECK_EXISTING,
} from "../reducers/user";

function loginAPI(data) {
  return authService.signInWithEmailAndPassword(data.email, data.password);
}

// function getUserID() {
//   try{
// //return 유저아이디목록
//  return axios.get('https://nllogin-12589-default-rtdb.firebaseio.com/userID.json');
//   }catch(err){
//     yield put({
//       type: ID_CHECK_FAILURE,
//       err: err.response.data,
//     })
//   }
// }

// function* signUpIdCheck(action) {
//   //회원가입시 아이디 중복체크하는 함수
//   try {
//     const res = yield call(getUserID,undefined);
//     const userId = Object.keys(res.data);
//     return userId;
//   } catch (err) {
//     yield put({
//       type: ID_CHECK_FAILURE,
//       error: err.response.data,
//     });
//   }finally{
//     if(Object.keys(userId).indexOf(action.ID) > -1){
//       yield put({
//         type: ID_CHECK_AVAILABLE,
//       })
//      }else{
//       yield put({
//         type: ID_CHECK_EXISTING,
//       });
//      }
//   }
// }

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

// function* watchIdCheck() {
//   yield takeLatest(ID_CHECK_REQUEST, signUpIdCheck);
// }

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut) /*fork(watchIdCheck)*/]);
}
