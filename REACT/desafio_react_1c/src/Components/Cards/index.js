import React from 'react'
import Card from '../Card'

class Cards extends React.Component {
  render() {
    //array de objetos
    const startups = [
      {
        img: "https://i.ibb.co/rFkDT4t/number-01-250-250.jpg",
        title: 'Titulo 1',
        description: 'Descripcion de Titulo 1'
      },
      {
        img: "https://i.ibb.co/88V2kjM/number-02-250-250.jpg",
        title: 'Titulo 2',
        description: 'Descripcion de Titulo 2'
      }
    ]

    // const { items } = this.props

    return (
    <div>
      {/* startup (singular) es el valor de cada vuelta */}
     {startups.map((startup, key) => {
       return (
        // aca le pasamos el valor startup
         <Card startup={startup} key={key} />
       )
     })}
    </div>
    )
  }
}

export default Cards;