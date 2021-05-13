export const touristState = {
  ticket: {},
};

let updatedTicket = {},
  newTicketInfo = {};
export const touristReducer = (state, action) => {
  switch (action.type) {
    case "LESS_FOUR_DAYS_NO_MUSEUM":
      updatedTicket = {
        tickets: "Berlin City Tour Cards",
        Price: [
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "LESS_FOUR_DAYS_MUSEUM":
      updatedTicket = {
        tickets: "Berlin Welcome Card",

        Price: [
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "MORE_FOUR_DAYS_NO_MUSEUM":
      updatedTicket = {
        tickets: "Berlin City Tour Cards",
        Price: [
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
      };

      newTicketInfo = {
        ...state.ticket,
        updatedTicket,
      };
      console.log(newTicketInfo);
      return { ticket: newTicketInfo };
    case "MORE_FOUR_DAYS_MUSEUM":
      updatedTicket = {
        tickets: "Berlin Welcome Cards",
        Price: [
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
