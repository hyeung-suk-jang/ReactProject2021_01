import React from "react";

const Apply = ({ onMouseGnb, depth2 }) => (
  <li
    onMouseLeave={() => onMouseGnb(false, "신청/참여")}
    onMouseOver={() => onMouseGnb(true, "신청/참여")}
    onFocus={() => onMouseGnb(true, "신청/참여")}
  >
    <a
      href=""
      className={
        depth2.open && depth2.category === "신청/참여" ? "a_on" : "a_out"
      }
    >
      <span>신청 &middot; 참여</span>
    </a>
    <ul className={depth2.open ? "gnb-depth2_open" : "gnb-depth2"}>
      <li className="gnb-depth2_item">
        <a href=""> 자료신청안내</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">비치희망도서</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">상호대차</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">책다모아(기증)</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">사서에게 물어보세요</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">인문열차, 삶을 달리다</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">연구정보서비스</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">견학</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">예약</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">사회봉사</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">교육/문화프로그램</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">메일링서비스</a>
      </li>
      <li className="gnb-depth2_item">
        <a href="">연계 API</a>
      </li>
    </ul>
  </li>
);

export default Apply;
