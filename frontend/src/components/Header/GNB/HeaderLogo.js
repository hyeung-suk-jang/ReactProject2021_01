import React from "react";
import mainLogo from "../../../assets/images/revise_logo_main.png";

const HeaderLogo = () => (
  <div className="logo">
    <div className="logo_inner">
      <h1>
        <a href="https://www.nl.go.kr/" alt="국립중앙도서관 메인페이지로 이동">
          <img src={mainLogo} alt="main-logo" />
          <span className="hide">문화체육관광부 국앙중립도서관</span>
        </a>
      </h1>
    </div>
  </div>
);

export default HeaderLogo;
