import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Projects from './components/Projects';
import './App.css';
// importamos AXIOS ! leer mas abajo como instalar
import axios from 'axios';


// Hacemos el FETCH en APP porque queremos verlo cuando la pagina
// carga!
// tambien cuando es asi, tenemos que hacerlo con 
// ciclo de vida de un componente  + componentDidMount
// --
// en cambio, si fuese ante la accion de un usuario que queremos cargarlo
// ahi no usamos ciclo de vida si no directamente eventos de JSX 

// ACA USAMOS LIBRERIA "AXIOS" POR PRIMERA VEZ!!!
// opcion 1) HTTP REQUEST -> FETCH
// opcion 2) AXIOS <-- Se instala con "npm install axios" en terminal

class App extends React.Component {
  
  //// PASO NUMERO 2:
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      bio: '',
      profilePic: '',
      repos: []
    }
  }

  //// PASO NUMERO 1:
  //aca usamos AXIOS en reemplazo de FETCH, es muy similar,
  //con la ventaja de que no tenemos que hacer dos lineas
  //es decir no hay que transformar de un STRING a un JSON
  async componentDidMount() {
    alert('Falta hacerle CSS')
    // "github" nos devuelve un OBJETO
    const github = await axios('https://api.github.com/users/juanigallo')
    console.log(github.data) // la info esta dentro de .data 
    // "repos" nos devuelve un ARRAY
    const repos = await axios('https://api.github.com/users/juanigallo/repos')

    //// PASO NUMERO 3:
    // desestructuramos la info de github
    const {name, bio, avatar_url} = github.data //el .data viene de AXIOS
    
  
    this.setState({
      name: name,
      bio: bio,
      profilePic: avatar_url,
      repos: repos.data
    })
  }

  
  render() {

 // "desestructuramos", solo para no repetir el "this.state"
 // mas abajo, es opcional, no es necesario (pero si no lo hacemos,
 // abajo en Navbar/Info/etc... tenemos que poner
 // {this.state.name} y asi y asi)
    const {name, profilePic, bio, repos} = this.state

    return (
     <React.Fragment>
      <Navbar name={name}/>
      <Info profilePic={profilePic} bio={bio} />
      <Projects repos={repos} />
      </React.Fragment>
    )
  }
}

export default App;


// https://api.github.com/users/juanigallo
// https://api.github.com/users/juanigallo/repos

// Dinamico: 
// Nombre
// bio
// imagen
// proyectos

// - Se puede componentizar la imagen tambien 

// - Project seria como una card, un solo componente
// que se itera con un .map 

// - fetch: 
// hay que hacer DOS!! 1)github 2) repos
// se podria poner en "componentDidMount" (los fetch ahi)
// (pero no sabemos aun en que componente)
// no en constructor! si no en el render
// o despues del RENDER
// porque queremos informacion a la hora
// de CARGAR la pagina
// UPDATE! LOS DOS FETCH EN APP!!!
// para no tener que hacerlo repetidos
// en otros componentes

// en la data gral devuelve un OBJETO:
// podemos guardar solo la info que queremos
//---
// en la daa de REPOS devuelve un array:
// por ende debemos guardar un DATA gral. 
// inevitablemente

// en render (ejemplo desestructurar objeto):
// const [inputValue, blablah, blah3] = this.state;
