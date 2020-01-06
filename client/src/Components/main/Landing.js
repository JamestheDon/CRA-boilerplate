import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Landing.module.css";
import NeonSign from "../effects/NeonSign";

import ComputerScreen from "../effects/ComputerScreen";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <Helmet>
        <title>Jamesdon.io</title>
        <meta
          name="description"
          content="A personal digital realm, tred lightly"
        ></meta>
      </Helmet>
      <div className={`row justify-content-center ${styles.removedStyles}`}>
        <NeonSign mainDesc={"It's"} flashingDesc={"working"} />
        <hr />
        <ComputerScreen />
      </div>
    </div>
  );
}

export default Landing;
