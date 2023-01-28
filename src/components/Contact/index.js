import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers";


function ContactForm() {
  const form = useRef();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("ಠ╭╮ಠ email is wrong, fix it please!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required! (¬_¬)`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section >
      <h1 className="title">Contact me ★~(◠‿◕✿)</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            type="name"
            name="user_name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email"> Email: </label>
          <input
            type="email"
            name="user_email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="input">
            Message:
          </label>
          <textarea
            type="message"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text"> {errorMessage}</p>
          </div>
        )}
        <button type="submit" value="Send">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
