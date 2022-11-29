import React from "react";
import Answers from "./QuestionComponents/Answers";
import QuestionItem from "./QuestionComponents/QuestionItem";

const Question = ({ question, showResults, chooseAnswer }) => {
  return (
    <div className="question-answer-container" key={question.id}>
      <QuestionItem question={question.question} />
      <Answers
        question={question}
        showResults={showResults}
        chooseAnswer={chooseAnswer}
      />
    </div>
  );
};
export default Question;
