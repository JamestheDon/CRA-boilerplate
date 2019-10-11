import React from "react";

import styles from "./Landing.module.css";
import james from "../../img/jamesiii_drake.ico";

import TypeWriter from "../effects/TypeWriter";

function Landing() {
  return (
    <div className={`row justify-content-sm-left  ${styles.screen}`}>
      <div className={`col-sm-4 card shadow-lg ${styles.App}`}>
        <img
          src={james}
          className={`rounded-circle border border-success ${styles.appLogo}`}
          alt="logo"
        />

        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <span className={styles.terminal}>
          last login: {new Date().toUTCString()}{" "}
        </span>
        <TypeWriter
          heading={">_"}
          messages={[
            "This is my personal digital platform built by me      ",
            "I am at your service...             "
          ]}
        />
      </div>
    </div>
  );
}

export default Landing;
