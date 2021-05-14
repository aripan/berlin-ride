import React, { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";
import {
  longPeriodReducer,
  longPeriodState,
} from "../../reducers/longPeriodReducer/longPeriodReducer";

const ResultScreenLongPeriod = ({ berlinpass, ticket10, ticketVBB }) => {
  const [state, dispatch] = useReducer(longPeriodReducer, longPeriodState);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [carriages, setCarriages] = useState([]);
  let history = useHistory();

  const handleSuggestedResult = () => {
    if (berlinpass === "Yes i have a berlinpass") {
      dispatch({
        type: "BERLIN_PASS",
        title: "Berlin-Ticket S",
        tickets: ["Berlin ticket S Berlin AB - €27.50 (monthly ticket)"],

        "Travel validity":
          "Fare zone Berlin AB and extension ticket is required for Berlin C zone",

        Transferability: "Non-transferable",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }
    if (ticket10 === "Yes i  would like to buy") {
      dispatch({
        type: "TICKET_10",
        title: "10 o’clock ticket",
        tickets: [
          "10 o’clock ticket Berlin AB - €63.00 (monthly ticket), €547.00(Subscription - paid monthly),  €531.00(Subscription - paid annually)",
          "10 o’clock ticket Berlin BC - €65.00 (monthly ticket), €600.00(Subscription - paid monthly),  €585.00(Subscription - paid annually)",
          "10 o’clock ticket Berlin ABC - €78.00 (monthly ticket), €726.00(Subscription - paid monthly),  €708.00(Subscription - paid annually)",
        ],

        "Travel validity": "Fare zone Berlin AB, BC, ABC",

        Transferability: "Non-transferable",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
        ],
      });
    }
    if (ticketVBB === "Yes i want to see") {
      dispatch({
        type: "TICKET_VBB",
        title: "VBB eco-ticket",
        tickets: [
          "VBB eco-ticket Berlin AB - €86.00 (monthly ticket-no contract), €903.00 (annual ticket-no contract),  €761.00 (subscription - paid monthly), €728.00 (subscription - paid annually)",
          "VBB eco-ticket Berlin BC - €89.00 (monthly ticket-no contract), €934.50 (annual ticket-no contract),  €822.00 (subscription - paid monthly), €807.00 (subscription - paid annually)",
          "VBB eco-ticket Berlin ABC - €107.00 (monthly ticket-no contract), €1123.50 (annual ticket-no contract),  €1008.00 (subscription - paid monthly), €978.00 (subscription - paid annually)",
        ],

        "Travel validity": "Fare zone Berlin AB, BC, ABC",

        Transferability: "Transferable",
        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "Plus up to four persons (but only one older than 14 years of age), Mon-Fri from 8 pm until 3 am on the next day, all day Sat, Sun, public holidays, and on 24/12 & 31/12",
        ],
      });
    }
    if (ticketVBB === "No i do not want") {
      alert("You have not answered the question properly.");
      history.push("/");
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
        <li>Do you prefer to buy monthly or annual tickets: Yes</li>
        {berlinpass && <li>Do you have a berlinpass: {berlinpass}</li>}
        {ticket10 && (
          <li>
            Do you want to save money by buying a 10 o’clock ticket: {ticket10}
          </li>
        )}
        {ticketVBB && (
          <li>
            Are you looking for some other option such as VBB eco-ticket:{" "}
            {ticketVBB}
          </li>
        )}
      </ul>
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

export default ResultScreenLongPeriod;
