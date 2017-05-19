import React from 'react'
import { Accounts } from 'meteor/accounts-base'

export default class Links extends React.Component {
  logout () {
    Accounts.logout()
  }
  render () {
    return (
      <div>
        <h1>Lnks</h1>

        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}
