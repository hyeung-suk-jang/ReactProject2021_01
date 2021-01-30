import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MyBooks from "./Header/MyBooks";

const MyLibrary = ({ me }) => {
  const history = useHistory();
  const { borrowBooks } = useSelector((state) => state.book);

  if (!me) {
    alert("로그인해주세요");
    history.goBack();
  }
  return (
    <div>
      <h1>내 서재</h1>
      {borrowBooks.map((b) => (
        <MyBooks title={b.title} key={b.id} />
      ))}
    </div>
  );
};

export default MyLibrary;
