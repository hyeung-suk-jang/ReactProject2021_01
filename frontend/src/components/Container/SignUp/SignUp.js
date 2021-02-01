import React, { useCallback, useState } from "react";
import styles from "./SignUp.module.css";
import useInput from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../../../reducers/user";

const SignUp = ({ history }) => {
  const [username, onChangeUserName] = useInput("");
  const [birth, onChangeBirth] = useInput("");
  const [gender, setGender] = useState(null);
  const onChangeGender = useCallback((e) => {
    setGender(e.target.value);
  });
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const [zipcode, onChangeZipcode] = useInput("");
  const [address, onChangeAddress] = useInput("");
  const [elseAddress, onChangeElseAddress] = useInput("");
  // const [tel_first, setTel_First] = useState(null);
  // const onChangeTel_First = useCallback((e) => {
  //   console.log(e.target.value);
  //   setTel_First(e.target.value);
  // }, []);
  const [tel_first, onChangeTel_First] = useInput(null);
  const [tel_middle, onChangeTel_Middle] = useInput("");
  const [tel_last, onChangeTel_Last] = useInput("");
  //   let fullPhone = tel_first + tel_middle + tel_last
  const fullTel = (tel_first, tel_middle, tel_last) =>
    tel_first + tel_middle + tel_last;
  const [email, onChangeEmail] = useInput("");
  const [domain, onChangeDomain] = useInput(null);
  // const [domain, setDomain] = useState(null)
  // const onChangeDomain = useCallback((e) =>{
  //   setDomain(e.target.value)
  // })
  //   let fullEmail = email+'@' + domain
  const fullEmail = (email, domain) => email + "@" + domain;
  const [userType, onChangeUserType] = useInput(false);
  const [sms, onChangeSms] = useInput(false);

  const dispatch = useDispatch();
  const { isLoggedInDone } = useSelector((state) => state.user);

  if (isLoggedInDone) {
    alert("이미 로그인 하셨습니다");
    history.goBack();
  }

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          usermail: fullEmail(email, domain),
          password,
          username,
        },
      });
      history.push("/");
    },
    [
      username,
      birth,
      gender,
      password,
      passwordCheck,
      zipcode,
      address,
      elseAddress,
      fullTel,
      fullEmail,
      userType,
      sms,
    ]
  );
  // let modal;

  // if (open !== null) {
  //   if (value.idChecked !== null) {
  //     if (idAvailable) {
  //       modal = (
  //         <Modal show={open} onClick={closeModal}>
  //           사용할 수 있는 아이디 입니다
  //         </Modal>
  //       );
  //     } else if (
  //       submitErr !== true &&
  //       idAvailable !== true &&
  //       value.idChecked === true
  //     ) {
  //       modal = (
  //         <Modal show={open} onClick={closeModal}>
  //           이미 존재하는 아이디 입니다
  //         </Modal>
  //       );
  //     }
  //   }

  //   if (submitErr !== null && submitClicked) {
  //     modal = (
  //       <Modal show={open} onClick={closeModal}>
  //         양식을 전부 기입해주세요 <br />
  //         (바르지 않은 입력값은 자동으로 삭제됩니다)
  //       </Modal>
  //     );
  //   }
  // }

  return (
    <>
      <h3 className={styles.title}>회원가입</h3>
      <div className={styles.signUp}>
        {/*아이디 중복체크 modal*/}
        {/* {modal} */}
        <form onSubmit={onSubmit}>
          {/*성명*/}
          <div className={styles.wrapper}>
            <span>*성명</span>
            <div className={styles.input}>
              <input
                type="text"
                name="name"
                value={username}
                onChange={onChangeUserName}
                required
              />
            </div>
          </div>
          {/*생년월일*/}
          <div className={styles.wrapper}>
            <span>*생년월일</span>
            <div className={styles.input}>
              <input
                type="text"
                name="birth"
                value={birth}
                onChange={onChangeBirth}
                required
              />
            </div>
          </div>
          {/*성별(선택)*/}
          <div className={styles.wrapper}>
            <span>*성별(선택)</span>
            <div className={styles.input}>
              <label htmlFor="male">남</label>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={onChangeGender}
              />
              <label htmlFor="female">여</label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={onChangeGender}
              />
              <label htmlFor="reject">미동의</label>
              <input
                id="reject"
                type="radio"
                name="gender"
                value="reject"
                onChange={onChangeGender}
              />
            </div>
          </div>
          {/*비밀번호*/}
          <div className={styles.wrapper}>
            <span>*비밀번호</span>
            <div className={styles.input}>
              <input
                type="password"
                name="password"
                value={password}
                pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{10,16}"
                onChange={onChangePassword}
                autoComplete="new-password"
                required
              />
              <span>
                *비밀번호는 10~16자리의 영문/숫자 또는 영문/숫자/특수문자[
                !@#$%^&*()]혼용
              </span>
            </div>
          </div>
          {/*비밀번호 확인*/}
          <div className={styles.wrapper}>
            <span>*비밀번호 확인</span>
            <div className={styles.input}>
              <input
                type="password"
                name="passwordCheck"
                value={passwordCheck}
                pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{10,16}"
                onChange={onChangePasswordCheck}
                autoComplete="new-password"
                required
              />
              {passwordError && (
                <span style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </span>
              )}
            </div>
          </div>
          {/*우편번호*/}
          <div className={styles.wrapper}>
            <span>우편번호</span>
            <div className={styles.input}>
              {" "}
              <input
                type="text"
                name="address"
                value={zipcode}
                onChange={onChangeZipcode}
              />
              <button type="button">도로명주소 찾기</button>
            </div>
          </div>
          {/*주소*/}
          <div className={styles.wrapper}>
            <span>주소</span>
            <div className={styles.input}>
              <input
                type="text"
                name="address_detail"
                size="50"
                value={address}
                onChange={onChangeAddress}
              />
              <input
                type="text"
                name="address_detail2"
                size="50"
                value={elseAddress}
                onChange={onChangeElseAddress}
              />
              <span>나머지 주소를 입력하세요.</span>
            </div>
          </div>
          {/*연락처*/}
          <div className={styles.wrapper}>
            <span>*연락처</span>
            <div className={styles.input}>
              <select name="tel_first" required onChange={onChangeTel_First}>
                <option value={null}>선택</option>
                <option value="02">02</option>
                <option value="032">032</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="012">012</option>
              </select>
              -
              <input
                type="tel"
                name="tel_middle"
                value={tel_middle}
                pattern="[0-9]{3,4}"
                size="4"
                maxLength="4"
                onChange={onChangeTel_Middle}
                required
              />
              -
              <input
                type="tel"
                name="tel_last"
                value={tel_last}
                pattern="[0-9]{3,4}"
                size="4"
                maxLength="4"
                onChange={onChangeTel_Last}
                required
              />
              <span>
                *전화번호 또는 휴대전화번호 중 하나를 입력하셔야 합니다.
              </span>
              <div className="tel_notification">
                <span>
                  *국가상호대차서비스 선택시 휴대폰번호 입력 후 인증을 수행해야
                  합니다.
                </span>
                <button type="button" name="tel_verification">
                  인증번호 발송
                </button>
                <br />
                <span>
                  인증번호는 카카오톡 알림톡으로 발송되며, 카카오톡이 설치되지
                  않은 휴대폰의 경우 일반 문자메세지(SMS)로 발송됩니다.
                </span>
              </div>
            </div>
          </div>
          {/*이메일 주소*/}
          <div className={styles.wrapper}>
            <span>*이메일 주소</span>
            <div className={styles.input}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChangeEmail}
                required
              />
              @
              <select name="emailDomain" onChange={onChangeDomain} required>
                <option value={null}>선택하세요</option>
                <option value={"naver.com"}>naver.com</option>
              </select>
            </div>
          </div>
          {/*회원유형*/}
          <div className={styles.wrapper}>
            <span>*회원 유형</span>
            <div className={styles.input}>
              <input
                id="general"
                type="radio"
                name="userType"
                value="general"
                onChange={onChangeUserType}
              />
              <label htmlFor="general">일반회원</label>
              <span className="public-officer">
                <input
                  id="public"
                  type="radio"
                  name="userType"
                  value="public"
                  onChange={onChangeUserType}
                />
                <label htmlFor="public">정책회원</label>
                <span>
                  ({" "}
                  <input
                    id="individual"
                    type="radio"
                    name="userType"
                    value="public-individual"
                    onChange={onChangeUserType}
                  />
                  <label htmlFor="individual">공무원</label>
                  <input
                    type="radio"
                    name="userType"
                    value="public-institution"
                    onChange={onChangeUserType}
                  />
                  <label htmlFor="institution">
                    공공기관(일부 정부 부처 포함)
                  </label>
                  )
                </span>
              </span>
            </div>
          </div>
          {/* SMS통보 여부(선택) */}
          <div className={styles.wrapper}>
            <span>*SMS 통보여부(선택)</span>
            <div className={styles.input}>
              <input
                id="sms"
                type="checkbox"
                name="sms"
                onChange={onChangeSms}
              />
              <label htmlFor="sms">SMS통보 신청</label>
              <span>*신청결과를 휴대전화번호로 알려드립니다</span>
            </div>
          </div>
          {/* <input
            type='submit'
            value='회원가입신청'
            style={{border:'1px solid #1b1414', marginTop: '12px', fontSize:'15px', padding:'0 10px'}}
          /> */}
          <button
            style={{
              border: "1px solid #000",
              marginTop: "12px",
              fontSize: "15px",
              padding: "0 10px",
            }}
            type="submit"
          >
            회원가입신청
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
