import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOG_OUT_REQUEST } from "../../../reducers/user";
import { authService } from "../../../firebase/fb";

const LNB = ({ me }) => {
  const dispatch = useDispatch();
  const onLogOutClick = () => {
    alert("로그아웃 하시겠습니까?");
    authService.signOut();
    location.reload()
    dispatch({ type: LOG_OUT_REQUEST });
  };

  return (
    <nav className="lnb">
      <ul className="">
        {me ? (
          <>
            <li>
              <button onClick={onLogOutClick}>LogOut</button>
            </li>
            <li>
              <Link to="/">
                <span>{me}님</span>
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
              <Link to="/signup">
                <span>회원가입</span>
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to="/mylib">
            <span>내서재</span>
          </Link>
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
