import React, { useState } from "react";
import { useHistory } from "react-router";
import ResultScreenBike from "./ResultScreenBike";

const QuestionnairesBike = () => {
  const questions = [
    {
      questionText: "Do you have a bicycle to take along?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "There are three options to choose bicycle tickets?",
      answerOptions: [
        { answerText: "Bicycle single ticket" },
        { answerText: "24 hour bicycle ticket" },
        { answerText: "Bicycle monthly ticket" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/");
    }

    if (
      answer === "Bicycle single ticket" ||
      answer === "24 hour bicycle ticket" ||
      answer === "Bicycle monthly ticket"
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
    <div>
      {showResult ? (
        <ResultScreenBike selectedOption={selectedOption} />
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

export default QuestionnairesBike;
