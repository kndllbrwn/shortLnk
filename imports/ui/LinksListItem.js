import React from 'react'

export default class LinksListItem extends React.Component {
  render () {
    // const { link } = this.props.link
    return (
      <div>
        <h3>{this.props.url}</h3>
        <p>{this.props.shortUrl}</p>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  _id: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired
}