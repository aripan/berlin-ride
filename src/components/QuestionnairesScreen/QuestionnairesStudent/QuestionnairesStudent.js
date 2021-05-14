import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ResultScreenStudent from "./ResultScreenStudent";

const QuestionnairesStudent = () => {
  const questions = [
    {
      questionText: "Are you a student or trainee?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "Do you have a student ID I?",
      answerOptions: [
        { answerText: "Yes i have a student ID I" },
        { answerText: "No i do not have ID I" },
      ],
    },
    {
      questionText: "Do you have a student ID II?",
      answerOptions: [
        { answerText: "Yes i have a student ID II" },
        { answerText: "No i do not have ID II" },
      ],
    },
    {
      questionText: "Are you eligible to buy a semester ticket?",
      answerOptions: [
        { answerText: "Yes i am eligible to buy" },
        { answerText: "No i am not eligible" },
      ],
    },
    {
      questionText:
        "Are you attending any professional training or vocational courses?",
      answerOptions: [
        { answerText: "Yes i am attending" },
        { answerText: "No i am not attending" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [studentIdI, setStudentIdI] = useState("");
  const [studentIdII, setStudentIdII] = useState("");
  const [semesterTicket, setSemesterTicket] = useState("");
  const [vbbTicket, setVbbTicket] = useState("");
  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/questionnaires/longPeriod");
    }

    if (answer === "Yes i have a student ID I") {
      setStudentIdI(answer);
      setShowResult(true);
    } else if (answer === "No i do not have ID I") {
      setStudentIdI(answer);
    }

    if (answer === "Yes i have a student ID II") {
      setStudentIdII(answer);
      setShowResult(true);
    } else if (answer === "No i do not have ID II") {
      setStudentIdII(answer);
    }

    if (answer === "Yes i am eligible to buy") {
      setSemesterTicket(answer);
      setShowResult(true);
    } else if (answer === "No i am not eligible") {
      setSemesterTicket(answer);
    }

    if (answer === "Yes i am attending" || answer === "No i am not attending") {
      setVbbTicket(answer);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
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
          <ResultScreenStudent
            studentIdI={studentIdI}
            studentIdII={studentIdII}
            semesterTicket={semesterTicket}
            vbbTicket={vbbTicket}
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
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
      <br />
      <br />
    </>
  );
};

export default QuestionnairesStudent;
