import React from "react";
import styles from "./About.module.css";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1> Tools</h1>
          <h5>
            Digital tools {"&"} technology I use to drive my professional
            intrests
          </h5>
        </div>
      </div>
      {/**Front end */}
      <div className={`card border-light mb-3 ${styles.skillCard}`}>
        <div className="card-header">Frontend </div>
        <div className="card-body">
          <h4 className="card-title">website and app development</h4>
          <p className="card-text">
            Modern design and industry standard performance.{" "}
          </p>
        </div>
      </div>
      {/** ==BACKEND== */}
      <div className={`card border-light mb-3 ${styles.skillCard}`}>
        <div className="card-header">Backend</div>
        <div className="card-body">
          <h4 className="card-title">Server, Database {"&"} APIs</h4>
          <p className="card-text">Building personal servers and databases.</p>
        </div>
      </div>
      <div className="row ">
        <span className="badge badge-success">HTML</span>
        <span className="badge badge-success">CSS</span>
        <span className="badge badge-success">JavaScript</span>
        <span className="badge badge-success">Bash</span>
        <span className="badge badge-success">React</span>
        <span className="badge badge-success">Blockstack.js</span>
        <span className="badge badge-success">Express.js</span>
        <span className="badge badge-success">Node.js</span>
        <span className="badge badge-success">Heroku</span>
        <span className="badge badge-success">Netlify</span>
        <span className="badge badge-success">MongoDB</span>
        <span className="badge badge-success">Mongoose.js</span>
        <span className="badge badge-success">Gaia</span>
        <span className="badge badge-success">Git</span>
        <span className="badge badge-success">Github</span>
      </div>
    </div>
  );
};
