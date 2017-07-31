import React from 'react';

import './Account.css';

class Account extends React.Component {

  render(){
    return (
      <div>
        <h3>{this.props.match.params.accountProvider}</h3>
      </div>
    );
  }
}

export default Account;
