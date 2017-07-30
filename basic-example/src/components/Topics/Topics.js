import React from 'react';
import './Topics.css';

import { Link, Route } from 'react-router-dom';



const Topics = ({ match }) => (

  <div>
    <h2>Topics</h2>
    <ul>
      <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with react
          </Link>
      </li>
      <li>
          <Link to={`${match.url}/components`}>
            Component
          </Link>
      </li>
      <li>
          <Link to={`${match.url}/props`}>
            Props
          </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={`${match.url}`} render={() => (
      <h3>Please select a topic...</h3>
    )} />

  </div>
)

const Topic = ({ match }) => (

  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Topics;
