import React, { useReducer } from "react";
import {
  longPeriodReducer,
  longPeriodState,
} from "../../reducers/LongPeriodReducer/LongPeriodReducer";

const ResultScreenLongPeriod = ({ berlinpass, ticket10, ticketVBB }) => {
  const [state, dispatch] = useReducer(longPeriodReducer, longPeriodState);

  const handleSuggestedResult = () => {
    if (berlinpass === "Yes i have a berlinpass") {
      dispatch({
        type: "BERLIN_PASS",

        tickets: ["Berlin ticket S Berlin AB"],

        Price: ["Monthly ticket - €27.50"],

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
        tickets: [
          "10 o’clock ticket Berlin AB",
          "10 o’clock ticket Berlin BC",
          "10 o’clock ticket Berlin ABC",
        ],

        Price: [
          "Berlin AB - €63.00 (monthly ticket), €547.00(Subscription - paid monthly),  €531.00(Subscription - paid annually)",
          "Berlin BC - €65.00 (monthly ticket), €600.00(Subscription - paid monthly),  €585.00(Subscription - paid annually)",
          "Berlin ABC - €78.00 (monthly ticket), €726.00(Subscription - paid monthly),  €708.00(Subscription - paid annually)",
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
        tickets: [
          "VBB eco-ticket Berlin AB",
          "VBB eco-ticket Berlin BC",
          "VBB eco-ticket Berlin ABC",
        ],

        Price: [
          "Berlin AB - €86.00 (monthly ticket-no contract), €903.00 (annual ticket-no contract),  €761.00 (subscription - paid monthly), €728.00 (subscription - paid annually)",
          "Berlin BC - €89.00 (monthly ticket-no contract), €934.50 (annual ticket-no contract),  €822.00 (subscription - paid monthly), €807.00 (subscription - paid annually)",
          "Berlin ABC - €107.00 (monthly ticket-no contract), €1123.50 (annual ticket-no contract),  €1008.00 (subscription - paid monthly), €978.00 (subscription - paid annually)",
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
  };
  return (
    <div>
      <h4>Details we got from you:</h4>
      <ul>
        <li>Do you prefer to buy monthly or annual tickets: Yes</li>
        <li>Do you have a berlinpass: {berlinpass}</li>
        <li>
          Do you want to save money by buying a 10 o’clock ticket: {ticket10}
        </li>
        <li>
          Are you looking for some other option such as VBB eco-ticket:{" "}
          {ticketVBB}
        </li>
      </ul>
      <button onClick={handleSuggestedResult}>Click here</button>
      {state.ticket.updatedTicket ? (
        <>
          <p>Ticket:{state.ticket.updatedTicket.tickets[0]}</p>
          <p>Price:{state.ticket.updatedTicket.Price[0]}</p>
          {ticket10 === "Yes i  would like to buy" ||
          ticketVBB === "Yes i want to see" ? (
            <>
              <p>Ticket:{state.ticket.updatedTicket?.tickets[1]}</p>
              <p>Price:{state.ticket.updatedTicket?.Price[1]}</p>
              <p>Ticket:{state.ticket.updatedTicket?.tickets[2]}</p>
              <p>Price:{state.ticket.updatedTicket?.Price[2]}</p>
            </>
          ) : null}
          <p>
            Travel Validity: {state.ticket.updatedTicket["Travel validity"]}
          </p>
          <p>Transferability: {state.ticket.updatedTicket.Transferability}</p>
          Conditions of carriage:{" "}
          <ul>
            <li>{state.ticket.updatedTicket["Conditions of carriage"][0]}</li>
            <li>{state.ticket.updatedTicket["Conditions of carriage"][1]}</li>
            <li>{state.ticket.updatedTicket["Conditions of carriage"][2]}</li>
            {ticketVBB === "Yes i want to see" && (
              <li>
                {state.ticket?.updatedTicket["Conditions of carriage"][3]}
              </li>
            )}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default ResultScreenLongPeriod;
