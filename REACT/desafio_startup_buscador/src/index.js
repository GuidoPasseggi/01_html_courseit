//// LINEAS QUE AGREGAMOS A ESTE ARCHIVO:
// import { BrowserRouter as Router, Route } from 'react-router-dom';

//// LINEAS QUE QUITAMOS DE ESTE ARCHIVO:
// sacamos algo que estaba por fuera de {App}
// aqui pero no recuerdo como se llamaba

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Agregar from "./pages/Agregar/index.js";
import ProductPage from "./pages/ProductPage/index.js";

ReactDOM.render(
  <Router>
    {/* ATENTI: poner "exact" como abajo
    para que la ruta sea exacta! */}
    <Route exact path="/" component={App} />
    <Route exact path="/agregar" component={Agregar} />

    {/*  Ruta dinamica: productos/idDeProducto ó Variable */}
    <Route exact path="/productos/:productId" component={ProductPage} />
  </Router>,
  // ATENTI: a la coma de aca arriba!
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
