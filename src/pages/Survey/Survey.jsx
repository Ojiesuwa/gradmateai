import React from "react";
import "./Survey.css";
import SurveyQuestion from "../../components/SurveyQuestion/SurveyQuestion";
import SurveyPDFCard from "../../components/SurveyPDFCard/SurveyPDFCard";
import GenerationScreen from "../../components/GenerationScreen/GenerationScreen";

const Survey = () => {
  return (
    <div className="Survey custom-page">
      <div className="survey-information-container fade-down">
        <div className="information-wrapper">
          <p className="survey-title">
            Questionnaire : A report on The Evolution of Pre-Colonial ...
          </p>
          <p className="survey-title-detail">
            Let’s generate your customized report! Fill out the form below to
            provide us with the details we need for a comprehensive and
            personalized perspective
          </p>
        </div>
        <div className="action-wrapper">
          <button className="reset-button">Reset Form</button>
          <button className="generate-button">Generate Report</button>
        </div>
      </div>
      <div className="survey-container">
        <div className="survey-form-container fade-right">
          <SurveyQuestion />
          <SurveyQuestion />
          <SurveyQuestion />
          <SurveyQuestion />
          <SurveyQuestion />
          <SurveyQuestion />
          <SurveyQuestion />
          <SurveyQuestion />
        </div>
        <div className="survey-file-add-container fade-left">
          <p className="reference-title">Reference PDF</p>
          <p className="small-text">
            To help us give you that personal touch to your citations and
            referencing, supply a list of PDFs relating to your research work{" "}
          </p>
          <div className="pdf-card-wrapper">
            <SurveyPDFCard />
            <SurveyPDFCard />
            <SurveyPDFCard />
          </div>
          <button className="pdf-add-btn">Add PDF</button>
        </div>
      </div>
      <GenerationScreen />
    </div>
  );
};

export default Survey;
