import React from "react";
import LNB from "./Navigation/LNB";
import GNB from "./Navigation/GNB";
import HeaderLogo from "./Navigation/HeaderLogo";
import styles from "./Header.module.css";

const Header = ({isLoggedIn}) => (
  <div className={styles.headerWrapper}>
    <header>
      <LNB className={styles.lnb} isLoggedIn={isLoggedIn} />
      <HeaderLogo className={styles.logo} />
      <GNB className={styles.gnb} />
      {/* <div class="library_info">
            <h5>1월 20일</h5>
            <p>운영시간 10:00 ~ 17:00</p>>
        </div>  */}
    </header>
  </div>
);

export default Header;
