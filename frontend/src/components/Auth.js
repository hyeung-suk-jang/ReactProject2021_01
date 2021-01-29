import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, use } from "react-router-dom";
import useInput from "../hooks/useInput";
import { LOG_IN_REQUEST } from "../reducers/user";

const Auth = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user)
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");


  if(me){
    history.goBack();
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOG_IN_REQUEST, data:{email:email, password:password} });
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeEmail}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChangePassword}
        />
        <input type="submit" value={newAccount ? "Create Account" : "login"} />
        {error}
      </form>
      <span onClick={toggleAccount}> {newAccount ? "Login" : "Sigin in"}</span>
    </div>
  );
};

export default Auth;
