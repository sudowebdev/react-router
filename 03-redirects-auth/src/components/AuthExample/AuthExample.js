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
          //PrivateRoute is a customDefined component unlike Route
        </div>
      </Router>
    );
  }
}


const Public = () => <h3>Public</h3>

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    /*
      In case of objects defined with Object literals
      Another property/method of the same object can be accessed via "this"
    */
    this.isAuthenticated = true;
    setTimeout(cb, 100); //fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/*
 withRouter takes in a component that returns a different component
 with Router related properties such as { match, location, history } injected into it.
 For a better understanding:
  Refer to: https://github.com/sudowebdev/react-router/tree/master/misc-things/with-router
*/
const AuthButton = withRouter( ({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
    Welcome!
    <button onClick={() => {
      fakeAuth.signout( () => {history.push('/')} )
    }}
    </p>
  ) : (
    <p>You are not logged in</p>
  )
))

/* Defining PrivateRoute */
const PrivateRoute = ( {component: Component {/*Destructuring with a different name. For more see README.md*/}, ...rest} ) => (
  <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )

    )} />
);

const Protected = () => (
  <h3>Protected</h3>
)

class Login extends React.Component {

  state = {
    redirectToReferrer: false;
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: {pathname: '/'} };
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

  
  }
}


export default AuthExample;
