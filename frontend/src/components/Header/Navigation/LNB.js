import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../../firebase/fb";

const LNB = ({ isLoggedIn, history }) => {
  console.log(isLoggedIn);
  const onLogOutClick = () => {
    authService.signOut();
    alert("로그아웃 하시겠습니까?");
    authService.signOut();
  };

  return (
    <nav className="lnb">
      <ul className="">
        {isLoggedIn ? (
          <>
            <li>
              <button onClick={onLogOutClick}>LogOut</button>
            </li>
            <li>
              <Link to="/">
                <span>Dummy님(로그아웃)</span>
              </Link>
            </li>
            <li>
              <span>회원정보수정(새창)</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <span>로그인</span>
              </Link>
            </li>
            <li>
              <span>회원가입</span>
            </li>
          </>
        )}{" "}
        <li>
          <span>내서재</span>
        </li>
        <li>
          <span>바구니</span>
        </li>
        <li>
          <span>ENGLISH</span>
        </li>
      </ul>
    </nav>
  );
};

export default LNB;
