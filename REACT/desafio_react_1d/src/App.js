import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    // INICIALIZACION estado interno
    this.state = { // <- este objeto es la fuente de informacion
      inputValue: "",
      tasks: []
    }
  }


  // ACTUALIZACION estado interno
  handleChange(e) { // <- Uno de los actores q actualiza fuente de info
    
    this.setState({ // <- la funcion que vamos a usar para actualizar el estado
    
      inputValue: e.target.value // <- Actualizame la propiedad inputValue
                                  // con el valor e.target.value
    })
  }


  //LECTURA estado interno
  handleClick() { // <- Aca queremos leer la informacion
    
    // Leemos la propiedad inputValue de nuestro estado
    const newValue = this.state.inputValue
    
    
    // Leer la propiedad tasks de nuestro estado
    const newTasks = this.state.tasks

    // Agregarle a ese array un nuevo item con el valor de inputValue
    newTasks.push(newValue)

    // Actualizar el estado tasks con el nuevo array
    this.setState({
      tasks: newTasks,
      // para que la linea de abajo funcione, tenemmos que 
      // si o si agregar la propiedad VALUE en el BUTTON (html)
      // y con esto logramos resetear el inputValue visible
      inputValue: ""
    })                                }

  render() {
    return (
      <React.Fragment>
        <div>
        <input value={this.state.inputValue} onChange={(e) => this.handleChange(e)} name="FirstInput" type="text" />
        <button onClick={() => this.handleClick()}>Agregar</button>
        </div>
        <ul>
            {/* hacer un loop del estado tasks para imprimir en PANTALLA
            cada task dentro de un <li> */}
            {/* "task" podria llamarse de cualquier otra forma */}
            {this.state.tasks.map((task, key) => {
              return (
                <li key={key}>{task}</li>
              )
            })}
        </ul>
      </React.Fragment>
    );
  }

}

export default App;
