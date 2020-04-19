import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="home-page-header">
      <div className="home-page-headline text-center">
        <Link to='/register'><img className='main-image-link' src="/images/Pontoon.png" alt=""/></Link>
      </div>
    </div>
  );
};

export default Header;
