import React, { useState } from "react";
import { useHistory } from "react-router";
import ResultScreenTourist from "./ResultScreenTourist";

const QuestionnairesTourist = () => {
  const questions = [
    {
      questionText: "Are you a tourist?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "How long will you stay in Berlin?",
      answerOptions: [
        { answerText: "less than 4 days" },
        { answerText: "more than 4 days" },
        { answerText: "or even longer" },
      ],
    },
    {
      questionText: "Do you want to visit Museums?",
      answerOptions: [
        { answerText: "Yes i want to visit" },
        { answerText: "Not now" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [duration, setDuration] = useState("");
  const [visitMuseum, setVisitMuseum] = useState("");
  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/questionnaires/student");
    }

    if (answer === "less than 4 days" || answer === "more than 4 days") {
      setDuration(answer);
    }
    if (answer === "Yes i want to visit" || answer === "Not now") {
      setVisitMuseum(answer);
    }

    if (answer === "or even longer") {
      history.push("/questionnaires/longPeriod");
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
        <ResultScreenTourist duration={duration} visitMuseum={visitMuseum} />
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

export default QuestionnairesTourist;
