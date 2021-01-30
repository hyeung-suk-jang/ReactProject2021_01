import React from "react";
import LNB from "./Navigation/LNB";
import GNB from "./Navigation/GNB";
import HeaderLogo from "./Navigation/HeaderLogo";

const Layout = ({ history, me }) => (
  <div className="header-wrap">
    <header>
      <LNB className="lnb" history={history} me={me} />
      <HeaderLogo className="logo" />
      <GNB className="gnb" />
      {/* <div class="library_info">
            <h5>1월 20일</h5>
            <p>운영시간 10:00 ~ 17:00</p>>
        </div>  */}
    </header>
  </div>
);

export default Layout;
