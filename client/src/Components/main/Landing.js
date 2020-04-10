import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <Helmet>
        <title>Chicago Health Insurance</title>
        <meta name="description" content="Built to last"></meta>
      </Helmet>
      <div className={`jumbotron jumbotron-fluid ${styles.jumbotron}`}>
        <div className="container">
          <h1 className="display-5" style={{ color: "white" }}>
            Welcome to Chicago Health Insurance
          </h1>
        </div>
        <span style={{ fontSize: "12px", color: "#09d3ac" }}>
          Photo by Fusion Medical Animation on Unsplash
        </span>
      </div>

      <div className={`row justify-content-center ${styles.removedStyles}`}>
        <div className="col-md-10 card shadow-lg" style={{ padding: "15px" }}>
          <h3>What to know about the health care law if you have Medicare</h3>
          <p style={{ color: "black" }}>
            Taking control of your coverage and cost options with your Medicare
            and prescription drug coverage can be a daunting task trying to
            understand all the different types of coverage, rules regarding
            enrollment times and the specific needs one requires. Our
            consultative expertise will guide you through the Medicare maize for
            the best medical and financial solution that best suits your needs
            now and in the future. Let us help you navigate the future...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
