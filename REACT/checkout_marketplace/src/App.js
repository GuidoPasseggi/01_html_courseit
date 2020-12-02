import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Soy APP</div>
        <p>
          Soy un P dentro de APP: IMPORTANTE: importar "withRouter" para usar la
          ruta del Carousel ya que esta en un componente aparte
        </p>
        <Link to="/checkout">
          {" "}
          <button>Ir al checkout</button>
        </Link>
        <Carousel />
      </React.Fragment>
    );
  }
}

export default App;
