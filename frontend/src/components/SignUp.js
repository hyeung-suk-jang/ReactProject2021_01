import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <form>
        {/*성명*/}
        <div className={styles.wrapper}>
          <span>*성명</span>
          <div className={styles.input}>
            <input type="text" name="name" value="" required />
          </div>
        </div>
        {/*생년월일*/}
        <div className={styles.wrapper}>
          <span>*생년월일</span>
          <div className={styles.input}>
            <input type="number" name="birth" value="" required />
          </div>
        </div>
        {/*성별(선택)*/}
        <div className={styles.wrapper}>
          <span>*성별(선택)</span>
          <div className={styles.input}>
            <label htmlFor="male">남</label>
            <input id="male" type="radio" name="gender" value="male" />
            <label htmlFor="female">여</label>
            <input id="female" type="radio" name="gender" value="female" />
            <label htmlFor="reject">미동의</label>
            <input id="reject" type="radio" name="gender" value="reject" />
          </div>
        </div>
        {/*회원 ID */}
        <div className={styles.wrapper}>
          <span>*회원 ID</span>
          <div className={styles.input}>
            <input
              type="text"
              name="ID"
              value=""
              /*pattern="6~12자리의 영문 또는 숫자 혼용, 특수문자 제외"*/ required
            />
            <button type="click" disabled={false}>
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
              name="Password"
              value=""
              /*pattern=""*/ required
            />
            <span>
              *비밀번호는 10~16자리의 영문/숫자 또는 영문/숫자/특수문자[{""}
              !@#$%^&*(){""}]혼용
            </span>
          </div>
        </div>
        {/*비밀번호 확인*/}
        <div className={styles.wrapper}>
          <span>*비밀번호 확인</span>
          <div className={styles.input}>
            <input
              type="password"
              name="PasswordCheck"
              value=""
              /*pattern=""*/
              required
            />
          </div>
        </div>
        {/*우편번호*/}
        <div className={styles.wrapper}>
          <span>*우편번호</span>
          <div className={styles.input}>
            {" "}
            <input type="text" name="address" value="" required />
            <button type="click">도로명주소 찾기</button>
          </div>
        </div>
        {/*주소*/}
        <div className={styles.wrapper}>
          <span>*주소</span>
          <div className={styles.input}>
            <input type="text" name="address_detail" size="50" required />
            <input type="text" name="address_detail" size="50" required />
            <span>*나머지 주소를 입력하세요.</span>
          </div>
        </div>
        {/*연락처*/}
        <div className={styles.wrapper}>
          <span>*연락처</span>
          <div className={styles.input}>
            <select name="tel_first" required>
              <option value={null}>선택</option>
              <option value="02">02</option>
              <option value="032">032</option>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="012">012</option>
            </select>
            -
            <input type="number" name="tel_second" value="" size="4" required />
            -
            <input type="number" name="tel_last" value="" size="4" required />
            <span>
              *전화번호 또는 휴대전화번호 중 하나를 입력하셔야 합니다.
            </span>
            <div className="tel_notification">
              <span>
                *국가상호대차서비스 선택시 휴대폰번호 입력 후 인증을 수행해야
                합니다.
              </span>
              <button type="click" name="tel_verification">
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
            <input type="text" name="email" value="" required />@
            <select name="text" required>
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
              name="registration-type"
              value="general"
            />
            <label htmlFor="general">일반회원</label>
            <span className="public-officer">
              <input
                id="public"
                type="radio"
                name="registration-type"
                value="public"
              />
              <label htmlFor="public">정책회원</label>
              <span>
                ({" "}
                <input
                  id="individual"
                  type="radio"
                  name="registration-type"
                  value="individual"
                />
                <label htmlFor="individual">공무원</label>
                <input
                  type="radio"
                  name="registration-type"
                  value="institution"
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
            <input id="sms" type="checkbox" name="sms" />
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
