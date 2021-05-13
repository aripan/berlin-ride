import React, { useEffect, useReducer, useState } from "react";
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

    if (duration === "less than 4 days" && visitMuseum === "Yes") {
      dispatch({
        type: "LESS_FOUR_DAYS_MUSEUM",

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

    if (duration === "more than 4 days" && visitMuseum === "Yes") {
      dispatch({
        type: "MORE_FOUR_DAYS_MUSEUM",

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
    <div>
      <h4>Details we got from you:</h4>
      <ul>
        <li>Are you a tourist: Yes</li>
        <li>How long will you stay in Berlin: {duration}</li>
        <li>Would you like to visit museums: {visitMuseum}</li>
      </ul>
      <button onClick={handleSuggestedResult}>Click here</button>
      {ticketInfo.map((ticket, index) => (
        <p key={index}>{ticket}</p>
      ))}
      {state.ticket.updatedTicket && (
        <p>Validity: {state.ticket.updatedTicket.Validity}</p>
      )}

      {carriages.map((carriage, index) => (
        <p key={index}>{carriage}</p>
      ))}
      {/* {state.ticket.updatedTicket ? (
        <>
          <p>Ticket:{state.ticket.updatedTicket.tickets}</p>
          Price:
          <ul>
            <li>{state.ticket.updatedTicket.Price[0]}</li>
            <li>{state.ticket.updatedTicket.Price[1]}</li>
            <li>{state.ticket.updatedTicket.Price[2]}</li>
            <li>{state.ticket.updatedTicket.Price[3]}</li>
            <li>{state.ticket.updatedTicket?.Price[5]}</li>
            <li>{state.ticket.updatedTicket?.Price[6]}</li>
            <li>{state.ticket.updatedTicket?.Price[7]}</li>
          </ul>
          <p>Validity: {state.ticket.updatedTicket.Validity}</p>
          <p>
            Conditions of carriage:{" "}
            {state.ticket.updatedTicket["Conditions of carriage"]}
          </p>
        </>
      ) : null} */}
    </div>
  );
};

export default ResultScreenTourist;
