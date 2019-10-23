import React from "react";

import styles from "./Landing.module.css";
import james from "../../img/jamesiii_drake.ico";
import TypeWriter from "../effects/TypeWriter";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <div className={`jumbotron text-center ${styles.jumbotron}`}>
        <h1 className="display-3">Industry is dead.</h1>
        <hr />

        <div className={`row ${styles.typeWriter}`}>
          <TypeWriter
            heading={">_"}
            messages={[
              "This is my personal digital platform built by me      ",
              "I am at your service...             "
            ]}
          />
        </div>
        <hr />
        <Link to="/skills" className="btn btn-primary btn-lg" target="_blank">
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default Landing;
