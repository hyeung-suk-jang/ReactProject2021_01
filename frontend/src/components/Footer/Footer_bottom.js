import React from "react";

const Footer_bottom = () => {
  return (
    <div className="footer__inner-bottom">
      <div className="inner">
        {/* <!-- PC 정책, 법령 -->  */}
        <div className="policy-wrap">
          <ul className="policy__list">
            <li className="policy__item">
              <a href="/NL/contents/N70100000000.do">개인정보처리방침</a>
            </li>
            <li className="policy__item">
              <a href="/NL/contents/N70200000000.do">국립중앙도서관 윤리강령</a>
            </li>
            <li className="policy__item">
              <a href="/NL/contents/N70300000000.do">도서관법령</a>
            </li>
            <li className="policy__item">
              <a href="/NL/contents/N70400000000.do">이용봉사헌장</a>
            </li>
            <li className="policy__item">
              <a href="/NL/contents/N50803010000.do">사전정보공개</a>
            </li>
            <li className="policy__item">
              <a href="/NL/contents/N70600000000.do">저작권정책</a>
            </li>
          </ul>
        </div>
        {/* <!-- //PC 정책, 법령 --> 
    <!-- MO 정책, 법령 -->  */}
        <div className="mo_policy-wrap">
          <label htmlFor="policy_page" className="ir_text">
            개인정보처리방침
          </label>
          <select id="policy_page" className="policy-select-wrap">
            <option value="/NL/contents/N70100000000.do">
              개인정보처리방침
            </option>
            <option value="/NL/contents/N70200000000.do">
              국립중앙도서관 윤리강령
            </option>
            <option value="/NL/contents/N70300000000.do">도서관법령</option>
            <option value="/NL/contents/N70400000000.do">이용봉사헌장</option>
            <option value="/NL/contents/N50803010000.do">사전정보공개</option>
            <option value="/NL/contents/N70600000000.do">저작권정책</option>
          </select>
          <button
            type="button"
            title="새창열림"
            id="policy_page_btn"
            className="site-go"
          >
            이동
          </button>
        </div>
        {/* <!-- //MO 정책, 법령 --> 
    <!-- 유관사이트 -->  */}
        <div className="family-wrap">
          <label htmlFor="family_site" className="ir_text">
            유관사이트
          </label>
          <select id="family_site" className="family-select-wrap">
            <option value="" className="opt-tit">
              유관사이트
            </option>
            <option value="https://www.nlcy.go.kr">
              국립어린이청소년도서관
            </option>
            <option value="https://sejong.nl.go.kr">국립세종도서관</option>
            <option value="http://www.nld.go.kr">국립장애인도서관</option>
            <option value="https://www.data.go.kr">공공데이터포털</option>
            <option value="http://www.acrc.go.kr">국민권익위원회</option>
            <option value="http://www.gov.kr/portal/main">정부24</option>
            <option value="http://mcst.go.kr">문화체육관광부</option>
            <option value="http://www.kpf.or.kr">한국언론진흥재단</option>
            <option value="http://www.museum.go.kr/uigwe/">
              외규장각 의궤
            </option>
            <option value="http://www.nanet.go.kr">국회도서관</option>
            <option value="http://www.clip.go.kr">도서관정보정책위원회</option>
            <option value="http://library.scourt.go.kr">법원도서관</option>
            <option value="http://www.kpec.or.kr">간행물윤리위원회</option>
            <option value="http://www.kla.kr">한국도서관협회</option>
            <option value="http://www.copycle.or.kr">
              한국복제전송저작권협회
            </option>
            <option value="http://www.libsta.go.kr">
              국가도서관통계시스템
            </option>
            <option value="http://www.kpla.kr">(사)공공도서관협의회</option>
          </select>
          <button
            type="button"
            title="새창열림"
            id="family_site_btn"
            className="site-go"
          >
            이동
          </button>
        </div>
        {/* <!-- //유관사이트 --> 
    <!-- 국립중앙도서관 정보 -->  */}
        <div className="info-wrap">
          {/* <!-- 푸터 로고 -->  */}
          <em
            className="footer-logo"
            title="문화체육관광부 국립중앙도서관 로고"
          ></em>
          {/* <!-- //푸터 로고 --> 
     <!-- 주소, Copyright -->  */}
          <ul className="contact__list">
            <li className="contact__item">
              우편번호 06579 서울특별시 서초구 반포대로 201(반포동)
            </li>
            <li className="contact__item">
              문의전화 <span className="tel">02-590-0500</span>
              <a href="tel:02-590-0500" className="lnk_tel">
                02-590-0500
              </a>
              팩스 02-590-0530
            </li>
            <li className="contact__item copyright">
              Copyright© National Library of Korea. All rights reserved.
            </li>
          </ul>
          {/* <!-- //주소, Copyright -->  */}
        </div>
        {/* <!-- //국립중앙도서관 정보 -->  */}
      </div>
    </div>
  );
};

export default Footer_bottom;
