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
          <div className={`   ${styles.main}`}>
            <h3>About</h3>
            <p style={{ color: "black", padding: "10px" }}>Write stuff ...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
