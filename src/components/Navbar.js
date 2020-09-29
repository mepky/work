import React, { Component } from "react";
import "../index.css";
class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-1">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3527/3527713.svg"
            alt="content-img"
            className="flat-icons"
          />
          <span className="flat-content"> CONTENT </span>{" "}
        </div>{" "}
        <div className="nav-1">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/359/359401.svg"
            alt="row-img"
            className="flat-icons"
          />
          <span className="flat-content"> ROWS </span>{" "}
        </div>{" "}
        <div className="nav-1">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3126/3126539.svg"
            alt="settings-icon"
            className="flat-icons"
          />
          <span className="flat-content"> SETTINGS </span>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Navbar;
