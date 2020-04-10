import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//====== CSS Modules =========================//
import styles from "./App.module.css";
//============= COMPONENTS ===========//
import Contact from "./Components/secondary/Contact";
import About from "./Components/secondary/About";
import Landing from "./Components/main/Landing";
import NavBar from "./Components/main/NavBar";
import Footer from "./Components/main/Footer";

function App() {
  return (
    <Router>
      <div className={` container ${styles.App}`}>
        <div className="container" style={{ padding: "5px" }}>
          <header className={styles.appHeader}>
            <NavBar />
          </header>
        </div>

        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/pixelandprocessor" component={PP} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
