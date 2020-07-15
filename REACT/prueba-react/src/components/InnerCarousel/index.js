import React from 'react'
import Card from '../Card'

//El constructor es una funcion magica que tiene la particularidad
//de ejecutarse automaticamente al instanciarse
// un componente

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);
    console.log('Soy el InnerCarousel')
  }
  
  render() {
    // esta la declaramos solo para simplificar abajo con "items"
    const { items } = this.props
    return (
      <div>
        {/* 1) Con map hacemos un bucle 
        2) poner siempre el key (se puede llamar distinto, por convencion es key)
        3) item se puede cambiar de nombre, "value" por ej.*/}
        {items.map((item, key) => {
          return (
            <Card key={key} item={item} />
          )
        })}
      </div>
    )
  }
}

export default InnerCarousel