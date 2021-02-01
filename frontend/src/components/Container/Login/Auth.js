import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import { LOG_IN_REQUEST } from "../../../reducers/user";

const Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  if (me) {
    history.goBack();
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email: email, password: password },
    });
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div id="container" className="container">
      <div className="container_inner">
        <div className="menu">
          <h2>회원서비스</h2>
          <ul>
            <li>
              <a href="">회원가입</a>
            </li>
            <li>
              <a href="">회원정보수정</a>
            </li>
            <li>
              <a href="">내서재</a>
            </li>
          </ul>
        </div>

        <div className="sub_cont">
          <div className="tit">
            <h3>로그인</h3>
            <span>
              <input type="radio" checked="checked" />
              <label>통합회원</label>
            </span>
            <span>
              <input type="radio" />
              <label>기관회원</label>
            </span>
          </div>
          <form onSubmit={onSubmit}>
            <div className="user_id">
              <input
                name="email"
                type="text"
                placeholder="이메일"
                required
                value={email}
                onChange={onChangeEmail}
              />
            </div>
            <div className="password">
              <input
                name="password"
                type="password"
                placeholder="비밀번호"
                required
                value={password}
                onChange={onChangePassword}
              />
            </div>
            <span className="save">
              <input type="checkbox" />
              <label>아이디저장</label>
            </span>

            <div className="login_btn">
              <input type="submit" value="로그인" />
              {error}
            </div>
            <div className="user">
              <a href="">아이디 찾기</a>
              <a href="">비밀번호 찾기</a>
              <a href="">회원가입</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
