import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Sorry Nothing to show <br /> Please search properly
      </h1>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
