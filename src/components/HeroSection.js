import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Herosection.css";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Rock & Rogue</h1>
        <p>High Quality Professional Catering and Tour services</p>
        <div className="image-wrapper">
          <img src="../images/logo1.png" className="logo1"></img>
          <img src="../images/logo2.png" className="logo1"></img>
        </div>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Meet The Chef's
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
