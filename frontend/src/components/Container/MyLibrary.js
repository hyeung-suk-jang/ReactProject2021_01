import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MyBooks from "../Header/MyBooks";

const MyLibrary = () => {
  const history = useHistory();
  const { isLoggedInDone } = useSelector((state) => state.user);
  const { borrowBooks } = useSelector((state) => state.book);

  if (!isLoggedInDone) {
    alert("로그인해주세요");
    history.goBack();
  }

  return (
    <div>
      <h1>내 서재</h1>

      {borrowBooks.length === 0 ? (
        <div>대여한 책이 없습니다.</div>
      ) : (
        borrowBooks.map((b) => <MyBooks title={b.title} key={b.id} id={b.id} />)
      )}
    </div>
  );
};

export default MyLibrary;
