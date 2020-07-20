import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        Soy App
        <Navbar />
        <Hero />
        <Carousel />
      </React.Fragment>
    );
  }
}

export default App;
