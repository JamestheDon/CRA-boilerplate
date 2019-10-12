import React from "react";

import styles from "./Landing.module.css";
import james from "../../img/jamesiii_drake.ico";

import TypeWriter from "../effects/TypeWriter";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <div className="row">
        <div className="col-md-12 text-center ">
          <img
            src={james}
            className={`rounded-circle border border-success  ${styles.logo}`}
            alt="logo"
          />

          <div className={`row  ${styles.lvlTwo}`}>
            {/** NESTED ROW */}
            <div className={`col-md-12   ${styles.terminal}`}>
              <div className="col-md-4  shadow-lg">
                <TypeWriter
                  heading={">_"}
                  messages={[
                    "This is my personal digital platform built by me      ",
                    "I am at your service...             "
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
