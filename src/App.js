import React, { useState } from "react";

import About from "./components/About";
import Navigation from "./components/Nav";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Welcome from "./components/Welcome";
import { HashRouter as Router, Route } from "react-router-dom";




function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
      <div>
        <Navigation
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation>
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/resume" component={Resume} />
        </Router>
        <Footer />
      </div>
  );
}

export default App;
