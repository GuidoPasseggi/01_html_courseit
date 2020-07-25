///////////////////////////////////////////////////////////////////////////
/////// V3: usando LocalStorage en vez de startups.json
///////
//
//Por un lado:
//En nuestro componente CARDS en lugar de leer la informacion del JSON,
//la vamos a leer desde localStorage (localStorage.getItem('key))
//
//Por otro lado:
// En nuestro page AGREGAR vamos a guardar todas las startups que creemos
// en nuestro localStorage.
//
// Datos adicionales:
// JSON.parse -> Transforma de string a JSON
// JSON.stringify -> Transforma de JSON a string
// parseInt -> Transforma de string a number
// localStorage.setItem('key','value') -> Agregar un valor a localStorage
// localStorage.getItem('key') -> Lee un valor de localStorage
// localStorage.clear() -> Borra todo nuestro localStorage
// localStorage.removeItem('key') -> Elimina una key de nuestro localStorage
//
//// VER TAMBIEN "AGREGAR" que es donde cargamos startups al localStorage

import React from "react";
import Card from "../Card";
// import startups from "../../data/startups.json";
import "./style.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const startups = localStorage.getItem("startups"); // Leemos las startups del localStorage
    const parsedStartups = JSON.parse(startups); // Transformamos de strings a JSON(array/objetos)

    this.setState({
      cards: parsedStartups
    });
  }

  render() {
    const { cards } = this.state;
    const { filter } = this.props;
    return (
      <div className="cardsContainer">
        {cards.map((card, key) => {
          return (
            <React.Fragment>
              {card.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Card
                  key={key}
                  name={card.name}
                  img={card.logo}
                  desc={card.desc}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Cards;

///////////////////////////////////////////////////////////////////////////
/////// V2: usando startups.json
/////// y previo a jugar con el LocalStorage
//
// import React from "react";
// import Card from "../Card";
// import startups from "../../data/startups.json";
// import "./style.css";

// class Cards extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: startups
//     };
//   }

//   render() {
//     const { cards } = this.state;
//     const { filter } = this.props;
//     return (
//       <div className="cardsContainer">
//         {cards.map((card, key) => {
//           return (
//             <React.Fragment>
//               {card.name.toLowerCase().includes(filter.toLowerCase()) && (
//                 <Card
//                   key={key}
//                   name={card.name}
//                   img={card.logo}
//                   desc={card.desc}
//                 />
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Cards;

///////////////////////////////////////////////////////////////////////////
/////// V1: cuando no usabamos el startups.json y usabamos
/////// un array con info hardcodeada
//
// import React from "react";
// import Card from "../Card";
// import "./style.css";

// class Cards extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [
//         {
//           name: "CourseIt",
//           img:
//             "https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg",
//           desc: "Desc courseit"
//         },
//         {
//           name: "Endava",
//           img:
//             "https://pbs.twimg.com/profile_images/1052208764726730753/s5bagDr__400x400.jpg",
//           desc: "Desc endava"
//         }
//       ]
//     };
//   }

//   render() {
//     const { cards } = this.state;
//     const { filter } = this.props;
//     return (
//       <div className="cardsContainer">
//         {cards.map((card, key) => {
//           return (
//             <React.Fragment>
//               {card.name.toLowerCase().includes(filter.toLowerCase()) && (
//                 <Card
//                   key={key}
//                   name={card.name}
//                   img={card.img}
//                   desc={card.desc}
//                 />
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Cards;
