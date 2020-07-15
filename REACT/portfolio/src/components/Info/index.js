import React from 'react'
import './style.css'

class Info extends React.Component {
  render(){
    return(
      <div>
        <img src={this.props.profilePic} />
        <p>{this.props.bio}</p>
      </div>
    )
  }
}

export default Info;