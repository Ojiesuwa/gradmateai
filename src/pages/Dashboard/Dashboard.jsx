import React from "react";
import "./Dashboard.css";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import ReportPreview from "../../components/ReportPreview/ReportPreview";

const Dashboard = () => {
  return (
    <div className="Dashboard custom-page">
      <div className="project-list-container fade-down">
        <div className="project-control-wrapper">
          <p className="bold-text">Projects</p>
          <button>Create Project</button>
        </div>
        <div className="project-preview-list">
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
        </div>
      </div>
      <div className="report-list-container fade-up">
        <div className="report-title-wrapper">
          <p className="bold-text">Generated Report</p>
        </div>
        <div className="report-preview-list">
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
          <ReportPreview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
