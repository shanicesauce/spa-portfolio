import React from "react";
import shanice from "../../assets/images/shanice.jpg";

const Welcome = () => {
  return (
    <div id="welcome">
      <img src={shanice} alt="shanice at hopscotch" className="img-thumbnail "></img>
      <p>
        <h3>Ca Va Bien</h3> <br/>
      </p>
      <h1> Shanice Sauceda </h1>
    </div>
  );
};

export default Welcome;
