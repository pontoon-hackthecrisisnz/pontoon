import React from 'react';
import Register from './Register';
import Job from './Job'
import SavedJob from './SavedJob';

const App = () => {
  return (
    <React.Fragment>
      <Register />
      <Job />
      <SavedJob />
    </React.Fragment>
  );
};

export default App;
