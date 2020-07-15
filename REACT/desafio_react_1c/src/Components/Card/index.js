import React from 'react'

class Card extends React.Component {
  render() {
    // para desestructurar o simplificar el codigo, 
    //u objeto en este caso
    // tambien se usa el valor singular "startup"
    // que es el valor individual de cada vuelta del .map
    // realizado en "startupS" en Cards
    const {img, title, description} = this.props.startup
    
    return (
      <div>
        {/* se le pasa el prop "startup" singular */}
        <img src={img} />
        {/* este "p" esta mapeado, 
        por eso es mejor evitar usar encabezados "h2/3/etc" */}
        <p>{title}</p>
        <p>{description}</p>
      </div>
    )
  }

}

export default Card;
