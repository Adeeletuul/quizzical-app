import React from "react";
import Answer from "./Answer";

const Answers = ({ question, showResults, choosenAnswer }) => {
  return (
    <div className="answers-container">
      {question.answers.map((answer) => (
        <Answer
          key={answer}
          answer={answer}
          question={question}
          showResults={showResults}
          choosenAnswer={choosenAnswer}
        />
      ))}
    </div>
  );
};

export default Answers;
