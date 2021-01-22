import React from "react";

const DigitalCollection = ({ onMouseGnb, openDepth2 }) => (
  <li
    onMouseLeave={() => onMouseGnb(false)}
    onMouseOver={() => onMouseGnb(true)}
    onFocus={() => onMouseGnb(true)}
  >
    <a href="" className="depth">
      <span>디지털컬렉션</span>
    </a>
    <ul className={openDepth2 ? "gnb-depth2_open" : "gnb-depth2"}>
      <li className="gnb-depth2_item">
        <a href="">주제별컬렉션</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">대한민국 신문 아카이브</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">관보</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">해외 한국 관련 기록물</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">OAK국가리포지터리</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">오아시스(OASIS)</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">책 읽어주는 도서관</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">전시컬렉션(온라인전시)</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">세계의 도서관</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">동아시아 디지털도서관(EADL)</a>
      </li>
    </ul>
  </li>
);

export default DigitalCollection;
