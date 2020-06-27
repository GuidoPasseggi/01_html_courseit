import React from 'react'
import './style.css'
 
class Card extends React.Component {
  constructor(props) {
    super(props);
    //siempre se debe llamar this.state
    //no siempre debe ser un booleano
    this.state = {
      like: 'No me gusta',
      color: 'balck'
    }
  }

  //handleClick es una convencion (el nombre digamos)
  handleClick() {
    if (this.state.like == 'Me gusta') {
      this.setState({
        like: 'No me gusta',
        color: 'black'
      })
    } else {
      this.setState({
        like: 'Me gusta',
        color: 'red'
      })
    }
  }

//// PARA HACER EL CAMBIO DE COLOR CON "STYLE"
//   render() {
//     return (
//         <div>
//             <p style={{color: this.state.color}}>{this.state.like}</p>
//             <button onClick={() => this.handleClick()}>Darle like</button>
//         </div>
//     )

// }

  render() {
    return (
      <div>
        {/* asociamos el className de CSS al this.state */}
        <p className={this.state.color}>{this.state.like}</p>
        {/* en JSX se llama onClick */}
        <button onClick={() => this.handleClick()}>Darle like</button>
        <img src={this.props.item.img} />
        <p>Titulo: {this.props.item.title}</p>
        <p>Precio: ${this.props.item.price}</p>
      </div>
    )
  }
}

export default Card