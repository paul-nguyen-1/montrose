import "./App.css";
import Caption from "./components/Caption";
import Hours from "./components/Hours";
import Motto from "./components/Motto";
import Navbar from "./components/Navbar";
import OrderButton from "./components/OrderButton";

function App() {
  return (
    <div>
      <div className="firstScreen">
        <Navbar />
        <Motto />
        <OrderButton home="order online" />
      </div>
      <div className="secondScreen">
        <div className="topSecondScreen">
          <Hours dayOne="MON" dayTwo="SUN" time="7A-3P"/>
        </div>
        <div className="bottomSecondScreen">
            <Caption caption="CO-WORKING" secondCaption="SPACE"/>
        </div>
      </div>
    </div>
  );
}

export default App;
