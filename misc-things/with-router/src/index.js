import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTheLocationWithRouter from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  (
    <Router>
      <div>
        <ul>
          <li><Link to="/withRouter">To withRouter</Link></li>
        </ul>
        <Route path="/withRouter" component={ShowTheLocationWithRouter} />
      </div>
    </Router>
  ), document.getElementById('root'));
registerServiceWorker();
