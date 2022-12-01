import React from "react";
import bear from "../../assets/images/bear.webp";

const Welcome = () => {
  return (
    <div id="welcome">
      <img src={bear} alt="cute bear" height="450px" width="400px" className="container"></img>
      <p>
        <h1>Memento Mori</h1>
      </p>
    </div>
  );
};

export default Welcome;
