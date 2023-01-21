import React from "react";
import Footer from "../Footer";
import MenuCard from "../Menu/MenuCard";

function Menu() {
  return (
    <div className="menuContainer">
      <div className="menuPage">
        <MenuCard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Menu;
