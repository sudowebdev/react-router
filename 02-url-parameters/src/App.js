import React, { Component } from 'react';

import './App.css';

import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom';

import Account from './components/Account/Account';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          Accounts
          <ul>
            <li><Link to="/google">Google</Link></li>
            <li><Link to="/github">Github</Link></li>
            <li><Link to="/facebook">Facebook</Link></li>
            <li><Link to="/twitter">Twitter</Link></li>
          </ul>

          <Route path="/:accountProvider" component={Account} />
        </div>
        </Router>
    );
  }
}

export default App;
