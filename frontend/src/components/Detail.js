import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { xml2json } from 'xml-js';

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
                console.log(response.data)
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
                나왔다!
                {console.log(data)}
                {console.log('Loading', loading)}
                <h1>{console.log(data.root.result)}</h1>
            </div>
        )
    }
}

export default Detail
