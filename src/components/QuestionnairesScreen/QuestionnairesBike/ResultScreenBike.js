import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { bikeReducer, bikeState } from "../../reducers/bikeReducer/bikeReducer";

const ResultScreenBike = ({ selectedOption }) => {
  const [state, dispatch] = useReducer(bikeReducer, bikeState);
  const [ticketInfo, setTicketInfo] = useState([]);

  const handleSuggestedResult = () => {
    if (selectedOption === "Bicycle single ticket") {
      dispatch({
        type: "BICYCLE_SINGLE_TICKET",
        title: "Bicycle single ticket",
        tickets: [
          "Bicycle short trip ticket - €1.40",
          "Bicycle single ticket AB - €2.10",
          "Bicycle single ticket BC - €2.40",
          "Bicycle single ticket ABC - €2.70",
        ],

        Validity: "2 hours in one direction, changes permitted",

        "Travel validity":
          "Bicycles can be taken on S-Bahn and underground trains, on Deutsche Bahn local railways, and on trams. But bicycles are not permitted on busses ",
      });
    }
    if (selectedOption === "24 hour bicycle ticket") {
      dispatch({
        type: "BICYCLE_TICKET_24",
        title: "24 hour bicycle ticket",
        tickets: [
          "24-hour bicycle ticket Berlin AB - €5.00",
          "24-hour bicycle ticket Berlin BC - €5.40",
          "24-hour bicycle ticket Berlin ABC - €5.60",
        ],

        Validity:
          "The 24-hour bicycle ticket is valid for 24 hours from the time of validation.",

        "Travel validity":
          "Bicycles can be taken on S-Bahn and underground trains, on Deutsche Bahn local railways, and on trams. But bicycles are not permitted on busses ",
      });
    }
    if (selectedOption === "Bicycle monthly ticket") {
      dispatch({
        type: "BICYCLE_TICKET_MONTHLY",
        title: "Bicycle monthly ticket",
        tickets: [
          "Bicycle monthly ticket Berlin AB - €11.50",
          "Bicycle monthly ticket Berlin ABC - €14.40",
        ],

        Validity:
          "The bicycle monthly ticket is issued for use from any day and is valid until midnight at the end of the last day printed on the ticket.",

        "Travel validity":
          "Bicycles can be taken on S-Bahn and underground trains, on Deutsche Bahn local railways, and on trams. But bicycles are not permitted on busses ",
      });
    }
  };

  useEffect(() => {
    if (state.ticket.updatedTicket) {
      setTicketInfo(state.ticket.updatedTicket.tickets);
    }
  }, [state.ticket.updatedTicket]);
  return (
    <div className="result-container">
      <div className="details">
        <h4>Details we got from you:</h4>
        <p>
          Do you have a bicycle to take along:{" "}
          <span className="details-answer">Yes</span>
        </p>
        <br />
        <p>
          Selected option:{" "}
          <span className="details-answer">{selectedOption}</span>{" "}
        </p>{" "}
        <br />
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

export default ResultScreenBike;
