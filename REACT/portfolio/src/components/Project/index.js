import React from 'react'
import './style.css';

class Project extends React.Component {
  render(){
    const {repo} = this.props
    return(
      <li>
        {repo.name}
      </li>
    )
  }
}

export default Project;