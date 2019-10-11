import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//====== CSS Modules =========================//
import styles from "./App.module.css";
//============= COMPONENTS ===========//
import About from "./Components/secondary/About";
import Landing from "./Components/main/Landing";
import NavBar from "./Components/main/NavBar";
import Footer from "./Components/main/Footer";

function App() {
  return (
    <Router>
      <div className={`container card shadow-lg ${styles.App}`}>
        <NavBar />
        <header className={styles.appHeader}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
