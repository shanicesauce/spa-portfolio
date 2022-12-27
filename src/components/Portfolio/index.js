import React from "react";

import jate from "../../assets/images/Jate.png";
import enthusiast from "../../assets/images/enthusiast.png";
import recipeFinder from "../../assets/images/recipeFinder.png";
import contactCards from "../../assets/images/contactCards.png";
import noteTaker from "../../assets/images/noteTaker.png";
import whatsTheRecipe from "../../assets/images/whatsTheRecipe.png";

function Portfolio() {
  const projects = [
    {
      name: "What is the Recipe",
      src:  whatsTheRecipe ,
      app: "https://protected-atoll-82762.herokuapp.com/",
      github: "https://github.com/dlope0831/what-is-the-recipe",
    },
    {
      name: "Enthusiast",
      src:  enthusiast ,
      app: "https://afternoon-plateau-77681.herokuapp.com/",
      github: "https://github.com/shanicesauce/enthusiast",
    },
    {
      name: "Recipe Finder",
      src:  recipeFinder ,
      app: "https://shanicesauce.github.io/recipe-finder/",
      github: "https://github.com/shanicesauce/recipe-finder",
    },
    {
      name: "Just Another Text Editor",
      src:  jate ,
      app: "https://immense-reef-11762.herokuapp.com/",
      github: "https://github.com/shanicesauce/JATE",
    },
    {
      name: "Note Taker",
      src:  noteTaker ,
      app: "https://powerful-ravine-31619.herokuapp.com/",
      github: "https://github.com/shanicesauce/note-taker",
    },
    {
      name: "Contact cards",
      src:  contactCards ,
      app: "https://evening-earth-50966.herokuapp.com/",
      github: "https://github.com/shanicesauce/contact-cards",
    },
  ];
  return (
    <>
      <div className="col">
        {projects.map((project) => (
          <div className="card">
            <img
              className="card-img-top"
              src={project.src}
              alt={`${project.name} thumbnail`}
              height="250px"
              width="569px"
            />
            <h1 className="card-title text-center" style={{ padding: "5px" }}>
              {project.name}
            </h1>
            <div className="card-body text-center">
              <a
                href={project.app}
                target="_blank"
                rel="noreferrer"
                className="card-link d-inline-flex"
              >
                App
              </a>
              |
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="card-link d-inline-flex"
              >
                Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Portfolio;
