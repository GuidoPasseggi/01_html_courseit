import React from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNum: 0,
      secondNum: 0,
      result: 0
    }
  }

  handleChange(e) {
    this.setState({
      //sin los [] se rompe react, porque devolvemos un string 
      // del evento
      [e.target.name]: e.target.value
    })
  }

  //// Funcion que habia antes de hacer DINAMICA la funcion de arriba
  //// la cual antes se llamaba "handleFirstNum" y no tenia el
  //// "[e.target.name]
  //
  // handleSecondNum(e) {
  //   this.setState({
  //     secondNum: e.target.value
  //   })
  // }

  handleSum() {
    this.setState({
      //parseInt <--- transforma de STRING a NUMERO
      result: parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
    })
  }


  
  render() {

    return (
      <React.Fragment>
        <input name="firstNum" onChange={(e) => this.handleChange(e)} type="text" />
        <input name="secondNum" onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={() => this.handleSum()}>Sumar</button>
        <div>
          <p>Resultado: {this.state.result}</p>
        </div>

        <span>
          Disclaimer: Este ejercicio se realizó solamente con 1 <br/>
          componente, pero posteriormente<br/>
          veremos cómo realizar ejercicios similares<br/>
          con varios componentes, una vez que veamos<br/>
          "callbacks" en REACT
        </span>
      </React.Fragment>




    )
  }
}

export default Content;


//// Version optimizada/mejorada:
////(solo tiene 1 cambio, simplificacion de codigo en [e.target.name])

// constructor(props) {
//   super(props);

//   this.state = {
//     firstNum: 0,
//     secondNum: 0,
//     thirdNum: 0,
//     result: 0
//   }
// }

// handleChange(e) {
//   const { name, value } = e.target

//   this.setState({
//     [name]: value
//   })
// }

// handleSum() {
//   const { firstNum, secondNum, thirdNum } = this.state

//   this.setState({
//     result: parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum)
//   })
// }

// render() {
//   const { result } = this.state

//   return (
//     <React.Fragment>
//       <input name="firstNum" onChange={(e) => this.handleChange(e)} type="text" />
//       <input name="secondNum" onChange={(e) => this.handleChange(e)} type="text" />
//       <input name="thirdNum" onChange={(e) => this.handleChange(e)} type="text" />

//       <button onClick={() => this.handleSum()}>Sumar</button>
//       <div>
//         <p>Resultado: {result}</p>
//       </div>
//     </React.Fragment>
//   )
// }