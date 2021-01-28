import React, { memo } from "react";
import styles from "./Modal.module.css";

const Modal = ({ idAvailable, onClick, show }) => {
  return (
    <div
      className={show ? styles.Modal : styles.Modal_hide}
      onClick={() => onClick()}
    >
      <span>
        {idAvailable
          ? "사용할 수 있는 아이디 입니다"
          : "사용할 수 없는 아이디 입니다"}
      </span>
    </div>
  );
};

export default memo(Modal);
