export const dayTicketState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const dayTicketReducer = (state, action) => {
  switch (action.type) {
    case "SMALL_GROUP_5":
      updatedTicket = {
        title: "24-hour small group ticket",
        tickets: [
          "24-hour small group ticket Berlin AB - €25.50 - no reduced fare",
          "24-hour small group ticket Berlin BC - €26.00 - no reduced fare",
          "24-hour small group ticket Berlin ABC - €26.50 - no reduced fare",
        ],

        Validity: "Valid for 24 hours from the time of validation",
        "Travel validity":
          "Fare zone Berlin AB, BC, ABC - for any number of shared rides for up to 5 people",

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
    case "STUDENT_GROUP_10":
      updatedTicket = {
        title: "Group day ticket for school students",
        tickets: [
          "Group day ticket for school students Berlin AB - €3.30",
          "Group day ticket for school students Berlin ABC - €3.40",
        ],
        Validity: "Valid for 24 hours from the time of validation",
        "Travel validity":
          "Fare zone Berlin AB, ABC - for any number of shared rides for school groups with at least 10 students (up to grade 8)",

        "Conditions of carriage": [
          "One accompanying adult(at the same price)",
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
    case "TICKET_24":
      updatedTicket = {
        title: "24-hour ticket",
        tickets: [
          "24-hour ticket Berlin AB - €8.80 - reduced fare  €5.60",
          "24-hour ticket Berlin BC - €9.20 - reduced fare  €5.90",
          "24-hour ticket Berlin ABC - €10.00 - reduced fare  €6.10",
        ],

        Validity: "Valid for 24 hours from the time of validation",
        "Travel validity": "Fare zone Berlin AB, BC, ABC",
        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "Up to 3 children between the ages of 6 and 14 may be taken along as well, however, this is only valid if the ticket holder is at least 15 years old",
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
