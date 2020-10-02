import React from "react";

export default () => {
  return (
    <div className="col">
      <span className="text-center text-dark">
        <a href="/" target="_blank" rel="noopener noreferrer">
          {" "}
          <i className="fab fa-github " />
          Github
        </a>
        <a href="mailto:#" target="_blank" rel="noopener noreferrer">
          {" "}
          <i className="fas fa-envelope-open-text " />
          Email
        </a>{" "}
        <a href="/">
          <i className="fab fa-twitter " />
          Twitter
        </a>{" "}
        <a href="/">
          <i className="fab fa-linkedin " />
          Linkedin
        </a>
      </span>
    </div>
  );
};
