import React from 'react'
import { browserHistory } from 'react-router'

export default class Links extends React.Component {
  logout() {
    browserHistory.push('/')
  }
  render() {
    return (
      <div>
        <h1>Lnks</h1>

        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}
