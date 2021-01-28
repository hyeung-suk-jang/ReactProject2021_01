import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { LOAD_BOOKS_FAILURE, LOAD_BOOKS_REQUEST, LOAD_BOOKS_SUCCESS } from '../reducers/book';
import { xml2json } from 'xml-js';

function loadBooksAPI(data) {
    return axios.get(`https://www.nl.go.kr/NL/search/openApi/search.do?key=${process.env.REACT_APP_NL_API_KEY}&kwd=${data.product}`)
  }

function* loadBooks(action){
    try{
        const result = yield call(loadBooksAPI, action.data) 
        yield put({
            type: LOAD_BOOKS_SUCCESS,
            data: JSON.parse(xml2json(result.data, { compact: true, spaces: 4 }))
        })
    }catch(err){
        yield put({
            type: LOAD_BOOKS_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchLoadBooks(){
    yield takeLatest(LOAD_BOOKS_REQUEST, loadBooks)
}
    
export default function* bookSaga() {
  yield all([
    fork(watchLoadBooks),
  ]);
}
