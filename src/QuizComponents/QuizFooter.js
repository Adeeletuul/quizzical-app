import React from "react";

const QuizFooter = ({ checkAnswers }) => {
  return (
    <div className="check-btn-container">
      <button className="check-btn" onClick={checkAnswers}>
        Check answers
      </button>
    </div>
  );
};

export default QuizFooter;
