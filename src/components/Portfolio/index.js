import React from "react";

import {Stack } from "react-bootstrap";

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
      technologies: "React, Semantics UI, Bootstrap, Apollo-server, Graphql, Node, Express"
    },
    {
      name: "Enthusiast",
      src:  enthusiast ,
      app: "https://afternoon-plateau-77681.herokuapp.com/",
      github: "https://github.com/shanicesauce/enthusiast",
      technologies: "Handlebars, Bootstrap, JavaScript, Mysql2, Multer, Sequelize"

    },
    {
      name: "Recipe Finder",
      src:  recipeFinder ,
      app: "https://shanicesauce.github.io/recipe-finder/",
      github: "https://github.com/shanicesauce/recipe-finder",
      technologies: "Bulma, JavaScript, TheMeadDb Api, Google Fonts, HTML"
    },
    {
      name: "Just Another Text Editor",
      src:  jate ,
      app: "https://immense-reef-11762.herokuapp.com/",
      github: "https://github.com/shanicesauce/JATE",
      technologies: "Express, JavaScript"
    },
    {
      name: "Note Taker",
      src:  noteTaker ,
      app: "https://powerful-ravine-31619.herokuapp.com/",
      github: "https://github.com/shanicesauce/note-taker",
      technologies: "Webpack, CSS, JavaScript, HTML"
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
        <Stack>
          <h1 className="title"> My Projects  (๑•́ ₃ •̀๑)</h1> <br/>
        {projects.map((project) => (
          <div className="projects">
            <img
              className="img-fluid"
              src={project.src}
              alt={`${project.name} thumbnail`}
              height="250px"
              width="569px"
            />
            <h1 className="title text-center" style={{ padding: "5px" }}>
              {project.name}
            </h1>
            <div className="body text-center">
              <a
                href={project.app}
                target="_blank"
                rel="noreferrer"
                className="link d-inline-flex"
              >
                App
              </a>
              |
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="link d-inline-flex"
              >
                Repo
              </a>
              
            </div>
            <h4> Technologies Used: </h4>
            <h5> {project.technologies} </h5>
          </div>

        ))}
        </Stack>
    </>
  );
}
export default Portfolio;
