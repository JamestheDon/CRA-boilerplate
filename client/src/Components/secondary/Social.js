import React from "react";

export default () => {
  return (
    <div className="col">
      <span className="text-center text-dark">
        <a
          href="https://github.com/JamestheDon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fab fa-github " />
          Github
        </a>
        <a
          href="mailto:jamesdonhawkins@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fas fa-envelope-open-text " />
          Email
        </a>{" "}
        <a href="https://twitter.com/donjhawk">
          <i className="fab fa-twitter " />
          Twitter
        </a>{" "}
        <a href="https://www.linkedin.com/in/james-hawkins-328b8441/">
          <i className="fab fa-linkedin " />
          Linkedin
        </a>
      </span>
    </div>
  );
};
