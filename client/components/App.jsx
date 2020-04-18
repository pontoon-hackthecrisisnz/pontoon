import React from 'react';
import Register from './Register';
import Job from './Job'
import Home from './Home'
import Navigation from './Navigation';
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route path='/' component={Navigation}/>
        <Route exact path='/' component={Home}/>
        <Route path='/job' component={Job}/>
      </Router>
      {/* <Register />
      <Job /> */}
    </>
  );
};

export default App;
