import React from "react";
import './Caption.css'

function Caption(props) {
  return (
    <div className="captionContainer">
      <div>
        <h1 className="captionOne">{props.caption}</h1>
      </div>
      <div>
        <h1 className="captionTwo">{props.secondCaption}</h1>
      </div>
    </div>
  );
}

export default Caption;
