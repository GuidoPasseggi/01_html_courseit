import React from 'react';
import Autocomplete from './components/Autocomplete'
import '../src/App.css'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autocompleteValue: ''
    }
  }

  handleCallback(inputValue) {
    this.setState({
      autocompleteValue: inputValue
    })
  }

  render() {
    return (
      <React.Fragment>
        <nav style={{width: "100%", backgroundColor: 'red', height: '50px'}}>
          <Autocomplete handleCallback={(inputValue) => this.handleCallback(inputValue)} />
        </nav>
        <div>
          Tu autocomplete dice: {this.state.autocompleteValue}
        </div>
      </React.Fragment>
    )
  }
}


// function greetings(a) {
//   console.log(`Hola ${a}`)
// }

export default App;