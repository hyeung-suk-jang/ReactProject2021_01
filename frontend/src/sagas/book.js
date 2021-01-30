import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { BORROW_BOOK_FAILURE, BORROW_BOOK_REQUEST, BORROW_BOOK_SUCCESS, 
    LOAD_BOOKS_FAILURE, LOAD_BOOKS_REQUEST, LOAD_BOOKS_SUCCESS, RETURN_BOOK_FAILURE, RETURN_BOOK_REQUEST, RETURN_BOOK_SUCCESS } from '../reducers/book';
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
        console.error(err)
        yield put({
            type: LOAD_BOOKS_FAILURE,
            error: err.response.data,
        })
    }
}

// function borrowBooksAPI(data) {
//     return axios.get(`https://www.nl.go.kr/NL/search/openApi/search.do?key=${process.env.REACT_APP_NL_API_KEY}&kwd=${data.product}`)
//   } 
// 파이어베이스 스토어에 올려야할 것 같은데;

function* borrowBook(action){
    try{
        // const result = yield call(loadBooksAPI, action.data) 
        yield put({
            type: BORROW_BOOK_SUCCESS,
            data: action.data
        })
    }catch(err){
        console.error(err)
        yield put({
            type: BORROW_BOOK_FAILURE,
            error: err.response.data,
        })
    }
}

// function returnBooksAPI(data) {
//     return axios.get(`https://www.nl.go.kr/NL/search/openApi/search.do?key=${process.env.REACT_APP_NL_API_KEY}&kwd=${data.product}`)
//   } 
// 파이어베이스 스토어에 올려야할 것 같은데;


function* returnBook(action){
    try{
        // const result = yield call(loadBooksAPI, action.data) 
        yield put({
            type: RETURN_BOOK_SUCCESS,
            data: action.data
        })
    }catch(err){
        console.error(err)
        yield put({
            type: RETURN_BOOK_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchLoadBooks(){
    yield takeLatest(LOAD_BOOKS_REQUEST, loadBooks)
}
function* watchBorrowBook(){
    yield takeLatest(BORROW_BOOK_REQUEST, borrowBook)
}
function* watchReturnBook(){
    yield takeLatest(RETURN_BOOK_REQUEST, returnBook)
}
    
export default function* bookSaga() {
  yield all([
    fork(watchLoadBooks),
    fork(watchBorrowBook),
    fork(watchReturnBook),
  ]);
}
