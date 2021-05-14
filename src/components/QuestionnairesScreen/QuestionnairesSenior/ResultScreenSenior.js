import React, { useEffect, useReducer, useState } from "react";
import {
  seniorReducer,
  seniorState,
} from "../../reducers/seniorReducer/seniorReducer";

const ResultScreenSenior = () => {
  const [state, dispatch] = useReducer(seniorReducer, seniorState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);

  const handleSuggestedResult = () => {
    dispatch({
      type: "TICKET_65PLUS",
      title: "VBB subscription ticket 65plus",
      tickets: [
        "VBB subscription ticket 65plus - €624.00(subscription - paid monthly), €605.00(subscription - paid annually) ",
      ],

      Requirements:
        "The VBB subscription ticket 65plus can be purchased by all persons aged 65 and above",

      "Travel validity":
        " Valid around the clock for unlimited trips within the entire VBB network",

      "Conditions of carriage": [
        "Children under 6 years of age",
        "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
        "1 dog",
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
      <p>Are you 65years old or older than that: Yes</p>
      <button onClick={handleSuggestedResult}>Recommended ticket</button>
      <h4 style={{ textDecoration: "underline" }}>
        {state.ticket.updatedTicket?.title}
      </h4>
      {ticketInfo.map((ticket, index) => (
        <p key={index}>{ticket}</p>
      ))}
      {state.ticket.updatedTicket && (
        <>
          <p>Requirements: {state.ticket.updatedTicket.Requirements}</p>
          <p>
            Travel Validity: {state.ticket.updatedTicket["Travel validity"]}
          </p>
        </>
      )}

      {carriages.map((carriage, index) => (
        <p key={index}>{carriage}</p>
      ))}
    </div>
  );
};

export default ResultScreenSenior;
