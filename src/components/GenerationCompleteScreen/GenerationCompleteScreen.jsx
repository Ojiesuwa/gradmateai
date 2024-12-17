import React from "react";
import "./GenerationCompleteScreen.css";
import GenerationComplete from "../../assets/generation-complete.png";
const GenerationCompleteScreen = () => {
  return (
    <div className="GenerationCompleteScreen">
      <img src={GenerationComplete} alt="" className="report-preview" />
      <div className="generation-success-message">
        <i className="fa-solid fa-circle-check"></i>
        <p>Report successfully built</p>
      </div>
      <p className="generated-report-title">
        A report on The Evolution of Pre-Colonial Trade Networks in Nigeria and
        Their Impact on Modern Economic Development
      </p>
      <button className="purchase-btn">Purchase Report</button>
    </div>
  );
};

export default GenerationCompleteScreen;
