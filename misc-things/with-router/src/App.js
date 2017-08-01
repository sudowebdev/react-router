import React, { Component } from 'react';

import './App.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// A simple component that shows the pathname of the current location
class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    // eslint-disable-next-line
    const { match, location, history } = this.props

    return (
      <div>You are now at {location.pathname}</div>
    )
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(App);

export default ShowTheLocationWithRouter;
