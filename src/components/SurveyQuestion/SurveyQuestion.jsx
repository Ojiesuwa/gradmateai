import React from "react";
import "./SurveyQuestion.css";

const SurveyQuestion = () => {
  return (
    <div className="SurveyQuestion">
      <div className="question-number">
        <p>1. </p>
      </div>
      <div className="question-content">
        <p className="question">
          To create your customized report, please share your key achievements
          from this academic year. Include academic milestones, awards,
          completed projects, internships, leadership roles, or extracurricular
          contributions. The more detail you provide, the better we can showcase
          your accomplishments and create a report that reflects your efforts
          and experiences accurately
        </p>
        <textarea name="" id="" placeholder="Enter value here"></textarea>
        <button className="survey-question-btn">Autogenerate</button>
      </div>
    </div>
  );
};

export default SurveyQuestion;
