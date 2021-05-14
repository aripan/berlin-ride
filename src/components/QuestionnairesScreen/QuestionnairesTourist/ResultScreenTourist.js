import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import {
  touristReducer,
  touristState,
} from "../../reducers/touristReducer/touristReducer";

const ResultScreenTourist = ({ duration, visitMuseum }) => {
  const [state, dispatch] = useReducer(touristReducer, touristState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);

  const handleSuggestedResult = () => {
    if (duration === "less than 4 days" && visitMuseum === "Not now") {
      dispatch({
        type: "LESS_FOUR_DAYS_NO_MUSEUM",
        title: "Berlin City Tour Cards",
        tickets: [
          "CityTourCard 48 hours AB: €19.90",
          "CityTourCard 48 hours ABC: €22.90",
          "CityTourCard 72 hours AB: €29.90",
          "CityTourCard 72 hours ABC: €33.90",
        ],

        Validity: "48hours/ 72 hours",

        "Conditions of carriage": [
          "Up to 3 children between ages 6 and 14",
          "Children under 6 years of age",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }

    if (
      duration === "less than 4 days" &&
      visitMuseum === "Yes i want to visit"
    ) {
      dispatch({
        type: "LESS_FOUR_DAYS_MUSEUM",
        title: "Berlin Welcome Cards",
        tickets: [
          "Welcome Card 48 hours AB: €23.00",
          "Welcome Card 48 hours ABC: €28.00",
          "Welcome Card 72 hours AB: €33.00",
          "Welcome Card 72 hours ABC: €38.00",
          "Welcome Card Museum Island AB: €55.00  incl. 72 hours free admission to all museums on Berlin’s Museum Island",
          "Welcome Card Museum Island ABC: €59.00  incl. 72 hours free admission to all museums on Berlin’s Museum Island",
        ],

        Validity: "48hours/ 72 hours",
        "Conditions of carriage": [
          "Up to 3 children between ages 6 and 14",
          "Children under 6 years of age",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }

    if (duration === "more than 4 days" && visitMuseum === "Not now") {
      dispatch({
        type: "MORE_FOUR_DAYS_NO_MUSEUM",
        title: "Berlin City Tour Cards",
        tickets: [
          "City Tour Card 4 days AB: €36.90",
          "City Tour Card 4 days ABC: €41.90",
          "City Tour Card 5 days AB: €42.90",
          "City Tour Card 5 days ABC: €46.90",
          "City Tour Card 6 days AB: €44.90",
          "City Tour Card 6 days ABC: €47.90",
        ],

        Validity: "4 days/ 5 days/ 6 days",

        "Conditions of carriage": [
          "Up to 3 children between ages 6 and 14",
          "Children under 6 years of age",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }

    if (
      duration === "more than 4 days" &&
      visitMuseum === "Yes i want to visit"
    ) {
      dispatch({
        type: "MORE_FOUR_DAYS_MUSEUM",
        title: "Berlin Welcome Cards",
        tickets: [
          "Welcome Card 4 days AB:  €40.00",
          "Welcome Card 4 days ABC: €45.00",
          "Welcome Card 5 days AB:  €46.00",
          "Welcome Card 5 days ABC: €49.00",
          "Welcome Card 6 days AB:  €49.00",
          "Welcome Card 6 days ABC: €52.00",
          "Welcome Card Museum Island AB: €55.00  incl. 72 hours free admission to all museums on Berlin’s Museum Island",
          "Welcome Card Museum Island ABC: €59.00  incl. 72 hours free admission to all museums on Berlin’s Museum Island",
        ],

        Validity: "4 days/ 5 days/ 6 days",

        "Conditions of carriage": [
          "Up to 3 children between ages 6 and 14",
          "Children under 6 years of age",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
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
        <ul style={{ listStyle: "none" }}>
          <li>
            Are you a tourist: <span className="details-answer">Yes</span>
          </li>
          <br />
          <li>
            How long will you stay in Berlin:{" "}
            <span className="details-answer">{duration}</span>
          </li>
          <br />
          <li>
            Would you like to visit museums:{" "}
            <span className="details-answer">{visitMuseum}</span>
          </li>
          <br />
        </ul>
      </div>

      <button onClick={handleSuggestedResult}>
        {" "}
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

export default ResultScreenTourist;
