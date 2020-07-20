import React from "react";
import Navbar from "../../components/Navbar";
import "../Agregar/style.css";
// import { Link } from "react-router-dom";

class Agregar extends React.Component {
  // PASO 2
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      logo: "",
      mail: "",
      description: "",
      web: "",
      twitter: "",
      instagram: "",
      // PASO 6: <-- ver tamb la actualizacion de estado en handleClick
      estaOk: "",
      showMessage: false
    };
  }

  // PASO 3
  // para obtener el NOMBRE y el VALOR
  // de lo que sea que estemos modificando
  handleChange(e) {
    const { name, value } = e.target;

    // actualizacion dinamica de las claves (corchetes)
    this.setState({
      // lee la variable name, y la value
      // asi nos evitamos tener que hacer 7 actualizaciones distintas
      // ej. si actualizamos "logo" el "name" es "logo" (ver paso 1)
      // y su "value" es lo que sea que coloquemos en su input
      [name]: value
    });
  }

  // PASO 5
  // queremos validar los datos ingresados en los inputs
  handleClick() {
    const { name, email, logo, desc } = this.state;

    //// VERSION RESUMIDA:
    // const isValid = name && email && logo && desc ? true : false;

    // this.setState({
    //   estaOk: isValid,
    //   showMessage: true
    // })

    // VERSION SIN RESUMIR:
    // && es como "Y ESTO" pero tamb chequea existencia!
    if (name && email && logo && desc) {
      // console.log("todo esta OK");
      this.setState({
        estaOk: true,
        showMassage: true //true aca y en else tamb
      });
    } else {
      // console.log("Todo esta mal");
      this.setState({
        estaOk: false,
        showMessage: true //true aca y en el if tamb
      });
    }
  }

  render() {
    const { estaOk, showMessage } = this.state;

    // <> + </> es equivalente a <React.Fragment>
    return (
      <>
        {/* PASO 1 */}
        <Navbar />
        {/* PASO 8 condicional simple, "si showMessage esta en true, entonces
          corré el condicional del p.7, si no, no corras nada */}
        {/* PASO 7 <-- con ternario de 1 sola linea */}
        <div className="wrapper-agregar">
          {showMessage && (
            <p>{estaOk ? "Todo salio bien" : "Todo salio mal"}</p>
          )}

          <p className="title-agregar">Nombre</p>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="title-agregar">Logo</p>
          <input
            type="text"
            name="logo"
            placeholder="Logo"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="title-agregar">Mail</p>
          <input
            type="text"
            name="email"
            placeholder="Mail"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="title-agregar">Descripcion</p>
          <input
            type="text"
            name="desc"
            placeholder="Descripcion"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="title-agregar">Web</p>
          <input
            type="text"
            name="web"
            placeholder="Web (opcional)"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="title-agregar">Twitter</p>
          <input
            type="text"
            name="twitter"
            placeholder="Twitter (opcional)"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="title-agregar">Instagram</p>
          <input
            type="text"
            name="instagram"
            placeholder="Instagram (opcional)"
            className="input"
            onChange={(e) => this.handleChange(e)}
          />
          {/* PASO 4 (handleClick en button) */}
          <button className="button" onClick={() => this.handleClick()}>
            Enviar
          </button>

          <span className="nota">
            Por lo general las "pages" como esta, son un conjunto de
            componentes, por lo cual NO TIENEN style propio (si no que lo sacan
            de c/componente) pero para este ejercicio vamos a hacerlo con
            style.css y el "agregar" en una carpeta aparte (y en vez de llamarlo
            "agregar.js" y dejar el archivo suelto en "./pages", creamos carpeta
            nueva ".pages/Agregar" y ponemos un "index.js" + "style.css")
          </span>
        </div>
      </>
    );
  }
}

//// NOTA:
//// P: Hay forma de que cuando hagamos click
//// mostrar en un "p" todos los "state" que
//// tenga, o deberia mostrar uno por uno?
//// R (Juani): Si quisieramos podriamos
//// mapear un objeto en REACT (no funcionara esto ojo):
//
// Object.keys(this.state).map((unique) => {
//   return (
//   <p>Key: {unique} - Value: {this.state[unique]}</p>
//   )
// })

export default Agregar;
