import React, { useEffect, useReducer, useState } from "react";
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
  const handleSuggestedResult = () => {
    if (studentIdI === "Yes i have a student ID I") {
      dispatch({
        type: "STUDENT_ID_I",
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
  };

  useEffect(() => {
    if (state.ticket.updatedTicket) {
      setTicketInfo(state.ticket.updatedTicket.tickets);

      setCarriages(state.ticket.updatedTicket["Conditions of carriage"]);
    }
  }, [state.ticket.updatedTicket]);
  return (
    <div>
      <h4>Details we got from you:</h4>
      <ul>
        <li>Are you a student or trainee: Yes</li>
        <li>Do you have a student ID I: {studentIdI}</li>
        <li>Do you have a student ID II: {studentIdII}</li>
        <li>Are you eligible to buy a semester ticket: {semesterTicket}</li>
        <li>
          Are you attending any professional training or vocational courses:{" "}
          {vbbTicket}{" "}
        </li>
      </ul>
      <button onClick={handleSuggestedResult}>Click here</button>
      {ticketInfo.map((ticket, index) => (
        <p key={index}>{ticket}</p>
      ))}
      {state.ticket.updatedTicket && (
        <>
          <p>Validity: {state.ticket.updatedTicket.Validity}</p>
          <p>
            Travel Validity: {state.ticket.updatedTicket["Travel validity"]}
          </p>
          <p>Requirements: {state.ticket.updatedTicket.Requirements}</p>
        </>
      )}

      {carriages.map((carriage, index) => (
        <p key={index}>{carriage}</p>
      ))}
    </div>
  );
};

export default ResultScreenStudent;
