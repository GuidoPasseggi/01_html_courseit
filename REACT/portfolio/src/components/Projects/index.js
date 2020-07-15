import React from 'react'
import Project from '../Project'
import './style.css'

class Projects extends React.Component {
  render(){
    const {repos} = this.props
   return(
     <React.Fragment>
     <p>Projects:</p>
     
     <ul>
     {this.props.repos.map((repo, key) => {
       return (
         // recordar siempre poner la key, es el num de vuelta
         // lo solicita react para mejorar la performance entre
         // el virtual dom y el dom.
         // puede quedar asi o poner el ID que viene de Github
         // -- es el equivalente el I o INDEX de un CICLO FOR
         <Project key={key} repo={repo} />
       )
     })}
    </ul>
    
     </React.Fragment>
   ) 
  }

}

export default Projects;