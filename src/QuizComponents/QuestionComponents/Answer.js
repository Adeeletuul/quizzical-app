import React from "react";
import parse from "html-react-parser";

const Answer = ({ question, showResults, choosenAnswer, answer }) => {
  function getAnswerClass(question, answer) {
    if (showResults === true) {
      if (answer === question.correct_answer) {
        return "correct-answer";
      } else if (
        answer === question.selectedAnswer &&
        question.incorrect_answers.includes(question.selectedAnswer)
      ) {
        return "incorrect-answer";
      } else {
        return "results-answer";
      }
    } else {
      if (question.selectedAnswer === answer) {
        return "answer-checked";
      } else {
        return "answer";
      }
    }
  }

  return (
    <div className={`answer ${getAnswerClass(question, answer)}`} key={answer}>
      <input
        type="radio"
        id={answer}
        name={question.id}
        value={answer}
        checked={question.selectedAnswer === answer}
        onChange={choosenAnswer}
      />
      <label htmlFor={answer}>{parse(answer)}</label>
    </div>
  );
};

export default Answer;
