import React from "react";
import jate from "../../assets/images/Jate.png";
import enthusiast from "../../assets/images/enthusiast.png";
import recipeFinder from "../../assets/images/recipeFinder.png";
import contactCards from "../../assets/images/contactCards.png";
import noteTaker from "../../assets/images/noteTaker.png";

function Portfolio() {
  return (
    <div className="flex-row">
      <a
        href="https://afternoon-plateau-77681.herokuapp.com/">
        <img
          src={enthusiast}
          alt="enthusiast home site"
          height="250px"
          width="400px"
        />
      </a>
      <a
        href="https://shanicesauce.github.io/recipe-finder/">
        <img
          src={recipeFinder}
          alt="recipe finder home site"
          height="250px"
          width="400px"
        />
      </a>
      <a
        href="https://immense-reef-11762.herokuapp.com/">
        <img
          src={jate}
          alt="just another text editor site"
          height="250px"
          width="400px"
        />
      </a>
      <a
        href="https://evening-earth-50966.herokuapp.com/">
        <img
          src={contactCards}
          alt="contact cards home site"
          height="250px"
          width="400px"
        />
      </a>
      <a
        href="https://powerful-ravine-31619.herokuapp.com/">
        <img
          src={noteTaker}
          alt="note Taker home site"
          height="250px"
          width="400px"
        />
      </a>
    </div>
  );
}
export default Portfolio;
