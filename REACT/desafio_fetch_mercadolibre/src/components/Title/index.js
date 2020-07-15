import React from 'react'
import '../Title/style.css'

class Title extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Title


// import React from 'react'

// class Title extends React.Component {
//   render() {
//     return(
//       <div>
//         <h2>Soy un titulo</h2>
        
//       </div>
//     )
//   }

// }

// export default Title;