import React, { memo } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { onClick, show, children } = props;
  return (
    <div
      className={show ? styles.Modal : styles.Modal_hide}
      onClick={() => onClick()}
    >
      <span>{children}</span>
    </div>
  );
};

export default memo(Modal);
