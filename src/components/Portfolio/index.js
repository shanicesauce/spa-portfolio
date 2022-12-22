import React from "react";

import jate from "../../assets/images/Jate.png";
import enthusiast from "../../assets/images/enthusiast.png";
import recipeFinder from "../../assets/images/recipeFinder.png";
import contactCards from "../../assets/images/contactCards.png";
import noteTaker from "../../assets/images/noteTaker.png";
import whatsTheRecipe from "../../assets/images/whatsTheRecipe.png"

function Portfolio() {
  return (
    <>
      <div className="col">
      <div className="card">
          <img
            className="card-img-top"
            src={whatsTheRecipe}
            alt="What is the Recipe Thumbnail"
            height="250px"
            width="569px"
          />
          <h1 className="card-title text-center" style={{ padding: "5px" }}>
            What is the Recipe
          </h1>
          <div className="card-body text-center">
            <a
              href="https://protected-atoll-82762.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              App 
            </a>
            |
            <a
              href="https://github.com/dlope0831/what-is-the-recipe"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src={enthusiast}
            alt="Enthusiast Thumbnail"
            height="250px"
            width="569px"
          />
          <h1 className="card-title text-center" style={{ padding: "5px" }}>
            Enthusiast
          </h1>
          <div className="card-body text-center">
            <a
              href="https://afternoon-plateau-77681.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              App 
            </a>
            |
            <a
              href="https://github.com/shanicesauce/enthusiast"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src={recipeFinder}
            alt="Recipe Finder Thumbnail"
            height="250px"
            width="569px"
          />
          <h1 className="card-title text-center" style={{ padding: "5px" }}>
            Recipe Finder
          </h1>
          <div className="card-body text-center">
            <a
              href="https://shanicesauce.github.io/recipe-finder/"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              App
            </a>
            |
            <a
              href="https://github.com/shanicesauce/recipe-finder"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card d-flex justify-content-center">
          <img
            className="card-img-top"
            src={jate}
            alt="Just Another Text Editor Thumbnail"
            height="250px"
            width="569px"
          />
          <h1 className="card-title text-center" style={{ padding: "5px" }}>
           Just Another Text Editor
          </h1>
          <div className="card-body text-center">
            <a
              href="https://immense-reef-11762.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              App
            </a>
            |
            <a
              href="https://github.com/shanicesauce/JATE"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src={contactCards}
            alt="Contact Cards Thumbnail"
            height="250px"
            width="569px"
          />
          <h1 className="card-title text-center" style={{ padding: "5px" }}>
           Contact Cards
          </h1>
          <div className="card-body text-center">
            <a
              href="https://evening-earth-50966.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              App
            </a>
            |
            <a
              href="https://github.com/shanicesauce/contact-cards"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src={noteTaker}
            alt="Note Taker Thumbnail"
            height="250px"
            width="569px"
          />
          <h1 className="card-title text-center" style={{ padding: "5px" }}>
           Note Taker
          </h1>
          <div className="card-body text-center">
            <a
              href="https://powerful-ravine-31619.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              App
            </a>
            |
            <a
              href="https://github.com/shanicesauce/note-taker"
              target="_blank"
              rel="noreferrer"
              className="card-link d-inline-flex"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
