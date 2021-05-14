import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import {
  nearByReducer,
  nearByState,
} from "../../reducers/nearByReducer/nearByReducer";

const ResultScreenNearBy = ({ selectedOption }) => {
  const [state, dispatch] = useReducer(nearByReducer, nearByState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);

  const handleSuggestedResult = () => {
    if (selectedOption === "Single ticket") {
      dispatch({
        type: "SINGLE_TICKET",
        title: "Single ticket",
        tickets: [
          "Single ticket Berlin AB - €3.00 - reduced fare €1.90",
          "Single ticket Berlin BC - €3.50 - reduced fare €2.40",
          "Single ticket Berlin ABC - €3.80 - reduced fare €2.70",
        ],

        Validity: "2 hours in Berlin fare zones",

        "Travel validity":
          "One journey in one direction; changes permitted Round and return trips are not permitted",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
        ],
      });
    }
    if (selectedOption === "Short trip ticket") {
      dispatch({
        type: "SHORT_TRIP_TICKET",
        title: "Short trip ticket",
        tickets: ["Short trip ticket - €2.00 - reduced fare  €1.50"],

        Validity:
          "valid for mentioned number of stations / 20 minutes (mobile tickets)",

        "Travel validity": "3 stations with S-Bahn/ 6 stations on trams",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
        ],
      });
    }
    if (selectedOption === "4-trip-ticket") {
      dispatch({
        type: "FOUR_TRIP_TICKET",
        title: "4-trip-ticket",
        tickets: [
          "4-trip ticket Berlin AB - €9.40 - reduced fare €5.80",
          "4-trip ticket Berlin BC - €12.60 - reduced fare €8.60",
          "4-trip ticket Berlin ABC - €13.80 - reduced fare €9.80",
          "4-short trip ticket Berlin - €6.00 - reduced fare €4.60",
        ],

        Validity: "Same as for single ticket or short trip ticket",

        "Travel validity": "Available as single ticket or short trip ticket",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
        ],
      });
    }
    if (selectedOption === "Extension tickets") {
      dispatch({
        type: "EXTENSION_TICKET",
        title: "Extension tickets",
        tickets: [
          "Extension ticket A/C - €1.80 - reduced fare €1.40",
          "Extension ticket A/C 24-hour ticket - €3.70 - no reduced fare",
          "Extension ticket Potsdam <--> Berlin AB - €3.00 - no reduced fare",
        ],

        Validity: "120 minutes in the indicated Berlin fare zone",

        "Travel validity": "Fare zone Berlin A or C",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
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
    <div className="result-container">
      <div className="details">
        <h4>Details we got from you:</h4>
        <p>
          Will you travel to a nearby place or do you need a short trip ticket:
          <span className="details-answer">Yes</span>
        </p>
        <br />
        <p>
          Selected option:{" "}
          <span className="details-answer">{selectedOption}</span>{" "}
        </p>
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

export default ResultScreenNearBy;
