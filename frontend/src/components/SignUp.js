import React from "react";

const SignUp = () => {
  return (
    <div>
      <form>
        {/*성명*/}
        <div className="name">
          <input type="text" name="name" size="" value="" required />
        </div>
        {/*생년월일*/}
        <div className="birth">
          <input type="number" name="birth" size="" value="" required />
        </div>
        {/*성별(선택)*/}
        <div className="gender">
          <label htmlFor="male">남</label>
          <input id="male" type="radio" name="gender" value="male" />
          <label htmlFor="female">여</label>
          <input id="female" type="radio" name="gender" value="female" />
          <label htmlFor="reject">미동의</label>
          <input id="reject" type="radio" name="gender" value="reject" />
        </div>
        {/*회원 ID */}
        <div className="ID">
          <input
            type="text"
            name="ID"
            size=""
            value=""
            /*pattern="6~12자리의 영문 또는 숫자 혼용, 특수문자 제외"*/ required
          />
          <button type="click" disabled={false}>
            중복확인
          </button>
        </div>
        {/*비밀번호*/}
        <div className="password">
          <input
            type="password"
            name="Password"
            size=""
            value=""
            /*pattern=""*/ required
          />
        </div>
        {/*비밀번호 확인*/}
        <div className="passwordCheck">
          <input
            type="password"
            name="PasswordCheck"
            size=""
            value=""
            /*pattern=""*/
            required
          />
        </div>
        {/*우편번호*/}
        <div className="address">
          <input type="text" name="address" size="" value="" required />
          <button type="click">도로명주소 찾기</button>
        </div>
        {/*주소*/}
        <div className="address_detail">
          <textarea name="address_detail" required />
          <textarea name="address_detail" required />
        </div>
        {/*연락처*/}
        <div className="tel">
          <label htmlFor="tel">연락처</label>
          <select name="tel_first" required>
            <option value={null}>선택</option>
            <option value="02">02</option>
            <option value="032">032</option>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="012">012</option>
          </select>
          <input id="tel" type="number" name="tel_second" value="" required />
          <input type="number" name="tel_last" value="" required />
          <button type="click" name="tel_verification">
            인증번호 발송
          </button>
        </div>
        {/*이메일 주소*/}
        <div className="email">
          <input type="text" name="email" value="" required />@
          <select name="text" required>
            <option value={null}>선택하세요</option>
            <option value="naver">naver.com</option>
          </select>
        </div>
        {/*회원유형*/}
        <div className="registration-type">
          <input
            id="general"
            type="radio"
            name="registration-type"
            value="general"
          />
          <label htmlFor="general">일반회원</label>
          <span className="public">
            <input
              id="public"
              type="radio"
              name="registration-type"
              value="public"
            />
            <label htmlFor="public">정책회원</label>
            <span>
              "("
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
                공공기관"("일부 정부 부처 포함")"
              </label>
              ")"
            </span>
          </span>
        </div>
        {/* SMS통보 여부(선택) */}
        <div className="SMS">
          <input id="sms" type="checkbox" name="sms" />
          <label htmlFor="sms">SMS통보 신청</label>
        </div>
        <button type="submit">회원가입신청</button>
      </form>
    </div>
  );
};

export default SignUp;
