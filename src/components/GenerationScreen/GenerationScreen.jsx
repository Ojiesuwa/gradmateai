import React from "react";
import "./GenerationScreen.css";
import GenerationLoadingScreen from "../GenerationLoadingScreen/GenerationLoadingScreen";

const GenerationScreen = () => {
  return (
    <div className="GenerationScreen">
      <GenerationLoadingScreen />
    </div>
  );
};

export default GenerationScreen;
