import React, { Component } from "react";
import styles from "./ComputerScreen.module.css";
import { Link } from "react-router-dom";
import Button from "./Button";

class ComputerScreen extends Component {
  render() {
    return (
      <div className={` container shadow-lg ${styles.main1}`}>
        <div className={` row justify-content-center  ${styles.main}`}>
          <div className={`  ${styles.lead}`}>
            {/** C */}
            <div className={`  ${styles.screenLvl1}`}>
              <div className={`  ${styles.screenLvl2}`}>
                <div
                  className={` row text-center justify-content-center  ${styles.screenLvl3}`}
                >
                  <Button name={"About"} url={"/about"} />

                  <Button name={"Projects"} url={"/skills"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComputerScreen;
