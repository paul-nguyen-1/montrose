import React from "react";
import "./OrderButton.css";

function OrderButton({ home }) {
  return (
    <div>
      <button className="orderButton">{home}</button>
    </div>
  );
}

export default OrderButton;
