import Blob from "./Blob";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  let navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <>
      <div className="intro-blob-top">
        <Blob color="#FFFAD1" />
      </div>
      <div className="intro-container">
        <h1 className="intro-title"> Quizzical</h1>
        <p className="intro-text">Some description if needed</p>
        <button className="intro-btn" onClick={startQuiz}>
          Start quiz
        </button>
      </div>
      <div className="intro-blob-bottom">
        <Blob color="#DEEBF8" />
      </div>
    </>
  );
};

export default Intro;
