import React from "react";
import Answers from "./QuestionComponents/Answers";
import QuestionItem from "./QuestionComponents/QuestionItem";

const Question = ({ question, showResults, choosenAnswer }) => {
  return (
    <div className="question-answer-container" key={question.id}>
      <QuestionItem question={question} />
      <Answers
        question={question}
        showResults={showResults}
        choosenAnswer={choosenAnswer}
      />
    </div>
  );
};
export default Question;
