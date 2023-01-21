import React from "react";
import CrewCard from "../Crew/CrewCard";
import Footer from "../Footer";

function Crew() {
  return (
    <div className="crewContainer">
      <div className="crewPage">
        <CrewCard/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Crew;
