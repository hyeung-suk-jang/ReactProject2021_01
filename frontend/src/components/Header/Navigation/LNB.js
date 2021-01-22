import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../../firebase/fb";

const LNB = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  const onLogOutClick = () => {
    authService.signOut()
    // history.push('/')
  };

  return (
    <nav className="lnb">
      <ul className="">
        {isLoggedIn ? (
          <>
          <li>
            <button onClick={onLogOutClick}>
              LogOut
            </button>
          </li>
            <li>
              <Link to="/">
                <a>Dummy님(로그아웃)</a>
              </Link>
            </li>
            <li>
              <a>회원정보수정(새창)</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <a>로그인</a>
              </Link>
            </li>
            <li>
              <a href="">회원가입</a>
            </li>
          </>
        )}{" "}
        <li>
          <a href="">내서재</a>
        </li>
        <li>
          <a href="">바구니</a>
        </li>
        <li>
          <a href="">ENGLISH</a>
        </li>
      </ul>
    </nav>
  );
};

export default LNB;
