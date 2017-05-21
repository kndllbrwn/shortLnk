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
    <div>
      <h1>{props.title}</h1>
      <button onClick={()=> Accounts.logout()}>Logout</button>
    </div>
  )
}

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default PrivateHeader