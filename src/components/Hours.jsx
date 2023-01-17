import React from "react";
import "./Hours.css";

function Hours(props) {
  return <div>
    <div><h1>{props.dayOne}</h1></div>
    <div><h1>{props.dayTwo}</h1></div>
    <div><h1>{props.time}</h1></div>
    
  </div>;
}

export default Hours;
