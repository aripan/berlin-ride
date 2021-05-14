import React, { useState } from "react";
import { useHistory } from "react-router";
import ResultScreenLongPeriod from "./ResultScreenLongPeriod";

const QuestionnairesLongPeriod = () => {
  const questions = [
    {
      questionText: "Do you prefer to buy monthly or annual tickets?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "Do you have a berlinpass?",
      answerOptions: [
        { answerText: "Yes i have a berlinpass" },
        { answerText: "No i do not have a berlinpass" },
      ],
    },
    {
      questionText: "Do you want to save money by buying a 10 o’clock ticket?",
      answerOptions: [
        { answerText: "Yes i  would like to buy" },
        { answerText: "No i do not want" },
      ],
    },
    {
      questionText:
        "Are you looking for some other option such as VBB eco-ticket?",
      answerOptions: [
        { answerText: "Yes i want to see" },
        { answerText: "No i do not want" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [berlinpass, setBerlinpass] = useState("");
  const [ticket10, setTicket10] = useState("");
  const [ticketVBB, setTicketVBB] = useState("");
  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/questionnaires/weekly");
    }

    if (answer === "Yes i have a berlinpass") {
      setBerlinpass(answer);
      setShowResult(true);
    } else if (answer === "No i do not have a berlinpass") {
      setBerlinpass(answer);
    }

    if (answer === "Yes i  would like to buy") {
      setTicket10(answer);
      setShowResult(true);
    } else if (answer === "No i do not want") {
      setTicket10(answer);
    }
    if (answer === "Yes i want to see" || answer === "No i do not want") {
      setTicketVBB(answer);
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
        <ResultScreenLongPeriod
          berlinpass={berlinpass}
          ticket10={ticket10}
          ticketVBB={ticketVBB}
        />
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

export default QuestionnairesLongPeriod;
