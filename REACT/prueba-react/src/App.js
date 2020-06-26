import React from 'react';
import Carousel from './components/Carousel'

class App extends React.Component {
  render() {
    const items = [
      {
        img: "https://courseit.com.ar/static/logo.png",
        title: 'Primer producto',
        price: 1000
      },
      {
        img: "https://courseit.com.ar/static/logo.png",
        title: 'Segundo producto',
        price: 2323
      },
      {
        img: "https://courseit.com.ar/static/logo.png",
        title: 'Tercer producto',
        price: 1
      },
      {
        img: "https://courseit.com.ar/static/logo.png",
        title: 'Cuarto producto',
        price: 20
      }
    ]

    const secondItems = []
    return (
      <div>
        <Carousel title="Carousel 1" items={items} />
        {/* <Carousel title="Carousel 2" items={secondItems}/> */}
      </div>
    )
  }
}

export default App;
