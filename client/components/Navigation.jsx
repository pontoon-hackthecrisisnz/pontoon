import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="nav" light expand="md">
        <NavbarBrand>
          <Link to="/">
            <img className="logo" src="/images/image.png" alt="" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/contact">
                <Button class='' className="text-white">
                  <h4>Contact</h4>
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">
                <Button class='' className="text-white ">
                  <h4>About</h4>
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
