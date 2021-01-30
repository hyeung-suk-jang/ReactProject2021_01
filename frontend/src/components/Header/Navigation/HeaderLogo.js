import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => (
  <div className="logo">
    <div className="logo_inner">
      <h1>
        <Link to="/" alt="국립중앙도서관 메인페이지로 이동">
          <span className="hide">문화체육관광부 국앙중립도서관</span>
        </Link>
      </h1>
    </div>
  </div>
);

export default HeaderLogo;
