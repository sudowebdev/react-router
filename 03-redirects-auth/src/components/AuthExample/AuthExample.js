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

          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />

        </div>
      </Router>
    );
  }
}


const Public = () => <h3>Public</h3>

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); //fake async
  }
}

export default AuthExample;
