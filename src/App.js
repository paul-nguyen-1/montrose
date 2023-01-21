import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crew from "./components/pages/Crew";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import "../src/components/Navbar.css";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
