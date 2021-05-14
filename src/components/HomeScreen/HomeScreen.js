import React, { useState } from "react";
import { useHistory } from "react-router";
import train from "../../images/train.png";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [name, setName] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", name);
    history.push("/questionnaires/tourist");
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Berlin Ride
      </h1>
      <div className="home-container">
        <div className="home-image">
          <img src={train} alt="" />
          <h3>Let's make your next trip more comfortable & hassle free</h3>
        </div>
        <div className="home-name">
          <h4>Answer few questions & we will look the best deal for you!!!</h4>
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Please write your name"
              required
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
