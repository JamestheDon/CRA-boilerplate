import React, { Component } from "react";
import styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={` container shadow-lg ${styles.main1}`}>
        <div className={` row justify-content-center  ${styles.main}`}>
          <div className={`  ${styles.lead}`}>
            {/** C */}
            <div className={`  ${styles.screenLvl1}`}>
              <div className={`  ${styles.screenLvl2}`}>
                <div className={`  text-left ${styles.screenLvl3}`}>
                  <h3 className="lead m-2">
                    Hello, world! <span className={styles.cursor} />
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
            <div className="col-md-8">
              <h3 align="center">My Profession</h3>

              <p>
                Software development. Business, new tools, change and progress.
              </p>

              <h3 align="center">Where you're standing</h3>
              <p>
                This is my private v0.1.0 web-app. Higher versions v1.0.0^ api
                being built with distributed ledger capabilities.
              </p>
              <h3 align="center">What I do</h3>
              <p>
                I specilize in digital buisiness, think of me as a digital
                superuser, concierge and practicing programmer. Expieranced in
                industry standards for software development and beyond. ill
                periodically be posting new projects im working on, thoughts
                about the Digital Industry and occasionally posting about more
                philisophical topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
