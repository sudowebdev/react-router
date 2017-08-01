# withRouter

***withRouter takes in a component and returns a different component with Router related props injected in it***. Such as { match, location, history } which the Router passes on to its Routes as props.

For more information on this, refer to **[this video](https://egghead.io/lessons/javascript-redux-using-withrouter-to-inject-the-params-into-connected-components) and [this documentation](https://reacttraining.com/react-router/web/api/withRouter)**


##### Please Note: Router related props are not only restricted to { match, location, history } but also other properties that are related to Router such as params ( /:filter [which will be referred by params.filter] ).
