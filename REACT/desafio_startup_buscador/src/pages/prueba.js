import React from 'react';
import { Link } from 'react-router-dom';

class Prueba extends React.Component {
  render(){
    return(
      <p>Soy una prueba</p>
      
      <Link to="/">Ir a la home</Link>
    )
  }
}

export default Prueba;