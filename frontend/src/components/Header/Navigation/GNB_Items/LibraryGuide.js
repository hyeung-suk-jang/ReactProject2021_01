import React from "react";

const LibraryGuide = ({ onMouseGnb, openDepth2 }) => (
  <li
    onMouseLeave={() => onMouseGnb(false)}
    onMouseOver={() => onMouseGnb(true)}
    onFocus={() => onMouseGnb(true)}
  >
    <a href="" className="depth">
      <span>도서관 이용</span>
    </a>
    <ul className={openDepth2 ? "gnb-depth2_open" : "gnb-depth2"}>
      <li className="gnb-depth2_item">
        <a href="">집에서 이용하는 도서관</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">본관 이용시간 및 이용증 발급</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">본관 자료실 안내</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">디지털도서관 안내</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">도서관 일정</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">편의시설</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">자료복사</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">전시</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">자주하는 질문</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">설문조사</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">오류신고</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">분실물찾기</a>
      </li>
    </ul>
  </li>
);

export default LibraryGuide;
