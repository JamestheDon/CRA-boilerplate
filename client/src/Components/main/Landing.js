import React from "react";

import styles from "./Landing.module.css";
import james from "../../img/jamesiii_drake.ico";

import TypeWriter from "../effects/TypeWriter";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <div className="row">
        <div className={`jumbotron ${styles.jumbotron}`}>
          <h1 className="display-3">Industry is dead.</h1>
          <div className={`row ${styles.typeWriter}`}>
            <TypeWriter
              heading={">_"}
              messages={[
                "This is my personal digital platform built by me      ",
                "I am at your service...             "
              ]}
            />
          </div>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
        <div className={`col-md-12 text-center ${styles.logoBox}`}>
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
