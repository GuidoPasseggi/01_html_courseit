import React from 'react'
import './style.css'

class Autocomplete extends React.Component {
  handleChange(e) {
    //ACA VOY A TENER QUE HACER ALGO
    //VOY A TENER QUE EJECUTAR!!!!!!! UNA PROP
    //this.props.elNombreDeLaProp()
    //this.props.handleCallback()

    //PARA PASARLE INFORMACION A MI PADRE VOY A TENER QUE HACERLO POR PARAMETRO
    //this.props.handleCallback("SOY LA INFORMACION")
    //2311
    this.props.handleCallback(e.target.value)
  }



  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleChange(e)} type="text" />
      </React.Fragment>
    )
  }
}

export default Autocomplete