import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  //// Es una funcion que va a dejar de existir
  //// prontamente:
  componentWillMount() {
    console.log('Soy un componentWillMount')
  }


  handleClick() {
    const counter = this.state.counter

    // INICIALIZACION del estado interno:
    this.setState({
      // se puede arrancar como "false" o "string vacio" tamb:
      catImage: null

      // // es codigo anterior a mostrar la imagen del gatito:
      // counter: counter + 1
    })
  }

  async componentDidMount() {
    //ACA VAMOS A QUERER HACER EL FETCH
    const getCat = await fetch('https://api.thecatapi.com/v1/images/search');
    // como FETCH nos devuelve un "string de datos" tenemos que 
    // parsear eso a JSON:
    const getCatJson = await getCat.json();
    console.log(getCatJson);

    // ACTUALIZACION del estado interno:
    this.setState({
      catImage: getCatJson[0].url
    })
  }

  render() {
    console.log('Soy un render')
    return (
      <div>
        {/* 
        es codigo anteriora a mostrar la imagen del gatito:
        <span>Counter: {this.state.counter}</span>
        <button onClick={() => this.handleClick()}>+1</button> */}


        {/* CONDICIONAL TERNARIO 
        - Si no ponemos "catImage", el condicional chequea existencia
        - "?" <--- entonces
        - ":" <--- si no 
        - Lo hacemos entre parentesis porque lo hicimos "multilinea"
        */}
        {this.state.catImage ? (
          <img src={this.state.catImage} />

        ) : (
            <p>Cargando...</p>
          )}

        {/* CONDICIONAL SIMPLE */}
        {!this.state.catImage && (
          <p>No hay ninguna imagen de gato</p>
        )}

        {/* LECTURA del estado interno */}
      </div>
    )
  }
}

export default App

