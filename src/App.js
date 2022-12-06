import React, { useState } from "react";

import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <HashRouter basename="/#">
      <div>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
        <Router>
          <Route exact path="/#/" element={Welcome} />
          <Route exact path="/#/about" element={About} />
          <Route exact path="/#/portfolio" element={Portfolio} />
          <Route exact path="/#/contact" element={ContactForm} />
          <Route exact path="/#/resume" element={Resume} />
        </Router>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
