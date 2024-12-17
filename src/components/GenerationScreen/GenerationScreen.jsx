import React from "react";
import "./GenerationScreen.css";
import GenerationLoadingScreen from "../GenerationLoadingScreen/GenerationLoadingScreen";
import GenerationCompleteScreen from "../GenerationCompleteScreen/GenerationCompleteScreen";

const GenerationScreen = () => {
  return (
    <div className="GenerationScreen gen-screen-inactive">
      <i className="fa-regular fa-chevron-down"></i>
      {/* <GenerationLoadingScreen /> */}
      <GenerationCompleteScreen />
    </div>
  );
};

export default GenerationScreen;
