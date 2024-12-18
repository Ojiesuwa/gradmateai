import React from "react";
import "./ProjectPreview.css";
import { useNavigate } from "react-router-dom";
import pageLinks from "../../site/pageLinks";

const ProjectPreview = () => {
  const navigate = useNavigate();
  return (
    <div
      className="ProjectPreview"
      onClick={() => navigate(pageLinks.surveyPage.baseUrl + "/2")}
    >
      <div className="left-skew-wrapper">
        <i className="fa-solid fa-square-poll-horizontal"></i>
        <p className="project-title">
          A report on The Evolution of Pre-Colonial Trade Networks in Nigeria
          and Their Impact on Modern Economic Development
        </p>
      </div>
      <div className="right-skew-wrapper">
        <i className="fa-solid fa-clock"></i>
        <p>Created on Oct 13th, 2024</p>
      </div>
    </div>
  );
};

export default ProjectPreview;
