import React from "react";
import { Link } from "react-router-dom";

const Footer_top = ({ mobile }) => {
  //footer-util_list 장애인 전용 온라인 상담까지 모바일에서는 미노출.
  return (
    <div className="footer__inner-top">
      <div className="inner">
        {/* <!-- 안내 영역 -->  */}
        <ul className="footer-util__list">
          {mobile ? (
            <>
              {" "}
              <li className="footer-util__item">
                <a
                  href="http://help.nl.go.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  원격헬프데스크
                </a>
              </li>
              <li className="footer-util__item">
                <a
                  href="https://ask.nl.go.kr/popup/userListMainAll.jsp"
                  target="_blank"
                  rel="noreferrer"
                >
                  장애인전용 온라인상담
                </a>
              </li>
            </>
          ) : null}

          <li className="footer-util__item">
            {/*PC용 링크*/}
            <a href="/NL/contents/N31700000000.do">국민신문고</a>
            {/*모바일용 링크*/}
            <a
              href="https://www.epeople.go.kr/index.jsp"
              target="_blank"
              rel="noreferrer"
              className="none_pc"
            >
              국민신문고
            </a>
          </li>
          <li className="footer-util__item">
            <a href="/NL/contents/N70800000000.do">클린신고센터</a>
          </li>
          <li className="footer-util__item">
            <a href="/NL/contents/N50108000000.do">찾아오시는 길</a>
          </li>
          <li className="footer-util__item none_mobile">
            <a href="/NL/contents/N71100000000.do">사이트맵</a>
          </li>
          <li className="footer-util__item">
            <a href="/NL/contents/N71210000000.do">
              <span className="none_mobile">누리집</span>이용가이드
            </a>
          </li>
        </ul>
        {/* <!-- 안내 영역 --> 
         <!-- SNS 영역 -->  */}
        <ul className="footer-sns__list">
          <li className="footer-sns__item">
            <a
              href="https://www.instagram.com/nationallibraryofkorea/"
              className="instagram"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
            >
              <span className="ico">인스타그램</span>
            </a>
          </li>
          <li className="footer-sns__item">
            <a
              href="http://blog.naver.com/dibrary1004"
              className="blog"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
            >
              <span className="ico">블로그</span>
            </a>
          </li>
          <li className="footer-sns__item">
            <a
              href="https://ko-kr.facebook.com/national.library.of.korea"
              className="facebook"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
            >
              <span className="ico">페이스북</span>
            </a>
          </li>
          <li className="footer-sns__item">
            <a
              href="https://twitter.com/library1004"
              className="twitter"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
            >
              <span className="ico">트위터</span>
            </a>
          </li>
          <li className="footer-sns__item">
            <a
              href="https://www.youtube.com/channel/UCKjWKI1yRlzWfgnF98HZ_TA"
              className="youtube"
              target="_blank"
              rel="noreferrer"
              title="새창 열림"
            >
              <span className="ico">유투브</span>
            </a>
          </li>
        </ul>
        {/* <!-- //SNS 영역 -->  */}
      </div>
    </div>
  );
};

export default Footer_top;
