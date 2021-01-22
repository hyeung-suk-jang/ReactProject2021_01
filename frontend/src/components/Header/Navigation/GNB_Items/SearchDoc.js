import React from "react";

const SearchDoc = ({ onMouseGnb, openDepth2 }) => (
  <li
    onMouseLeave={() => onMouseGnb(false)}
    onMouseOver={() => onMouseGnb(true)}
    onFocus={() => onMouseGnb(true)}
  >
    <a href="" className="depth">
      <span>자료검색</span>
    </a>
    <ul className={openDepth2 ? "gnb-depth2_open" : "gnb-depth2"}>
      <li className="gnb-depth2_item">
        <a href="">소장자료</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">디지털화 자료</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">Web DB</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">신착자료</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">사서추천도서</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">영상자료 목록</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">국가자료종합목록</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">한국고전적종합목록</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">국가전자도서관</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">근대문학종합목록</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">국가서지 LOD</a>
      </li>
    </ul>
  </li>
);

export default SearchDoc;
