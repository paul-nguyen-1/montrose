import React from "react";
import "./OrderButton.css";

function OrderButton({ text }) {
  return (
    <div>
      <button className="orderButton">{text}</button>
    </div>
  );
}

export default OrderButton;
