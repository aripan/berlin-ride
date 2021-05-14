export const bikeState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const bikeReducer = (state, action) => {
  switch (action.type) {
    case "BICYCLE_SINGLE_TICKET":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "BICYCLE_TICKET_24":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "BICYCLE_TICKET_MONTHLY":
      updatedTicket = {
        title: "Bicycle monthly ticket",
        tickets: [
          "Bicycle monthly ticket Berlin AB - €11.50",
          "Bicycle monthly ticket Berlin ABC - €14.40",
        ],

        Validity:
          "The bicycle monthly ticket is issued for use from any day and is valid until midnight at the end of the last day printed on the ticket.",

        "Travel validity":
          "Bicycles can be taken on S-Bahn and underground trains, on Deutsche Bahn local railways, and on trams. But bicycles are not permitted on busses ",
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
