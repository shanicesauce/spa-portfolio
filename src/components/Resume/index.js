import React from "react";
import resume from '../../assets/resume.pdf';

const Resume = () => {
  return (
    <div id="resume">
      <h4 className="title">(◍•ᴗ•◍) Resume </h4>{" "}
      <a href={resume}> Click Me </a>
      <p>
        Front-End Proficiencies <br />
        •HTML <br />
        •CSS <br />
        •JavaScript
        <br />
        •JQuery <br />
        •React <br />
        •Bootstrap
        <br />
      </p>
      <p>
        Back-End Proficiencies <br />
        • APIs <br />
        •Node <br />
        •Express <br />
        •MySql, Sequalize <br />
        •MongoDb,Mongoose <br />
        •REST <br />
        •GraphQL <br />
        •MERN stack
        <br />
      </p>
    </div>
  );
};

export default Resume;
