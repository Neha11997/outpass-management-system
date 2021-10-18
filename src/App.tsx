import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/main.scss';

import Routes from './Routes';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
