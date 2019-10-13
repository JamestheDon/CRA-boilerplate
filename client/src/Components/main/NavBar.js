import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      /**++++++++++++++++++++++ */
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mt-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {"jamesdon.io /"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/skills">
                  Skills
                </Link>
              </li>
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
