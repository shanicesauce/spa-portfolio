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
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/resume" component={Resume} />
        </Router>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
