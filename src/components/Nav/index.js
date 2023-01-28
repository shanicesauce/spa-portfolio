import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = (props) => {
  const { contactSelected, setContactSelected } = props;

  return (
    <Navbar collapseOnSelect  expand="xxl" as={"header"} fixed>
      <Container className="flex-row px-1">
        <Navbar.Brand href="#/portfolio" className="name">(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟShanice.*ೃ</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="flex-row me-auto"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav d-flex">
            <Nav.Link
              href="#/about"
              className={`mx-3 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              ˘³˘ About me
            </Nav.Link>
            <Nav.Link
              href="#/contact"
              className={`mx-3 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              Contact ◐.̃◐
            </Nav.Link>
            <Nav.Link
              href="#/portfolio"
              className={`mx-3 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              ʕ·ᴥ·ʔ Portfolio
            </Nav.Link>
            <Nav.Link
              href="#/resume"
              className={`mx-3 ${contactSelected && "navActive"} a`}
              onClick={() => {
                setContactSelected(true);
              }}
            >
              Resume ৎ୭
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
