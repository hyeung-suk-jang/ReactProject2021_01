import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MyBooks from './Header/MyBooks'

const MyLibrary = () => {
    const history = useHistory()
    const {me} = useSelector(state => state.user)
    const {borrowBooks} = useSelector(state =>state.book)

    if(!me){
        alert('로그인해주세요')
        history.goBack()
    }
    console.log(borrowBooks)
    return (
        <div>
            <h1>내 서제</h1>
            {borrowBooks.map(b => <MyBooks title={b.title} key={b.id}/>)}
            
        </div>
    )
}

export default MyLibrary
