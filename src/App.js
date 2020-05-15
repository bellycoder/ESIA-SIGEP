import React from 'react';
import './App.scss';

import Login from './Components/Login.js';
import Preregistro from './Components/Preregistro.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/preregistro" component={Preregistro}/>   
        </Switch>
      </div>
      </Router>
  );
}

export default App;
