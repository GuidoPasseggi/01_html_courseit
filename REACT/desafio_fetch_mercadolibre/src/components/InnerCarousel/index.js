import React from 'react';
import Cards from '../Cards/index'
import '../InnerCarousel/style.css'

class InnerCarousel extends React.Component {

  render() {
    
    return (
      <div className='cardsWrapper'>
        {this.props.results.map((result, key) => {
          return (
            <Cards key={key} result={result}/>
          )
        })}
      </div>
    )
  }
}
export default InnerCarousel;


// import React from 'react'
// import Card from '../Card'

// class InnerCarousel extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     }
//   }


//   async componentDidUpdate() {
//     console.log("Soy un componentDidUpdate")
//     const searchValue = this.props.inputValue
//     let infoMELI = `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}&limit=5`;
//     console.log(infoMELI)

//     const infoML = await fetch(infoMELI);
//     const infoMLJson = await infoML.json();
//     const infoMLResults = infoMLJson.results
//     this.setState({
//       items: infoMLResults
//     })
//   }

//   render() {

//     // console.log(this.props.products);

//     return (
//       <div>
//         <div className="card-flex" >
//           {this.state.items.map((item, key) => {
//             return (
//               <Card key={key} item={item} />
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// export default InnerCarousel;