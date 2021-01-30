import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import bookSaga from './book'
export default function* rootSaga() {
  yield all([fork(userSaga),fork(bookSaga)]);
}
