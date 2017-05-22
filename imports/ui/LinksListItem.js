import React from 'react'
import Clipboard from 'clipboard'

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
  render () {
    // const { link } = this.props.link
    return (
      <div>
        <h3>{this.props.url}</h3>
        <p>{this.props.shortUrl}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'Copied' : 'Copy'}
        </button>
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
