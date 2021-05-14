import React, { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {
  studentReducer,
  studentState,
} from "../../reducers/studentReducer/studentReducer";

const ResultScreenStudent = ({
  studentIdI,
  studentIdII,
  semesterTicket,
  vbbTicket,
}) => {
  const [state, dispatch] = useReducer(studentReducer, studentState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);
  let history = useHistory();

  const handleSuggestedResult = () => {
    if (studentIdI === "Yes i have a student ID I") {
      dispatch({
        type: "STUDENT_ID_I",
        title: "School student ticket with student ID I",
        tickets: ["School student ticket with student ID I - free of charge"],

        Validity: "As long as the conditions are fulfilled",

        "Travel validity":
          "Fare zone Berlin AB and extension ticket is required for Berlin C zone",

        Requirements: "valid student ID I of current school year",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      });
    }
    if (studentIdII === "Yes i have a student ID II") {
      dispatch({
        type: "STUDENT_ID_II",
        title: "Monthly tickets for trainees and school students",
        tickets: [
          "VBB subscription trainee/student II Berlin AB - €58.00(monthly ticket), €534.00(Annual ticket- paid monthly)",
          "VBB subscription trainee/student II Berlin BC - €63.80(monthly ticket), €625.00(Annual ticket- paid monthly)",
          "VBB subscription trainee/student II Berlin ABC - €77.50(monthly ticket), €760.00(Annual ticket- paid monthly)",
        ],

        Validity: "It is valid until the printed last day at midnight.",

        "Travel validity": "As you choose",

        Requirements: "valid student ID II",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      });
    }
    if (semesterTicket === "Yes i am eligible to buy") {
      dispatch({
        type: "SEMESTER_TICKET",
        title: "Semesterticket",
        tickets: ["SemesterTicket - included in semester registration"],

        Validity: "One semester",

        "Travel validity": "Fare zone Berlin ABC",

        Requirements: "students with a matriculation number",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      });
    }
    if (vbbTicket === "Yes i am attending") {
      dispatch({
        type: "TRAINEE_TICKET",
        title: "VBB subscription trainee",
        tickets: [
          "VBB subscription trainee - €384.00 (subscription - paid monthly), €365.00 (subscription - paid annually)",
        ],

        Validity: "subscription for 12 months",

        "Travel validity": "Entire VBB-network",

        Requirements:
          "Valid for a defined group of eligible training professions, students on vocational courses",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      });
    }

    if (vbbTicket === "No i am not attending") {
      alert("You have not answered the question properly.");
      history.push("/");
    }
  };

  useEffect(() => {
    if (state.ticket.updatedTicket) {
      setTicketInfo(state.ticket.updatedTicket.tickets);
      setCarriages(state.ticket.updatedTicket["Conditions of carriage"]);
    }
  }, [state.ticket.updatedTicket]);
  return (
    <div className="result-container">
      <div className="details">
        <h4>Details we got from you:</h4>
        <ul style={{ listStyle: "none" }}>
          <li>
            Are you a student or trainee:{" "}
            <span className="details-answer">Yes</span>
          </li>

          {studentIdI && (
            <li>
              Do you have a student ID I:{" "}
              <span className="details-answer">{studentIdI}</span>
            </li>
          )}
          <br />
          {studentIdII && (
            <li>
              Do you have a student ID II:{" "}
              <span className="details-answer">{studentIdII}</span>
            </li>
          )}
          <br />
          {semesterTicket && (
            <li>
              Are you eligible to buy a semester ticket:{" "}
              <span className="details-answer">{semesterTicket}</span>
            </li>
          )}
          <br />
          {vbbTicket && (
            <li>
              Are you attending any professional training or vocational courses:{" "}
              <span className="details-answer">{vbbTicket}</span>
            </li>
          )}
          <br />
        </ul>
      </div>

      <button onClick={handleSuggestedResult}>
        Click here to see the suggestions
      </button>
      <div className="recommendation-container">
        {state.ticket.updatedTicket && (
          <>
            <h4 style={{ textDecoration: "underline", textAlign: "center" }}>
              {state.ticket.updatedTicket?.title}
            </h4>
            <h4>Tickets:</h4>
            <div className="tickets">
              {ticketInfo.map((ticket, index) => (
                <p key={index}>{ticket}</p>
              ))}
            </div>

            <h4>Validity:</h4>
            <div className="validity">
              <p> {state.ticket.updatedTicket.Validity}</p>
            </div>
            <h4>Travel validity:</h4>
            <div className="travel-validity">
              <p> {state.ticket.updatedTicket["Travel validity"]}</p>
            </div>
            <h4>Requirements:</h4>
            <div className="requirements">
              <p> {state.ticket.updatedTicket.Requirements}</p>
            </div>

            <h4>Condition of carriages:</h4>
            <div className="carriages">
              {carriages.map((carriage, index) => (
                <li key={index}>{carriage}</li>
              ))}
            </div>
            <h5>
              N.B.: Berlin AB (Berlin city area) / Berlin ABC (Berlin plus
              surrounding area incl. Potsdam and BER Airport)
              <br />
              Do you need to a bicycle ticket also?{" "}
              <Link to="/questionnaires/bike">
                Tariff information - Bicycle tickets
              </Link>
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultScreenStudent;
