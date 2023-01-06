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
        <p className="navButton">thecrew.</p>
        <p className="navButton">menu.</p>
        <p className="navButton">recipes.</p>
      </div>
    </div>
  );
}

export default Navbar;
