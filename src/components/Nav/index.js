import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = (props) => {
  const { contactSelected, setContactSelected } = props;

  return (
    <Navbar collapseOnSelect  expand="lg" as={"header"} className="d-flex" >
      <Container >
        <Navbar.Brand href="#/portfolio" className="navbar-brand">‧͙⁺˚*･༓☾ Shanice ๋࣭ㅤ ⭑</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-5">
            <Nav.Link
              href="#/about"
              className={`mx-5 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              About me
            </Nav.Link>
            <Nav.Link
              href="#/contact"
              className={`mx-5 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#/portfolio"
              className={`mx-5 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
            Portfolio
            </Nav.Link>
            <Nav.Link
              href="#/resume"
              className={`mx-5 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
