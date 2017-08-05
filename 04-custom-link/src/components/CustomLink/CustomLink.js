import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
      <OldSchoolMenuLink to="/about" label="About" />

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

const OldSchoolMenuLink = ( { activeOnlyWhenExact, to, label } ) => (

  {/*
      Route with children is used in case we want to render something
      even if there isn't any match.
      When a route fails to match the URL, then match is null.
      For more information: https://reacttraining.com/react-router/web/api/Route/children-func
  */}

  <Route path={to} exact={activeOnlyWhenExact} children={ ( { match } ) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
