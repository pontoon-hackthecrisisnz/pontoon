import React from 'react';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <BackgroundImage />
      <Header />
      {/* <div className="register-buttons">
        <Link  style={{textDecoration: 'none'}}className="button" to='/job'>Find a Job</Link>
      </div> */}
    </>
  );
};

export default Home;
