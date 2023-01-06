import "./App.css";
import Navbar from "./components/Navbar";
import OrderButton from "./components/OrderButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <OrderButton text='order online'/>
    </div>
  );
}

export default App;
