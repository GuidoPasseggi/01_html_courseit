// Hacer una función que retorne AL AZAR, una palabra mal escrita y al lado su corrección, como por ejemplo:
// "Almondiga",
// "Setiembre",
// "Dentrífico",
// "Pastaflora",
// "Tergopol",
// "Murciégalo",
// "Estuatua",
// "Sambuche",
// "Captus",
// "Mondiola",
// "Picapuerta"
// "Zanagoria"
// "Picoparéntesis"
// "Me relaja"
// "Alverja"

//educandoAlSobrenano();
// > La palabra "Setiembre" se escribe "Septiembre"
//educandoAlSobrenano();
// > La palabra "Estuatua" se escribe "Estatua"
//educandoAlSobrenano();
// > La palabra "Picapuerta" se escribe "Picaporte"

////////////////////////////////////////////////////////////

//// dmourelle (user courseit) PARA ALEATORIZAR UN NUMERO REDONDEADO
//// 
//// let listadoDePalabras = ["Alverja", "Setiembre", "Me relaja", "mondiola", "dentrifico", "picapuerta", "estuatua", "changuche"]; hice ese variable y despues
//// aleatorio = Math.floor(Math.random()*(listadoDePalabras.length)); seleccion = listadoDePalabras[aleatorio]

////////////////////////////////////////////////////////////

//// Version "Guido" (yo)
//// -- haciendo un array de objetos
//// -- lo negativo es que no puedo trabajar los KEY y VALUE de los objetos por separado


let palabrasMalas = [
  { "Almóndiga": "Albóndiga" },
  { "Setiembre": "Septiembre" },
  { "Dentrífico": "Dentífrico" },
  { "Pastaflora": "Pastafrola" },
  { "Tergopol": "Telgopor" },
  { "Murciégalo": "Murciélago" },
  { "Estuatua": "Estatua" },
  { "Sambuche": "Sándwich" },
  { "Captus": "Cactus" },
  { "Mondiola": "Bondiola" },
  { "Picapuerta": "Picaporte" },
  { "Zanagoria": "Zanahoria" },
  { "Picoparéntesis": "Diple" },
  { "Me relaja": "Me empalaga" },
  { "Alverja": "Arveja" },
];

function randomizador() {
  const iRandomizado = Math.floor(Math.random() * palabrasMalas.length);
  console.log(palabrasMalas[iRandomizado]);
}
////////////////////////////////////////////////////////////

//// Version "enleguizamon" (user courseit)
//// -- haciendo dos arrays
//// -- lo negativo es que deben ambos arrays mantener el indexado

//
// function educandoAlSoberano() {
//   const palabras = ["setiembre", "almondiga", "dentrífico", "murciegalo", "alverja"];
//   const respuestas = ["septiembre", "albóndiga", "dentífrico", "murciélago", "arveja"];
//   const i = Math.floor(Math.random() * palabras.length)

//   console.log("La palabra " + palabras[i] + " se escribe " + respuestas[i])
// }

