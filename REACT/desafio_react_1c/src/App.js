import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
class App extends React.Component {
  ////antes era tipo funcion:
  // function App() {
  render() {
    return (
     <div>
       <Navbar />
       <Cards />
      <h5>{`Made with ♥︎ by `}<a href="#">@Guido Martín</a></h5>
     </div>
    );
  }
}


  export default App;
