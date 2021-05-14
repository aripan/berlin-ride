export const weeklyState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const weeklyReducer = (state, action) => {
  switch (action.type) {
    case "TICKET_7":
      updatedTicket = {
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
