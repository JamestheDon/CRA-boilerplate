import React, { Component } from "react";
import styles from "./About.module.css";
import TypeWriter from "../effects/TypeWriter";

class About extends Component {
  render() {
    return (
      <div className={`container card ${styles.aboutCard}`}>
        <h1>My Profession</h1>
        <div className={`jumbotron ${styles.jumbotron}`}>
          <h1 className="display-3">Industry is dead.</h1>
          <TypeWriter
            heading={">_"}
            messages={[
              "This is my personal digital platform built by me      ",
              "I am at your service...             "
            ]}
          />
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>

        {/** INTRO */}
        <p className="lead">
          Programming and Computer Science has <i>always</i> facinated me as
          well as scared me. I wasnt confident enough to commit myself to
          studying it and having the dicipline to learning it, So I built a
          business doing it first.
          {/**  */}I choose to get into software development because of my love
          to build and be creative. THis is my private web app where ill
          periodically be posting new projects im working on, thoughts about the
          Industry and occasionally writing about more philisophical topics.
        </p>

        <h2>What I do</h2>
        {/** Link to tools */}
        <p>
          I specilize in digital buisiness, think of me as your personal digital
          services concierge. Im expieranced in INdustry standard methods for
          software development. Im a practicing programmer building applicaitons
          for data analytics as well as my personal passion of Blockcain tech
          and Crypto systems.{" "}
        </p>
      </div>
    );
  }
}

export default About;
