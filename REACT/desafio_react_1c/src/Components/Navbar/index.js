import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // INICIALIZACION del estado interno
    this.state = {
      //arranca vacio:
      inputValue: '',

      result: ''
    }

  }


  //no hace nada solo es de ejemplo
  handleClick() {
    const { inputValue } = this.state;
    this.setState({
      result: inputValue
    })
  }

  // con esta funcion podemos ver el .value del INPUT
  handleChange(e) {
    console.log(e.target.value)
    // ACTUALIZACION del estado interno
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <nav>
        <h1>Soy un Navbar</h1>
        {/* en onChange necesitamos usar el EVENTO/PARAMETRO "e" */}
        <input onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={() => this.handleClick()}>Mostrar texto</button>
        {/* LECTURA del estado interno */}
        <p>El valor del input es: {this.state.result}</p>
      </nav>
    )
  }
}

export default Navbar;