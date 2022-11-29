import React from "react";
import parse from "html-react-parser";

const QuestionItem = ({ question }) => {
  return <h3 className="question">{parse(question)}</h3>;
};

export default QuestionItem;
