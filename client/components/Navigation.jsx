import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="rgb(32, 40, 41)" variant="dark">
        <Navbar.Brand href="#"><h1>Pontoon</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav className="mr-auto justify-content-right"> 
            <Nav.Link href="#about"><h3>About</h3></Nav.Link>
            <Nav.Link href="#contact"><h3>Contact</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
