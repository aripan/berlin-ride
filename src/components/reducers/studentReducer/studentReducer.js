export const studentState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const studentReducer = (state, action) => {
  switch (action.type) {
    case "STUDENT_ID_I":
      updatedTicket = {
        tickets: ["School student ticket with student ID I - free of charge"],

        Validity: "As long as the conditions are fulfilled",

        "Travel validity":
          "Fare zone Berlin AB and extension ticket is required for Berlin C zone",

        Requirements: "valid student ID I of current school year",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "STUDENT_ID_II":
      updatedTicket = {
        tickets: [
          "VBB subscription trainee/student II Berlin AB - €58.00(monthly ticket), €534.00(Annual ticket- paid monthly)",
          "VBB subscription trainee/student II Berlin BC - €63.80(monthly ticket), €625.00(Annual ticket- paid monthly)",
          "VBB subscription trainee/student II Berlin ABC - €77.50(monthly ticket), €760.00(Annual ticket- paid monthly)",
        ],

        Validity: "It is valid until the printed last day at midnight.",

        "Travel validity": "As you choose",

        Requirements: "valid student ID II",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "SEMESTER_TICKET":
      updatedTicket = {
        tickets: ["SemesterTicket - included in semester registration"],

        Validity: "One semester",

        "Travel validity": "Fare zone Berlin ABC",

        Requirements: "students with a matriculation number",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
        ],
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "TRAINEE_TICKET":
      updatedTicket = {
        tickets: [
          "VBB subscription trainee - €384.00 (subscription - paid monthly), €365.00 (subscription - paid annually)",
        ],

        Validity: "subscription for 12 months",

        "Travel validity": "Entire VBB-network",

        Requirements:
          "Valid for a defined group of eligible training professions, students on vocational courses",

        "Conditions of carriage": [
          "Children under 6",
          "Hand luggage, strollers, wheelchairs and other orthopedic aids, e.g., walking aids",
          "1 dog",
          "1 bicycle",
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
