import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="leftNav">
        <h1 className="Logo">Montrose</h1>
        <h1 className="Logo">Montrose</h1>
      </div>
      <div className="rightNav">
        <a className="navButton">thecrew.</a>
        <a className="navButton">menu.</a>
        <a className="navButton">recipes.</a>
        <a href="https://github.com/paul-nguyen96" className="navButton">contact.</a>
      </div>
    </div>
  );
}

export default Navbar;
