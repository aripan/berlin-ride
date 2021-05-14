export const nearByState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const nearByReducer = (state, action) => {
  switch (action.type) {
    case "SINGLE_TICKET":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "SHORT_TRIP_TICKET":
      updatedTicket = {
        title: "Short trip ticket",
        tickets: ["Short trip ticket - €2.00 - reduced fare  €1.50"],

        Validity:
          "valid for mentioned number of stations / 20 minutes (mobile tickets)",

        "Travel validity": "3 stations with S-Bahn/ 6 stations on trams",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
        ],
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "FOUR_TRIP_TICKET":
      updatedTicket = {
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "EXTENSION_TICKET":
      updatedTicket = {
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
