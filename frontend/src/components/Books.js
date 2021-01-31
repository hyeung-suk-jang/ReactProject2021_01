import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BORROW_BOOK_REQUEST, RETURN_BOOK_REQUEST } from '../reducers/book'

const Books = ({detail}) => {
  const history = useHistory()
    const dispatch = useDispatch()
    const {isLoggedInDone} = useSelector(state => state.user)
    const {borrowBooks} = useSelector(state => state.book)
    const onClickBorrow = useCallback(() =>{
        if (!isLoggedInDone) {
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
        if (!isLoggedInDone) {
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
      <div className='result' >
        <span className='title txt_black'><strong>{detail.title_info._cdata}</strong></span>
        <div className="double_space"></div>
        <span className='author detail_info'>{detail.author_info._cdata} | </span>
        <span className='pub_info detail_info'>{detail.pub_info._cdata} | </span>
        <span className='pub_year_info detail_info'>{detail.pub_year_info._text} | </span>
        <span className='reg_date detail_info'>비치일: {detail.reg_date._text} | </span>
        <span className='call_no detail_info'>청구기호: {detail.call_no._cdata}</span>
        <div className="row_space" style={{height:'9px'}}></div>
        <span className='txt_black useinfo'>자료 이용장소:</span><span className='txt_orange place_info'> {detail.place_info._text}</span>
        <div className="double_space"></div>
        {borrowBooks.find((v) => v.id === detail.id._text) ? (
          <button
          className='return_btn'
            onClick={onClickReturn}
          >
            반납하기
          </button>
        ) : (
          <button
          className='borrow_btn'
          onClick={onClickBorrow}
          >
            대출하기
          </button>
        )}
      </div>
    );
}

export default Books
