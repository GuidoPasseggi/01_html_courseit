import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Prueba extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        {/* 
        ESTE "PRUEBA" LO DEJAMOS DE USAR, 
        LO SACAMOS DE "SRC/INDEX.JS"
        Y LO REEMPLAZAMOS POR "AGREGAR"
         */}

        <Link to="/">Ir a la home</Link>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Prueba;
