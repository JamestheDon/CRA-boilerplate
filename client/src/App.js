import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./App.module.css";

//=============COMPONENTS=============//
import TypeWriter from "./Components/effects/TypeWriter";
import Landing from "./Components/main/Landing";

function App() {
  return (
    <Router>
      <div className={`container card shadow-lg ${styles.App}`}>
        <header className={styles.appHeader}>
          <Route exact path="/" component={Landing} />
          {/**  <Route exact path="/about" component={About} />*/}
        </header>
      </div>
    </Router>
  );
}

export default App;
