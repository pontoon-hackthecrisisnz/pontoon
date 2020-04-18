import React from 'react';
import Register from './Register';
import Job from './Job'
import SavedJob from './SavedJob';
import Home from './Home'
import Navigation from './Navigation';
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path='/' component={Navigation}/>
        <Route exact path='/' component={Home}/>
      </Router>
      <Register />
      <Job />
      <SavedJob />
    </React.Fragment>
  );
};

export default App;
