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
        <a className="navButton" href="/crew">thecrew.</a>
        <a className="navButton" href="/menu">menu.</a>
        <a href="https://github.com/paul-nguyen96" className="navButton">contact.</a>
      </div>
    </div>
  );
}

export default Navbar;
