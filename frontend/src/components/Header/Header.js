import React from "react";
import LNB from "./GNB/LNB";
import GNB from "./GNB/GNB";
import HeaderLogo from "./GNB/HeaderLogo";
import styles from "./Header.module.css";

const Header = () => (
  <>
    <div className={styles.headerWrapper}>
      <header>
        <LNB className={styles.lnb} />
        <HeaderLogo className={styles.logo} />
        <GNB className={styles.gnb} />
        {/* <div class="library_info">
            <h5>1월 20일</h5>
            <p>운영시간 10:00 ~ 17:00</p>>
        </div>  */}
      </header>
    </div>
  </>
);

export default Header;
