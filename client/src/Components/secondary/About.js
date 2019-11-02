import React, { Component } from "react";
import styles from "./About.module.css";
import TypeWriter from "../effects/TypeWriter";
import NeonSign from "../effects/NeonSign";

class About extends Component {
  render() {
    return (
      <div className={` container shadow-lg ${styles.main1}`}>
        <div className={` row justify-content-center  ${styles.main}`}>
          <NeonSign mainDesc={"Jamesdon.io"} />
          <div className={`  ${styles.lead}`}>
            {/** C */}
            <div className={`  ${styles.screenLvl1}`}>
              <div className={`  ${styles.screenLvl2}`}>
                <div className={`  text-left ${styles.screenLvl3}`}>
                  <h3 className="lead m-2">
                    <TypeWriter
                      heading={">_"}
                      messages={[
                        "This is my personal digital platform built by me      ",
                        "I am at your service...             "
                      ]}
                    />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={`  ${styles.desc}`}>
          <div
            className={`row text-left justify-content-center  ${styles.desc}`}
          >
            <div className={` col-md-8 text-center ${styles.desc}`}>
              <h3 align="center">My Profession</h3>

              <p>
                Software development. Business, new tools, change and progress.
              </p>

              <h3 align="center">What I do</h3>
              <p>
                Think of me as a digital superuser/programmer specilizing in
                buisiness. Expieranced in industry standards for software
                development and beyond.
              </p>
              <h3 align="center">Where you're standing</h3>
              <p>
                This is my private web-app. Api version v1.0.0 is being built.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
