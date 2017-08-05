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
