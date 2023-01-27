import React from "react";
import shanice from "../../assets/images/shanice.jpg";

const Welcome = () => {
  return (
    <div id="welcome">
      <img src={shanice} alt="shanice at hopscotch" className="container"></img>
      <p>
        <h1>Memento Mori</h1>
      </p>
    </div>
  );
};

export default Welcome;
