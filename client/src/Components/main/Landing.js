import React from "react";

import styles from "./Landing.module.css";
import NeonSign from "../effects/NeonSign";
import TypeWriter from "../effects/TypeWriter";
import ComputerScreen from "../effects/ComputerScreen";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <div className={`row justify-content-center ${styles.removedStyles}`}>
        <NeonSign />
        <hr />
        <ComputerScreen />
      </div>
    </div>
  );
}

/**   
 * <TypeWriter
              heading={">_"}
              messages={[
                "This is my personal digital platform built by me      ",
                "I am at your service...             "
              ]}
            />
            
            */

export default Landing;
