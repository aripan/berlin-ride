import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ResultScreenDayTicket from "./ResultScreenDayTicket";

const QuestionnairesDayTicket = () => {
  const questions = [
    {
      questionText: "Are you looking for a day ticket?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "Are you travelling in a group?",
      answerOptions: [
        { answerText: "Yes i am in a group" },
        { answerText: "No i am not in a group" },
      ],
    },
    {
      questionText: "How many people are there in the group?",
      answerOptions: [
        { answerText: "10 or less than 10" },
        { answerText: "5 or less than 5" },
      ],
    },
    {
      questionText: "Are you a school student(up to grade 8)?",
      answerOptions: [
        { answerText: "Yes i am a student" },
        { answerText: "No i am not or i am older than that" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [group, setGroup] = useState("Not in a group");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [studentGroup, setStudentGroup] = useState("");
  const [showResult, setShowResult] = useState(false);
  let history = useHistory();

  const handleAnswerButtonClick = (answer) => {
    if (answer === "No") {
      history.push("/questionnaires/senior");
    }

    if (answer === "Yes i am in a group") {
      setGroup(answer);
    }
    if (answer === "No i am not in a group") {
      setShowResult(true);
    }
    if (answer === "5 or less than 5") {
      setNumberOfPeople(answer);
      setShowResult(true);
    }

    if (answer === "10 or less than 10") {
      setNumberOfPeople(answer);
    }

    if (
      answer === "Yes i am a student" ||
      answer === "No i am not or i am older than that"
    ) {
      setStudentGroup(answer);
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
          <ResultScreenDayTicket
            group={group}
            numberOfPeople={numberOfPeople}
            studentGroup={studentGroup}
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

export default QuestionnairesDayTicket;
