import React, { useState } from "react";
import { useHistory } from "react-router";
import ResultScreenWeekly from "./ResultScreenWeekly";

const QuestionnairesWeekly = () => {
  const questions = [
    {
      questionText: "Do you need a ticket valid for 7 days?",
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
      history.push("/questionnaires/nearby");
    } else {
      setShowResult(true);
    }
  };
  return (
    <div>
      {showResult ? (
        <ResultScreenWeekly />
      ) : (
        <>
          <div className="question-section">
            <div className="question-text">{questions[0].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[0].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.answerText)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionnairesWeekly;
