import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props);
    //siempre se debe llamar this.state
    //no siempre debe ser un booleano
    this.state = {
      like: 'No me gusta'
    }
  }

  //handleClick es una convencion (el nombre digamos)
  handleClick() {
    if (this.state.like == 'Me gusta') {
      this.setState({
        like: 'No me gusta'
      })
    } else {
      this.setState({
        like: 'Me gusta'
      })
    }
  }

  render() {
    return (
      <div>

        <p>{this.state.like}</p>
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