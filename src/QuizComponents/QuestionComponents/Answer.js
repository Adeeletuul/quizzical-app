import React from "react";
import parse from "html-react-parser";

const Answer = ({ question, showResults, chooseAnswer, answer }) => {
  function getAnswerClass() {
    if (showResults === true) {
      if (answer === question.correctAnswer) {
        return "correct-answer";
      } else if (
        answer === question.selectedAnswer &&
        question.incorrectAnswers.includes(question.selectedAnswer)
      ) {
        return "incorrect-answer";
      } else {
        return "results-answer";
      }
    } else {
      if (question.selectedAnswer === answer) {
        return "answer-checked";
      } else {
        return "";
      }
    }
  }

  return (
    <div key={answer}>
      <input
        type="radio"
        id={question.id + answer}
        name={question.id}
        value={answer}
        checked={question.selectedAnswer === answer}
        onChange={chooseAnswer}
      />
      <label
        className={`answer ${getAnswerClass(question, answer)}`}
        htmlFor={question.id + answer}
      >
        {parse(answer)}
      </label>
    </div>
  );
};

export default Answer;
