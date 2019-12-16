import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//====== CSS Modules =========================//
import styles from "./App.module.css";
//============= COMPONENTS ===========//
import Skills from "./Components/secondary/Skills";
import About from "./Components/secondary/About";
import Landing from "./Components/main/Landing";
import NavBar from "./Components/main/NavBar";
import Footer from "./Components/main/Footer";
import PP from "./Components/secondary/PP";

function App() {
  return (
    <Router>
      <div className={` container ${styles.App}`}>
        <header className={styles.appHeader}>
          <NavBar />

          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/pixelandprocessor" component={PP} />
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
