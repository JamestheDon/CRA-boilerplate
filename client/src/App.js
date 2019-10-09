import React from "react";

import logo from "./logo.svg";
import styles from "./App.module.css";

import TypeWriter from "./Components/effects/TypeWriter";

function App() {
  let msgs = [
    "This is my personal digital platform built by me      ",
    "I am at your service...             "
  ];
  return (
    <div className={`container card shadow-lg ${styles.App}`}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />

        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>last login: {new Date().toUTCString()} </span>
        <TypeWriter heading={">_"} messages={msgs} />
      </header>
    </div>
  );
}

export default App;
