import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styles from "./About.module.css";
import TypeWriter from "../effects/TypeWriter";
import NeonSign from "../effects/NeonSign";

class About extends Component {
  render() {
    return (
      <div className={` container shadow-lg ${styles.main1}`}>
        <Helmet>
          <title>About</title>
          <meta
            name="description"
            content="A little about James Don, his profession and intrests"
          ></meta>
        </Helmet>
        <div className={` row justify-content-center  ${styles.main}`}>
          <NeonSign mainDesc={"Jamesdon"} flashingDesc={".io"} />
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
                        "I am at your service...             ",
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

              <p>Digital development</p>

              <h3 align="center">What I do</h3>
              <p>
                Think of me as a digital superuser/programmer. Experienced in
                industry standards for software development and beyond. I build
                digital leverage, not weight.
              </p>
              <h3 align="center">What can you do?</h3>
              <p>
                Do you feel a need to reconsider your digital operations? Do you
                have a solid footing for the future? Contact me by clicking on
                any of the links below.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
