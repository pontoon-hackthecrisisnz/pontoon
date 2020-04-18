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
        <Route path='/register' component={Register}/>
        <Route exact path='/' component={Home}/>
        <Route path='/searching' component={Job} />
      </Router>

      {/* <SavedJob /> */}
    </React.Fragment>
  );
};

export default App;
