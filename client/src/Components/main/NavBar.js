import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      /**++++++++++++++++++++++ */

      <nav className="navbar navbar-expand-lg navbar-light   ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {"Starter CRA"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/** */}
          <div className="collapse navbar-collapse " id="mobile-nav">
            <ul
              className="nav navbar-nav mr-auto "
              style={{ padding: "15px", paddingRight: "2.5rem" }}
            >
              <li className="nav-item" style={{ paddingRight: "25px" }}>
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " to="/pixelandprocessor">
                  pixel & processor
                </Link>
              </li> */}

              {/** 
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/thoughts">
                  Thoughts
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
