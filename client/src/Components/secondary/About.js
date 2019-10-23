import React, { Component } from "react";
import styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={`container card ${styles.aboutCard}`}>
        <div className="page-header text-center">
          <h1>Hello, world!</h1>
        </div>

        <div className={`row  ${styles.lvlTwo}`}>
          <div className={`col-md-12 text-left ${styles.logoBox}`}>
            {/** NESTED ROW */}

            <h3>My Profession</h3>
            {/** INTRO */}
            <p>
              Programming and Computer Science has always facinated me. I chose
              to get into software development because of my love to build and
              be creative. This is my private web app where ill periodically be
              posting new projects im working on, thoughts about the Industry
              and occasionally writing about more philisophical topics.
            </p>

            <h3>What I do</h3>
            {/** Link to tools */}
            <p>
              I specilize in digital buisiness, think of me as your personal
              digital services concierge, expieranced with the industry
              standards for software development.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
