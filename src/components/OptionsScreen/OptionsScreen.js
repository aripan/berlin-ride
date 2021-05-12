import React from "react";
import "./OptionsScreen.css";

const OptionsScreen = () => {
  const options = [
    "Single tickets, Day tickets, Group tickets",
    "Tourist tickets",
    "School student, trainee and student tickets",
    "Weekly, Monthly and Annual tickets",
    "Bike tickets",
  ];
  return (
    <div className="options">
      {options.map((option) => (
        <div className="card" key={option}>
          <h3>{option}</h3>
        </div>
      ))}
    </div>
  );
};

export default OptionsScreen;
