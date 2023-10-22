import React from "react";
import github from "../../assets/images/GitHub.png";
import linkedin from "../../assets/images/li.png";
import gmail from "../../assets/images/gmail.png"

const Footer = () => {
  return (
    <footer>
      {/* <h4> Shanice Sauceda    ˙ᵕ˙     </h4> */}
      <p >
        <a href="https://github.com/shanicesauce">
          <img src={github} alt="github"></img>
        </a>        

        <a href="https://www.linkedin.com/in/ShaniceSauceda">
            <img src={linkedin} alt="linkedin"></img>
        </a>
                    
        <a href="mailto:shanicesauce@gmail.com"> 
        <img src={gmail} alt="gmail"></img> </a>
      </p>

      {/* <div>
        Thank you for visiting ♡
      </div> */}
    </footer>
  );
};

export default Footer;
