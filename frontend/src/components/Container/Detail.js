import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Books from "./Books";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_BOOKS_REQUEST } from "../../reducers/book";

const Detail = () => {
  console.log("DETAIL!!!!!");
  const dispatch = useDispatch();
  const { product } = useParams();
  const { books, loadBooksLoading } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch({
      type: LOAD_BOOKS_REQUEST,
      data: {
        product,
      },
    });
  }, [product]);

  if (loadBooksLoading) {
    return <h1>Loading......</h1>;
  }
  console.log("Books!", books);
  return (
    <div>
      {books.map((i) => (
        <Books detail={i} key={i.id._text} />
      ))}
    </div>
  );
};

export default Detail;
