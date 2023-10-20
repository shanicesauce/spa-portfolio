import React from "react";
import { Stack, Card } from "react-bootstrap";

import jate from "../../assets/images/Jate.png";
import enthusiast from "../../assets/images/enthusiast.png";
import recipeFinder from "../../assets/images/recipeFinder.png";
import contactCards from "../../assets/images/contactCards.png";
import noteTaker from "../../assets/images/noteTaker.png";
// import whatsTheRecipe from "../../assets/images/whatsTheRecipe.png";

function Portfolio() {
  const projects = [
    // {
    //   name: "What is the Recipe",
    //   about:
    //     "Allows users to explore new recipes from various cuisines. If the user doesn’t know what they are looking for, they can click the top trending food images located on the main page for inspiration.​",
    //   src: whatsTheRecipe,
    //   app: "https://protected-atoll-82762.herokuapp.com/",
    //   github: "https://github.com/dlope0831/what-is-the-recipe",
    //   technologies:
    //     "React, Semantics UI, Bootstrap, Apollo-server, Graphql, Node, Express",
    // },
    {
      name: "Enthusiast",
      about:"A social media application designed to connect people based their hobbies and interests.",
      src: enthusiast,
      app: "https://afternoon-plateau-77681.herokuapp.com/",
      github: "https://github.com/shanicesauce/enthusiast",
      technologies:
        "Handlebars, Bootstrap, JavaScript, Mysql2, Multer, Sequelize",
    },
    {
      name: "Recipe Finder",
      about:"Given four protein options to choose from, a random recipe will be generated, including instructions for the user to prepare.",
      src: recipeFinder,
      app: "https://shanicesauce.github.io/recipe-finder/",
      github: "https://github.com/shanicesauce/recipe-finder",
      technologies: "Bulma, JavaScript, TheMeadDb Api, Google Fonts, HTML, Localstorage",
    },
    {
      name: "Just Another Text Editor",
      about:"Take notes with Javascript and highlighting",
      src: jate,
      app: "https://immense-reef-11762.herokuapp.com/",
      github: "https://github.com/shanicesauce/JATE",
      technologies: "Express, JavaScript",
    },
    {
      name: "Note Taker",
      about:"Application made using Express, deployed to Heroku. Allows the user to create and delete notes as needed.",
      src: noteTaker,
      app: "https://powerful-ravine-31619.herokuapp.com/",
      github: "https://github.com/shanicesauce/note-taker",
      technologies: "Express, Webpack, CSS, JavaScript, HTML",
    },
    {
      name: "Contact cards",
      about:"Allow users to store contact information and profile pics and add, edit, and delete information as needed in a convenient single-page application that can be used on any device.",
      src: contactCards,
      app: "https://evening-earth-50966.herokuapp.com/",
      github: "https://github.com/shanicesauce/contact-cards",
      technologies: "Webpack, Workbox, IndexedDB, JavaScript ",
    },
  ];
  return (
    <>
      <Stack gap={3} className="align-items-center mx-auto">
        <h1 className="title"> My Projects (๑•́ ₃ •̀๑) </h1>
        {projects.map((project) => (
          <Card className="projects">
            <Card.Img
              variant="top"
              src={project.src}
              alt={`${project.name} thumbnail`}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title
                className="title text-center text-white"
                style={{ padding: "5px" }}
              >
                {project.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {project.technologies}
              </Card.Subtitle>
              <Card.Text className="body text-center text-light">
                {project.about}
              </Card.Text>
              <Card.Link href={project.app} className="link d-inline-flex">
                App
              </Card.Link>
              <Card.Link href={project.github} className="link d-inline-flex">
                Repo
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </>
  );
}
export default Portfolio;
