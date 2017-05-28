import React from 'react'

// Example of an overly complicated component
// export default class PrivateHeader extends React.Component{
//   logout () {
//     Accounts.logout()
//   }
//   render (){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.logout.bind(this)}>Logout</button>
//       </div>
//     )
//   }
// }

const PrivateHeader = (props) =>{
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={()=> Accounts.logout()}>Logout</button>
      </div>
    </div>
  )
}

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default PrivateHeader