import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { xml2json } from 'xml-js';
import Books from './Books';
// http://seoji.nl.go.kr/landingPage/SearchApi.do?page_no=1&title=%EC%95%84%EB%B2%84%EC%A7%80&start_publish_date=20170207&end_publish_date=20170406

const Detail = () => {
    const {product} = useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
    useEffect(()=>{
        const fetchBook = async () => {
            //setLoading(true)
            try {
              await axios.get(`https://www.nl.go.kr/NL/search/openApi/search.do?key=${process.env.REACT_APP_NL_API_KEY}&kwd=${product}`)
              .then(function(response){
                setData(JSON.parse(xml2json(response.data, { compact: true, spaces: 4 })));
              });
              
            } catch (e) {
              console.error(e);
            }
            setLoading(true);

        }
          fetchBook();
    },[])


    if(!loading){
        return(
            <h1>Loading......</h1>
        )
    }else{
        console.log(loading)
        return (
            <div>
                {data.root.result.item.map((i)=><Books detail={i} key={i.id._text}/>)}
            </div>
        )
    }
}

export default Detail
