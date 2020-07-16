import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

class Prueba extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Soy una prueba</p>

        <Link to="/">Ir a la home</Link>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Prueba;

//// vamos a necesitar:
// 7 onChange
// 1 onclick + ifs en el onClick y JSX
// estado interno con cada input
// estados que se modifiquen con cada onChange
// validaciones
