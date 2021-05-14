export const seniorState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const seniorReducer = (state, action) => {
  switch (action.type) {
    case "TICKET_65PLUS":
      updatedTicket = {
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
