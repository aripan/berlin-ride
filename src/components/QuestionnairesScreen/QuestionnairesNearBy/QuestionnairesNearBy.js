import React, { useState } from "react";
import { useHistory } from "react-router";
import ResultScreenNearBy from "./ResultScreenNearBy";

const QuestionnairesNearBy = () => {
  const questions = [
    {
      questionText:
        "Will you travel to a nearby place or do you need a short trip ticket?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "There are four options to choose?",
      answerOptions: [
        { answerText: "Single ticket" },
        { answerText: "Short trip ticket" },
        { answerText: "4-trip-ticket" },
        { answerText: "Extension tickets" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Single ticket");
  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/questionnaires/dayTicket");
    }

    if (
      answer === "Single ticket" ||
      answer === "Short trip ticket" ||
      answer === "4-trip-ticket" ||
      answer === "Extension tickets"
    ) {
      setSelectedOption(answer);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="question-container">
      {showResult ? (
        <ResultScreenNearBy selectedOption={selectedOption} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.answerText)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionnairesNearBy;
