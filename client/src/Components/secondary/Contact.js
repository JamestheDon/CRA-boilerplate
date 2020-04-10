import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Skills.module.css";

export default () => {
  return (
    <div className={` container shadow-lg ${styles.secondary1}`}>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact us today"></meta>
      </Helmet>
      <div className={` row justify-content-center  ${styles.main}`}>
        <div className={`  ${styles.lead}`}></div>
      </div>
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Email:
            <input type="text" name="Email" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      <hr />
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
