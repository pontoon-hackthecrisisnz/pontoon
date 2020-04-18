import React from 'react';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import { Button } from 'reactstrap'

const Home = () => {
  return (
    <>
      <BackgroundImage />
      <Header />
      <div className="register-buttons">
        <Button className="button" to="/Register/Owner">
          Job Finder
        </Button>
      </div>
    </>
  );
};

export default Home;
