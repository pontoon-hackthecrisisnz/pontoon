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
  NavLink,
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
        <Collapse isOpen={isOpen} navbar className="">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button color="" className="">
                  <h4>Contact</h4>
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button color="" className="">
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
