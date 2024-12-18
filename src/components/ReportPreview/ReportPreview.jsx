import React from "react";
import "./ReportPreview.css";
import GeneratedReport from "../../assets/generation-complete.png";

const ReportPreview = () => {
  return (
    <div className="ReportPreview">
      <img src={GeneratedReport} alt="" className="report-preview-image" />
      <div className="information-wrapper">
        <p className="report-preview-title">The Evolution of Pre-C ...</p>
        <p className="report-preview-date">
          <i className="fa-solid fa-file"></i>
          <span>Created on Oct 12, 2024</span>
        </p>
      </div>
    </div>
  );
};

export default ReportPreview;
