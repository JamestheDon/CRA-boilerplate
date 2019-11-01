import React from "react";

import styles from "./NeonSign.module.css";

function NeonSign() {
  return (
    <div className={` container text-center ${styles.span}`}>
      <div className={` ${styles.lines}`}>
        <span className={`${styles.span} ${styles.line}`}>
          I want it to
          <span
            className={`${styles.span} ${styles.well}`}
            style={{ "--i": 0 }}
          >
            {" "}
            work
          </span>
        </span>
      </div>
    </div>
  );
}

export default NeonSign;
