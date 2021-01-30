import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BORROW_BOOK_REQUEST, RETURN_BOOK_REQUEST } from '../reducers/book'

const Books = ({detail}) => {
  const history = useHistory()
    const dispatch = useDispatch()
    const {me} = useSelector(state => state.user)
    const {borrowBooks} = useSelector(state => state.book)
    const onClickBorrow = useCallback(() =>{
        if (!me) {
          alert("로그인 해주세요");
          history.push('/login')
        } else {
          dispatch({
            type: BORROW_BOOK_REQUEST,
            data: {
              id: detail.id._text,
              title: detail.title_info._cdata
            },
          });
        }
    })
    const onClickReturn = useCallback(() =>{
        if (!me) {
          alert("로그인 해주세요");
          history.push('/login')
        } else {
          dispatch({
            type: RETURN_BOOK_REQUEST,
            data: {
              id: detail.id._text,
            },
          });
        }
    })
    return (
      <div style={{ border: "1px solid red" }}>
        <h1>title: {detail.title_info._cdata}</h1>
        <h1>지은이: {detail.author_info._cdata}</h1>
        <h1>연도: {detail.pub_year_info._text}</h1>
        <h1>비치일: {detail.reg_date._text}</h1>
        <h1>출판사: {detail.pub_info._cdata}</h1>
        <h1>청구기호: {detail.call_no._cdata}</h1>
        <h1>자료 이용장소: {detail.place_info._text}</h1>
        {borrowBooks.find((v) => v.id === detail.id._text) ? (
          <button
            style={{
              border: "1px solid black",
              fontSize: "15px",
              background: "tomato",
              color: "#fff",
            }}
            onClick={onClickReturn}
          >
            반납하기
          </button>
        ) : (
          <button
            style={{ border: "1px solid black", fontSize: "15px" }}
            onClick={onClickBorrow}
          >
            대출하기
          </button>
        )}
      </div>
    );
}

export default Books
