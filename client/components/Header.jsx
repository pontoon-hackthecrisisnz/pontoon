import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className="">
      <Row>
        <Link to="/register">
          <img className="" src="/images/Pontoon.png" alt="" />
        </Link>
      </Row>
    </Container>
  );
};

export default Header;
