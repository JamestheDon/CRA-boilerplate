import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Skills.module.css";
import GithubApi from "../effects/GithubApi";
import NeonSign from "../effects/NeonSign";
import TypeWriter from "../effects/TypeWriter";

export default () => {
  return (
    <div className={` container shadow-lg ${styles.secondary1}`}>
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="Links to coding projects on github"
        ></meta>
      </Helmet>
      <div className={` row justify-content-center  ${styles.main}`}>
        <NeonSign mainDesc={"Projects"} />
        <div className={`  ${styles.lead}`}>
          {/** C */}
          <div className={`  ${styles.screenLvl1}`}>
            <div className={`  ${styles.screenLvl2}`}>
              <div className={`  text-left ${styles.screenLvl3}`}>
                <h3 className="lead m-2">
                  <TypeWriter
                    heading={">_"}
                    messages={[
                      "These are my active Github repositories.         "
                    ]}
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

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
