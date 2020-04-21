import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='search-container'>
        <Link style={{textDecoration: 'none'}} className="search-button" to="/register">JOB SEARCH</Link>
      </div>
    </>
  );
};

export default Home;
