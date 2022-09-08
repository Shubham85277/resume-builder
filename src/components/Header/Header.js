import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="m">
      <div className="head">
        <h1>Resume Builder</h1>
      </div>
      <div className="container">
        <div className="left">
          <p className="heading">
            A <span>Resume</span> that
            <br /> stands <span>out!!</span> <br />
            <span> Standing </span>out Professional.
            <span>Get your</span> <span>Resume ready </span>in minutes with our{" "}
            <span>step-by-step builder.</span>
          </p>
        </div>
        <div className="right">
          <img
            src="./col.png"
            style={{ height: "500px", width: "550px" }}
            alt="Resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
