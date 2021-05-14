import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="result-container">
      <div className="details">
        <h4>Details we got from you:</h4>
        <p>
          Are you 65years old or older than that:{" "}
          <span className="details-answer">Yes</span>
        </p>
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

            <h4>Requirements:</h4>
            <div className="requirements">
              <p> {state.ticket.updatedTicket.Requirements}</p>
            </div>
            <h4>Travel validity:</h4>
            <div className="travel-validity">
              <p> {state.ticket.updatedTicket["Travel validity"]}</p>
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

export default ResultScreenSenior;
