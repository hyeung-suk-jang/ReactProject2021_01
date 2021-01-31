import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RETURN_BOOK_REQUEST } from '../../reducers/book';

const MyBooks = ({title, id}) => {
    const {isLoggedInDone} = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const onClickReturn = useCallback(() =>{
        if (!isLoggedInDone) {
          alert("로그인 해주세요");
          history.push('/login')
        } else {
          dispatch({
            type: RETURN_BOOK_REQUEST,
            data: {
              id: id
            },
          });
        }
    })

    return (
        <div className='mylib' >
            <span className='title txt_black'>{title}</span>
            <div className="double_space"></div>
            <button
          className='return_btn'
            onClick={onClickReturn}
          >
            반납하기
          </button>

        </div>
    )
}

export default MyBooks
