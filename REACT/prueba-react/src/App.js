import React from 'react';
import Carousel from './components/Carousel'

class App extends React.Component {
  render() {
    const items = [
      {
        img: "https://i.ibb.co/rFkDT4t/number-01-250-250.jpg",
        title: 'Primer producto',
        price: 1000
      },
      {
        img: "https://i.ibb.co/88V2kjM/number-02-250-250.jpg",
        title: 'Segundo producto',
        price: 2323
      },
      {
        img: "https://i.ibb.co/pfm5S28/number-03-250-250.jpg",
        title: 'Tercer producto',
        price: 1
      },
      {
        img: "https://i.ibb.co/jrLkfgX/number-04-250-250.jpg",
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
