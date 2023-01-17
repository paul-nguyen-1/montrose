import React from "react";

function Caption(props) {
  return (
    <div>
      <div>
        <h1>{props.caption}</h1>
      </div>
      <div>
        <h1>{props.secondCaption}</h1>
      </div>
    </div>
  );
}

export default Caption;
