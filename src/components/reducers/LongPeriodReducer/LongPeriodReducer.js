export const longPeriodState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const longPeriodReducer = (state, action) => {
  switch (action.type) {
    case "BERLIN_PASS":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "TICKET_10":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "TICKET_VBB":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };

    default:
      return state;
  }
};
