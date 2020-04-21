import React from 'react';
import Register from './Register';
import Home from './Home'
import Header from './Header'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path='/' component={Header}/>
        <Route path='/register' component={Register}/>
        <Route exact path='/' component={Home}/>
      </Router>
    </React.Fragment>
  );
};

export default App;
