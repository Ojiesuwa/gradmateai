import React from "react";
import "./GenerationLoadingScreen.css";

const GenerationLoadingScreen = () => {
  return (
    <div className="GenerationLoadingScreen">
      <p className="loading-title">Generating your report</p>
      <div className="loading-bar"></div>
      <p className="loading-progress"> 30%</p>
    </div>
  );
};

export default GenerationLoadingScreen;
