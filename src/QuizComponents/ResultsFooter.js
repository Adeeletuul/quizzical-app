import React from "react";

const Results = ({ score, playAgain }) => {
  return (
    <div className="results-container">
      <div className="results">You scored {score}/5 correct answers</div>
      <button className="playAgain-btn" onClick={playAgain}>
        Play again
      </button>
    </div>
  );
};

export default Results;
