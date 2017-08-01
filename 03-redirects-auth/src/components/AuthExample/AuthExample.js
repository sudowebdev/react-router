import React from 'react';

import './AuthExample.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';



class AuthExample extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to="/public">Public page</Link></li>
            <li><Link to="/protected">Protected page</Link></li>
          </ul>

          
        </div>
      </Router>
    );
  }
}

export default AuthExample;