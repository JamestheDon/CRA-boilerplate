import React from "react";

import styles from "./Landing.module.css";
import james from "../../img/jamesiii_drake.ico";
import TypeWriter from "../effects/TypeWriter";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <div className="row justify-content-center">
        <div className="col-md-8">
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
