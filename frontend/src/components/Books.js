import React from 'react'

const Books = ({detail}) => {
    return (
        <div style={{border:'1px solid red'}}>
            <h1>title: {detail.title_info._cdata}</h1>
            <h1>지은이: {detail.author_info._cdata}</h1>
            <h1>연도: {detail.pub_year_info._text}</h1>
            <h1>비치일: {detail.reg_date._text}</h1>
            <h1>출판사: {detail.pub_info._cdata}</h1>
            <h1>청구기호: {detail.call_no._cdata}</h1>
            <h1>자료 이용장소: {detail.place_info._text}</h1>
        </div>
        // <div style={{border:'1px solid red', display:'flex'}}>
        //     <div className="left" style={{float:'left'}}>
        //     <h1>title: {detail.title}</h1>
        //     <h1>지은이: {detail.author}</h1>
        //     <h1>연도: {detail.year}</h1>
        //     <h1>비치일: {detail.reg_date}</h1>
        //     <h1>출판사: {detail.pub}</h1>
        //     <h1>청구기호: {detail.call}</h1>
        //     <h1>자료 이용장소: {detail.place}</h1>
        //     </div>
        //     <div className="right" style={{float:'right', margin: '10% 1% 0 30%'}}>
        //         <p style={{border: '1px solid black'}}>대출</p>
        //     </div>
        // </div>
    )
}

export default Books
