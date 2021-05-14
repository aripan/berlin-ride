import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="result-container">
      <div className="details">
        <h4>Details we got from you:</h4>
        <p>
          Do you need a ticket valid for 7 days:{" "}
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

            <h4>Travel validity:</h4>
            <div className="travel-validity">
              <p> {state.ticket.updatedTicket["Travel validity"]}</p>
            </div>
            <h4>Transferability:</h4>
            <div className="travel-validity">
              <p> {state.ticket.updatedTicket.Transferability}</p>
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

export default ResultScreenWeekly;
