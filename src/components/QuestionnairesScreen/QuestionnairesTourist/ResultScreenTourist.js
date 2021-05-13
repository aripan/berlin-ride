import React from "react";

const ResultScreenTourist = ({ duration, visitMuseum }) => {
  return (
    <div>
      <ul>
        <li> Are you a tourist: Yes</li>
        <li>How long will you stay in Berlin: {duration}</li>
        <li>Would you like to visit museums: {visitMuseum}</li>
      </ul>
    </div>
  );
};

export default ResultScreenTourist;
