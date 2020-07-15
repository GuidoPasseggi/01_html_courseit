import React from 'react'
import InnerCarousel from '../InnerCarousel/index'
import Title from '../Title/index'
import '../Carousel/style.css'

// ESTE EJERCICIO FUE REALIZADO "SIN CALLBACKS" 
// <-- lo ideal es hacerlo CON

class Carousel extends React.Component {

  render() {

    return (
      <div>
        <Title title='Tu busqueda'/>
        <InnerCarousel results={this.props.results}/>
      </div>
    )
  }
}

export default Carousel


// import React from 'react'
// import InnerCarousel from '../InnerCarousel'

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       inputValue: "",
//       products: []    
//     }
//   }

//   handleChange(e) {
//     console.log(e.target.value)
//     this.setState({
//       inputValue: e.target.value
//     })
//   }

//   handleClick() {

//   }

//   render() {
//     console.log(this.props.products)
//     return(
//       <div>
//       <h1 className="main-title">{this.props.title}</h1>
//       <div className="input-container">
//         <input onChange={(e) => this.handleChange(e)} type="text" className="input" placeholder="Ingresá tu búsqueda" />
//         <button onClick={() => this.handleClick()}>Buscar</button>
//       </div>
//       <InnerCarousel inputValue={this.state.inputValue} title={this.props.title} />
//     </div>
//     )
//   }
// }

// export default Carousel;

// /*
// <div>
//     {this.state.map((item, key) =>{
//         return (
//             <Card key={key} item={item}/>
//         )
//     })}
// </div>
// */


// /*
// <div className="card-all">
//                 <h1 className="meliTitle">{this.props.title}</h1>
//                 <Card className="card-all" items={this.state.items}/>
//              </div>
// */