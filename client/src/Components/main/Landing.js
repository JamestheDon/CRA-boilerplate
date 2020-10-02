import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={`container ${styles.screen1}`}>
      <Helmet>
        <title>Starter CRA</title>
        <meta name="description" content="Built to last"></meta>
      </Helmet>
      <div className={`jumbotron jumbotron-fluid ${styles.jumbotron}`}>
        <div className="container">
          <h1 className="display-5" style={{ color: "white" }}>
            Welcome to the Starter app
          </h1>
        </div>
        <span style={{ fontSize: "12px", color: "#09d3ac" }}>
          Photo by Fusion Medical Animation on Unsplash
        </span>
      </div>

      <div className={`row justify-content-center ${styles.removedStyles}`}>
        <div className="col-md-10 card shadow-lg" style={{ padding: "15px" }}>
          <h3>A template for creating great create-react-app Webapps</h3>
          <p style={{ color: "black" }}>
            This app is as bare bone as a CRA can be considering many pkgs...
            Designed for Continuous Deployments to Netlify. React apps have
            proven to be good solution for a multitude problems. Basic static
            websites with the capabilites of application level software
            interactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
