import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Links } from '../api/links'

export default class LinksList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      links: []
    }
  }
  componentDidMount () {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links')
      const links = Links.find().fetch()
      this.setState({links})
    })
  }
  componentWillUnmount () {
    console.log('byeee')
    this.linksTracker.stop()
  }
  renderLinkListItems () {
    return this.state.links.map((link) => <p key={link.id}>{link.url}</p>)
  }
  render () {
    return (
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinkListItems()}
        </div>
      </div>
    )
  }
}
