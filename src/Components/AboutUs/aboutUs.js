import React from "react";
import "./aboutUs.css";
import aravind from "./../../assets/aravind.jpeg";
import thej from "./../../assets/thej.jpeg";
import shane from "./../../assets/shane.png"

function aboutUs({theme}) {
  return (
    <div className={`container ${theme}`}>
      <header>
        <h1>Made by</h1>
      </header>
      <main>
        <div className="team-member">
          <img src={thej} alt="Team Member 1" />
          <h2>Thejaswini L.G.S.</h2>
          <p>22BCE2389</p>
          <p>+919994750698</p>
        </div>
        <div className="team-member">
          <img src={shane} alt="Team Member 2" />
          <h2>Shane Shaji Thomas</h2>
          <p>22BCE3649</p>
          <p>+918714410574</p>
        </div>
        <div className="team-member">
          <img src={aravind} alt="Team Member 3" />
          <h2>Aravind Ajay</h2>
          <p>22BCE3665</p>
          <p>+918790140451</p>
        </div>
      </main>
      <p className="para">This project was made using the help of React and openweathermap.org API<br></br>Under the guidance of Dr. Umadevi</p>
    </div>
  );
}

export default aboutUs;
