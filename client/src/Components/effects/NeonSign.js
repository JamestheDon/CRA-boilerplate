import React, { Component } from "react";
import styles from "./NeonSign.module.css";

class NeonSign extends Component {
  render() {
    return (
      <div className={` container text-center ${styles.span}`}>
        <div className={` ${styles.lines}`}>
          <span className={`${styles.span} ${styles.line}`}>
            {this.props.mainDesc}
            <span
              className={`${styles.span} ${styles.well}`}
              style={{ "--i": 0 }}
            >
              {" "}
              {this.props.flashingDesc}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default NeonSign;
