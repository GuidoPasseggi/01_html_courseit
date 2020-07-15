import React from 'react'
import './style.css'

class Navbar extends React.Component {
  render(){
    // desestructuramos, pero no hace falta
    const {name} = this.props

    return(
      <div>
        <h1>Startup Argentina</h1>
        {name}
      </div>
    )
  }
}

export default Navbar;