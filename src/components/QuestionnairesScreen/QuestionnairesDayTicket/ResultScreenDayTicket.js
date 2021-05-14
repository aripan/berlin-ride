import React, { useEffect, useReducer, useState } from "react";
import {
  dayTicketReducer,
  dayTicketState,
} from "../../reducers/dayTicketReducer/dayTicketReducer";

const ResultScreenDayTicket = ({ group, numberOfPeople, studentGroup }) => {
  const [state, dispatch] = useReducer(dayTicketReducer, dayTicketState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);

  const handleSuggestedResult = () => {
    if (
      group === "Yes i am in a group" &&
      numberOfPeople === "5 or less than 5"
    ) {
      dispatch({
        type: "SMALL_GROUP_5",
        title: "24-hour small group ticket",
        tickets: [
          "24-hour small group ticket Berlin AB - €25.50 - no reduced fare",
          "24-hour small group ticket Berlin BC - €26.00 - no reduced fare",
          "24-hour small group ticket Berlin ABC - €26.50 - no reduced fare",
        ],

        Validity: "Valid for 24 hours from the time of validation",
        "Travel validity":
          "Fare zone Berlin AB, BC, ABC - for any number of shared rides for up to 5 people",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }
    if (
      group === "Yes i am in a group" &&
      numberOfPeople === "10 or less than 10" &&
      studentGroup === "Yes i am a student"
    ) {
      dispatch({
        type: "STUDENT_GROUP_10",
        title: "Group day ticket for school students",
        tickets: [
          "Group day ticket for school students Berlin AB - €3.30",
          "Group day ticket for school students Berlin ABC - €3.40",
        ],
        Validity: "Valid for 24 hours from the time of validation",
        "Travel validity":
          "Fare zone Berlin AB, ABC - for any number of shared rides for school groups with at least 10 students (up to grade 8)",

        "Conditions of carriage": [
          "One accompanying adult(at the same price)",
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }
    if (
      group === "Not in a group" ||
      studentGroup === "No i am not or i am older than that"
    ) {
      dispatch({
        type: "TICKET_24",
        title: "24-hour ticket",
        tickets: [
          "24-hour ticket Berlin AB - €8.80 - reduced fare  €5.60",
          "24-hour ticket Berlin BC - €9.20 - reduced fare  €5.90",
          "24-hour ticket Berlin ABC - €10.00 - reduced fare  €6.10",
        ],

        Validity: "Valid for 24 hours from the time of validation",
        "Travel validity": "Fare zone Berlin AB, BC, ABC",
        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "Up to 3 children between the ages of 6 and 14 may be taken along as well, however, this is only valid if the ticket holder is at least 15 years old",
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
        <li>Are you looking for a day ticket: Yes</li>
        <li>Are you travelling in a group: {group}</li>
        {!(group === "Not in a group") && (
          <>
            <li>How many people are there in the group: {numberOfPeople}</li>
            {studentGroup && (
              <li>Are you a school student(up to grade 8): {studentGroup}</li>
            )}
          </>
        )}
      </ul>

      <button onClick={handleSuggestedResult}>Recommended ticket</button>
      <h4 style={{ textDecoration: "underline" }}>
        {state.ticket.updatedTicket?.title}
      </h4>
      {state.ticket.updatedTicket ? (
        <>
          {" "}
          <h3>Ticket:</h3>
          {ticketInfo.map((ticket, index) => (
            <p key={index}>{ticket}</p>
          ))}
          <h3>Validity:</h3>
          <p>{state.ticket.updatedTicket.Validity}</p>
          <h3>Travel Validity:</h3>
          <p>{state.ticket.updatedTicket["Travel validity"]}</p>
          <h3>Conditions of carriages:</h3>
          {carriages.map((carriage, index) => (
            <p key={index}>{carriage}</p>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default ResultScreenDayTicket;
