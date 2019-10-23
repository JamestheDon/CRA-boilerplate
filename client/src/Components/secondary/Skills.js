import React from "react";
import styles from "./About.module.css";
import GithubApi from "../effects/GithubApi";

export default () => {
  return (
    <div className="container">
      {/**Github proj. */}
      <div className={`container ${styles}`}>
        <GithubApi username={"JamestheDon"} />
      </div>
    </div>
  );
  /**
   * 
   *       <div className="row ">
        <span className="badge badge-light">HTML</span>
        <span className="badge badge-light">CSS</span>
        <span className="badge badge-light">JavaScript</span>
        <span className="badge badge-light">Bash</span>
        <span className="badge badge-light">React</span>
        <span className="badge badge-light">Blockstack.js</span>
        <span className="badge badge-light">Express.js</span>
        <span className="badge badge-light">Node.js</span>
        <span className="badge badge-light">Heroku</span>
        <span className="badge badge-light">Netlify</span>
        <span className="badge badge-light">MongoDB</span>
        <span className="badge badge-light">Mongoose.js</span>
        <span className="badge badge-light">Gaia</span>
        <span className="badge badge-light">Git</span>
        <span className="badge badge-light">Github</span>
      </div>
   * 
   * 
   * 
   */
};
