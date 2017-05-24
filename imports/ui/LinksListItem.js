import { Meteor } from 'meteor/meteor'
import React from 'react'
import Clipboard from 'clipboard'
import moment from 'moment'

export default class LinksListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      justCopied: false
    }
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy)

    this.clipboard.on('success', () => {
      this.setState({justCopied: true})
      setTimeout(() => {
        this.setState({justCopied: false})
      }, 2000)
    }).on('error', () => {
      alert('Unable to copy. Please manually copy the link.');
    })
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits'
    let visitedMessage = null

    if(typeof this.props.lastVisitedAt === 'number'){
      visitedMessage = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`
    }
    return <p>{this.props.visitedCount} {visitMessage}- {visitedMessage}</p>
  }
  render () {
    // const { link } = this.props.link
    return (
      <div>
        <h3>{this.props.url}</h3>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <a href={this.props.shortUrl} target="_blank">
          visit
        </a>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'Copied' : 'Copy'}
        </button>
        <button onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
        }}>
          {this.props.visible ? 'Hide' : 'Unhide'}
        </button>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  _id: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
  userId: React.PropTypes.string.isRequired,
  visitedCount: React.PropTypes.number.isRequired,
  lastVisitedAt: React.PropTypes.number
}
