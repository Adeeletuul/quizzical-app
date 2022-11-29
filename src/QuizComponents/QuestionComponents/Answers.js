import React from "react";
import Answer from "./Answer";

const Answers = ({ question, showResults, chooseAnswer }) => {
  return (
    <div className="answers-container">
      {question.answers.map((answer) => (
        <Answer
          key={answer}
          answer={answer}
          question={question}
          showResults={showResults}
          chooseAnswer={chooseAnswer}
        />
      ))}
    </div>
  );
};

export default Answers;
