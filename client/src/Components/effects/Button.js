import React, { Component } from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <div className={`svg-wrapper  ${styles.svgWrapper}`}>
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
          <rect className={`shape ${styles.shape}`} height="40" width="150" />
        </svg>
        <div className={`text ${styles.text}`}>
          {" "}
          <Link to={this.props.url}>
            {" "}
            <span className={`spot ${styles.spot}`}></span>
            {this.props.name}
          </Link>{" "}
        </div>
      </div>
    );
  }
}

export default Button;
