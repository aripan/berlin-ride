import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ResultScreenSenior from "./ResultScreenSenior";

const QuestionnairesSenior = () => {
  const questions = [
    {
      questionText: "Are you 65years old or older than that?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
  ];

  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/");
    } else {
      setShowResult(true);
    }
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Welcome, {sessionStorage.getItem("user")}
      </h2>
      <div className="question-container">
        {showResult ? (
          <ResultScreenSenior />
        ) : (
          <>
            <div className="question-section">
              <div className="question-text">{questions[0].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[0].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.answerText)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
      <br />
      <br />
    </>
  );
};

export default QuestionnairesSenior;
