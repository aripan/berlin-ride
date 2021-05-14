import React, { useEffect, useReducer, useState } from "react";
import {
  weeklyReducer,
  weeklyState,
} from "../../reducers/weeklyReducer/weeklyReducer";

const ResultScreenWeekly = () => {
  const [state, dispatch] = useReducer(weeklyReducer, weeklyState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);

  const handleSuggestedResult = () => {
    dispatch({
      type: "TICKET_7",
      title: "7-day ticket (VBB eco-ticket)",
      tickets: [
        "7-day ticket VBB eco-ticket Berlin AB - €36.00",
        "7-day ticket VBB eco-ticket Berlin BC - €37.00",
        "7-day ticket VBB eco-ticket Berlin ABC - €43.00",
      ],

      "Travel validity": "Fare zone Berlin AB, BC, ABC",
      Transferability: "Transferable",

      "Conditions of carriage": [
        "Children under 6 years of age",
        "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
        "1 dog",
        "Plus up to four persons (but only one older than 14 years of age), Mon-Fri from 8 pm until 3 am on the next day, all day Sat, Sun, public holidays, and on 24/12 & 31/12",
      ],
    });
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
      <p>Do you need a ticket valid for 7 days: Yes</p>
      <button onClick={handleSuggestedResult}>Recommended ticket</button>
      <h4 style={{ textDecoration: "underline" }}>
        {state.ticket.updatedTicket?.title}
      </h4>
      {ticketInfo.map((ticket, index) => (
        <p key={index}>{ticket}</p>
      ))}
      {state.ticket.updatedTicket && (
        <>
          <p>
            Travel Validity: {state.ticket.updatedTicket["Travel validity"]}
          </p>
          <p>Transferability: {state.ticket.updatedTicket.Transferability}</p>
        </>
      )}

      {carriages.map((carriage, index) => (
        <p key={index}>{carriage}</p>
      ))}
    </div>
  );
};

export default ResultScreenWeekly;
