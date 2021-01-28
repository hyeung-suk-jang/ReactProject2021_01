import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import styles from "./SignUp.module.css";
import useSignUp from "../../hooks/SignUp/useSignUp";
import useModal from "../../hooks/useModal";
import Modal from "../UI/Modal";

const SignUp = () => {
  const { idAvailable } = useSelector((state) => state.user);
  const [open, openModal, closeModal] = useModal(null);
  const [value, setValue, setIdAvailable] = useSignUp("");

  const onIdCheck = () => {
    setIdAvailable();
    openModal();
  };

  return (
    <div className={styles.signUp}>
      {idAvailable !== null && open !== null ? (
        <Modal idAvailable={idAvailable} show={open} onClick={closeModal} />
      ) : null}
      <form>
        {/*성명*/}
        <div className={styles.wrapper}>
          <span>*성명</span>
          <div className={styles.input}>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={setValue}
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
              value={value.birth}
              onChange={setValue}
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
              onChange={setValue}
            />
            <label htmlFor="female">여</label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={setValue}
            />
            <label htmlFor="reject">미동의</label>
            <input
              id="reject"
              type="radio"
              name="gender"
              value="reject"
              onChange={setValue}
            />
          </div>
        </div>
        {/*회원 ID */}
        <div className={styles.wrapper}>
          <span>*회원 ID</span>
          <div className={styles.input}>
            <input
              type="text"
              name="ID"
              value={value.ID}
              pattern="(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,12}"
              onChange={setValue}
              required
            />
            <button
              type="button"
              onClick={onIdCheck}
              disabled={idAvailable ? true : false}
            >
              중복확인
            </button>
            <span>*아이디는 6~12자리의 영문 또는 숫자 혼용, 특수문자 제외</span>
          </div>
        </div>
        {/*비밀번호*/}
        <div className={styles.wrapper}>
          <span>*비밀번호</span>
          <div className={styles.input}>
            <input
              type="password"
              name="password"
              value={value.password}
              pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{10,16}"
              onChange={setValue}
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
              value={value.passwordCheck}
              pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{10,16}"
              onChange={setValue}
              required
            />
          </div>
        </div>
        {/*우편번호*/}
        <div className={styles.wrapper}>
          <span>*우편번호</span>
          <div className={styles.input}>
            {" "}
            <input
              type="text"
              name="address"
              value={value.address}
              onChange={setValue}
              required
            />
            <button type="button">도로명주소 찾기</button>
          </div>
        </div>
        {/*주소*/}
        <div className={styles.wrapper}>
          <span>*주소</span>
          <div className={styles.input}>
            <input
              type="text"
              name="address_detail"
              size="50"
              value={value.address_detail}
              onChange={setValue}
              required
            />
            <input
              type="text"
              name="address_detail2"
              size="50"
              value={value.address_detail2}
              onChange={setValue}
              required
            />
            <span>*나머지 주소를 입력하세요.</span>
          </div>
        </div>
        {/*연락처*/}
        <div className={styles.wrapper}>
          <span>*연락처</span>
          <div className={styles.input}>
            <select name="tel_first" required onChange={setValue}>
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
              value={value.tel_middle}
              /*pattern="" */
              size="4"
              onChange={setValue}
              required
            />
            -
            <input
              type="tel"
              name="tel_last"
              value={value.tel_last}
              /*pattern="" */
              size="4"
              onChange={setValue}
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
              value={value.email}
              onChange={setValue}
              required
            />
            @
            <select name="emailDomain" onChange={setValue} required>
              <option value={null}>선택하세요</option>
              <option value="naver">naver.com</option>
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
              onChange={setValue}
            />
            <label htmlFor="general">일반회원</label>
            <span className="public-officer">
              <input
                id="public"
                type="radio"
                name="userType"
                value="public"
                onChange={setValue}
              />
              <label htmlFor="public">정책회원</label>
              <span>
                ({" "}
                <input
                  id="individual"
                  type="radio"
                  name="userType"
                  value="public-individual"
                  onChange={setValue}
                />
                <label htmlFor="individual">공무원</label>
                <input
                  type="radio"
                  name="userType"
                  value="public-institution"
                  onChange={setValue}
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
            <input id="sms" type="checkbox" name="sms" onChange={setValue} />
            <label htmlFor="sms">SMS통보 신청</label>
            <span>*신청결과를 휴대전화번호로 알려드립니다</span>
          </div>
        </div>
        <button className={styles.submit} type="submit">
          회원가입신청
        </button>
      </form>
    </div>
  );
};

export default SignUp;
