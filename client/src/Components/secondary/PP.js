import React, { Component } from "react";
import { Helmet } from "react-helmet";
import primo from "../../img/portfolio/Portfolio_000.jpg";
import venturecity from "../../img/portfolio/Portfolio_001.jpg";
import spop from "../../img/portfolio/Portfolio_002.jpg";
import freelance from "../../img/portfolio/Portfolio_003.jpg";

class PP extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Portfolio</title>
          <meta
            name="description"
            content="James Don's Pixel and Processor, llc portfolio"
          ></meta>
        </Helmet>
        <div className="row justify-content-center">
          <div className="col-md-10 ">
            <h3 className="text-center">Portfolio</h3>
            <p className="lead">
              *All projects and business listed below were produced as a whole
              by Pixel {"&"} Processor, llc where I played the role of
              Member/manager and oversaw all operations. All projects have since
              been discontinued*
            </p>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="  col-lg-8">
            <img
              style={{
                height: "auto",
                display: "flex",
                valign: "middle",
                verticalAlign: "middle",
                width: "100%",

                maxWidth: "1200px",
                maxHeight: "900"
              }}
              src={primo}
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className=" col-lg-8 ">
            <img
              style={{
                height: "auto",
                display: "flex",
                valign: "middle",
                verticalAlign: "middle",
                width: "100%",
                maxWidth: "1200px",
                maxHeight: "900"
              }}
              src={venturecity}
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className=" col-lg-8">
            <img
              style={{
                height: "auto",
                display: "flex",
                valign: "middle",
                verticalAlign: "middle",
                width: "100%",
                maxWidth: "1200px",
                maxHeight: "900"
              }}
              src={spop}
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className=" col-lg-8">
            <img
              style={{
                height: "auto",
                display: "flex",
                valign: "middle",
                verticalAlign: "middle",
                width: "100%",
                maxWidth: "1200px",
                maxHeight: "900"
              }}
              src={freelance}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PP;
