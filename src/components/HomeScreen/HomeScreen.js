import React, { useState } from "react";
import train from "../../images/train.png";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={train} alt="" />
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          debitis amet iure ut reiciendis quae pariatur,
        </h4>
      </div>
      <div className="home-name">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nemo!
        </h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default HomeScreen;
