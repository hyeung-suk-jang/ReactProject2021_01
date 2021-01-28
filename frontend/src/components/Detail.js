import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Books from './Books';
import { useDispatch, useSelector } from 'react-redux';
import {LOAD_BOOKS_REQUEST } from '../reducers/book'
// http://seoji.nl.go.kr/landingPage/SearchApi.do?page_no=1&title=%EC%95%84%EB%B2%84%EC%A7%80&start_publish_date=20170207&end_publish_date=20170406

const Detail = () => {
    const dispatch = useDispatch()
    const {product} = useParams()
    const { books, loadBooksLoading } = useSelector((state) => state.book)
    useEffect(()=>{
        dispatch({
            type: LOAD_BOOKS_REQUEST,
            data: {
              product
            },
          });
    },[product])

    if(loadBooksLoading){
        return(
            <h1>Loading......</h1>
        )
    }
        console.log('Books!',books)
        return (
            <div>
                {books.map((i)=><Books detail={i} key={i.id._text}/>)}
            </div>
            // <div>
            //     {dummy.root.result.item.map((i)=><Books detail={i} key={i.id}/>)}
            // </div>
        )
    }


export default Detail
