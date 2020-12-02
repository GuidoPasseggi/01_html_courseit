import React from "react";
import Nav from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleData(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  componentDidMount() {
    console.log(localStorage);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <>
        {alert(
          "product esta roto porque toma los datos de un JSON en vez del localStorage como en la ultima actualizacion del ejercicio (ver cards)"
        )}
        <Nav
          showAutoComplete={true}
          getData={(inputValue) => this.handleData(inputValue)}
        />
        <Cards filter={inputValue} />
        <Footer />
      </>
    );
  }
}

export default App;
