import React from "react";

import styles from "./Landing.module.css";
import NeonSign from "../effects/NeonSign";
import TypeWriter from "../effects/TypeWriter";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <div className={`row justify-content-center ${styles.removedStyles}`}>
        <NeonSign />
        <hr />
        <div className={`col-md-8 ${styles.removed}`}>
          <div className={`jumbotron text-left  ${styles.jumbotron}`}>
            <TypeWriter
              heading={">_"}
              messages={[
                "This is my personal digital platform built by me      ",
                "I am at your service...             "
              ]}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
