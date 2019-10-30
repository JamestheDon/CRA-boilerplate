import React from "react";
import styles from "./Skills.module.css";
import GithubApi from "../effects/GithubApi";

export default () => {
  return (
    <div className={` container shadow-lg ${styles.secondary1}`}>
      <div className={` row justify-content-center  ${styles.main}`}>
        <div className={`  ${styles.lead}`}>
          {/** C */}
          <div className={`  ${styles.screenLvl1}`}>
            <div className={`  ${styles.screenLvl2}`}>
              <div className={`  text-left ${styles.screenLvl3}`}>
                <h3>Projects</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mb-4 text-center">Latest Github Repos</h3>
      <hr />
      <GithubApi username={"JamestheDon"} />
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
