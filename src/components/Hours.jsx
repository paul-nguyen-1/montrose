import React from "react";
import "./Hours.css";

function Hours(props) {
  return <div className="hours">
    <div className="dayOne"><h1>{props.dayOne}</h1></div>
    <div className="dayTwo"><h1>{props.dayTwo}</h1></div>
    <div className="time"><h1>{props.time}</h1></div>
    
  </div>;
}

export default Hours;
