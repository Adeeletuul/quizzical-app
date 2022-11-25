import { nanoid } from "nanoid";
import Blob from "./Blob";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./QuizComponents/Question.js";
import ResultsFooter from "./QuizComponents/ResultsFooter";
import QuizFooter from "./QuizComponents/QuizFooter";

const Quiz = () => {
  const API_URL = "https://opentdb.com/api.php?amount=5";

  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setQuizData(
          data.results.map((result) => {
            return {
              id: nanoid(),
              question: result.question,
              correct_answer: result.correct_answer,
              incorrect_answers: result.incorrect_answers,
              answers: [
                ...result.incorrect_answers,
                result.correct_answer,
              ].sort(() => Math.random() - 0.5),
              selectedAnswer: "",
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, [reset]);

  function choosenAnswer(event) {
    const { name, value } = event.target;
    setQuizData(
      quizData.map((question) => {
        if (question.id === name) {
          question.selectedAnswer = value;
        }
        return question;
      })
    );
  }

  function checkAnswers() {
    let correctAnswers = 0;
    quizData.map((question) => {
      if (question.selectedAnswer === question.correct_answer) {
        correctAnswers++;
      }
      return correctAnswers;
    });
    setScore(correctAnswers);
    setShowResults(true);
  }

  let navigate = useNavigate();

  function playAgain() {
    setShowResults(false);
    setScore(0);
    setQuizData([]);
    setReset((prevState) => prevState + 1);
    navigate("/");
  }

  return (
    <>
      <div className="quiz-container">
        {quizData.map((question) => (
          <Question
            key={question.id}
            quizData={quizData}
            question={question}
            setScore={setScore}
            showResults={showResults}
            choosenAnswer={choosenAnswer}
          />
        ))}
        {showResults ? (
          <ResultsFooter
            score={score}
            reset={reset}
            setReset={setReset}
            playAgain={playAgain}
          />
        ) : (
          <QuizFooter checkAnswers={checkAnswers} />
        )}

        <div className="quiz-blob-top">
          <Blob color="#FFFAD1" />
        </div>
        <div className="quiz-blob-bottom">
          <Blob color="#DEEBF8" />
        </div>
      </div>
    </>
  );
};

export default Quiz;
