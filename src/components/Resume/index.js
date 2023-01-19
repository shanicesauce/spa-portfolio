import React from "react";
import resume from '../../assets/resume.pdf';

const Resume = () => {
  return (
    <div id="resume">
      <h1 className="title">(◍•ᴗ•◍) Resume </h1>
      <a href={resume}> Click for Resume </a>
      <p>
        Front-End Proficiencies <br />
          •HTML <br />
          •CSS <br />
          •JavaScript
          <br />
          •JQuery <br />
          •React <br />
          •Bootstrap
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
