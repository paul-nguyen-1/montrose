import React from "react";
import Caption from "../Caption";
import Footer from "../Footer";
import Hours from "../Hours";
import Motto from "../Motto";
import Navbar from "../Navbar";
import OrderButton from "../OrderButton";

function Home() {
  return (
    <div className="homeContainer">
      <div className="firstScreen">
        <Navbar />
        <Motto />
        <OrderButton home="order online" />
      </div>
      <div className="secondScreen">
        <div className="topSecondScreen">
          <Hours dayOne="SUN" dayTwo="MON" time="7A-3P" />
        </div>
        <div className="bottomSecondScreen">
          <Caption caption="CO-WORKING" secondCaption="SPACE" />
        </div>
      </div>
      <div className="thirdScreen">
        <div className="topThirdScreen">
          <div id="on">
            <h1>ON</h1>
          </div>
          <OrderButton home="ORDER NOW" />
          <div id="line">
            <h1>LINE</h1>
          </div>
        </div>
      <div className="bottomThirdScreen">
      </div>
      </div>
    </div>
  );
}

export default Home;
