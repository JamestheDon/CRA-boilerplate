import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={` container  ${styles.main1}`}>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About us"></meta>
        </Helmet>
        {/* FIrst Card */}
        <div className="container" style={{}}>
          <div
            className={` row justify-content-center shadow-lg  ${styles.main}`}
          >
            <h3>About</h3>
            <p style={{ color: "black", padding: "10px" }}>
              ​ ​There are many Medicare plan choices for those turning 65, who
              are currently receiving benefits and still others making decisions
              for their loved ones. Joanna Prisiajniouk of Medicare Insurance
              Group can assist in understanding the concepts of Medicare and
              selecting the best coverage solution easily by guiding you through
              your questions and specific needs. For potential Medicare
              enrollees or for those currently enrolled in Medicare, Joanna can
              help you understand what Medicare covers and help you determine if
              your current coverage meets your needs for potential necessary
              changes as well. We work with many plans available per designated
              state areas to save your money and keep up to date with changes
              that occur enrolling folks in a plan best suited for their medical
              and financial situations. Once enrolled in Medicare, an annual
              review of your coverage and deductibles is part of a sound
              healthcare management strategy. She can assist in determining
              whether your current coverage is meeting your medical and drug
              prescription needs to determine any necessary changes. It's always
              a good idea to stay on top of Medicare plan changes and reviewing
              how Medicare works to find the best cost effective solutions that
              are critical in maximizing the various benefits on an ongoing
              basis. Let us guide you for all your future medicare requirements.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
