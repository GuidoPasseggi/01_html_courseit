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
////
//// OJO! que puede dar un numero aleatorio que sea mayor a la cantidad de elementos en el ARRAY, pero las chances son muuuuuy bajas
//// Math.floor = redondea al numero mas bajo
//// Math.random = genera un numero random con varios decimales (de 0 al 0.9999999999999 )
//// luego se multiplica por el listadoDePalabras.length para que de un numero mas grande segun los elementos del array

////////////////////////////////////////////////////////////

//// Version "Guido" (yo)
//// -- haciendo un array de objetos
//// -- lo negativo es que no puedo trabajar los KEY y VALUE de los objetos por separado


// const palabrasMalas = [
//   { "Almóndiga": "Albóndiga" },
//   { "Setiembre": "Septiembre" },
//   { "Dentrífico": "Dentífrico" },
//   { "Pastaflora": "Pastafrola" },
//   { "Tergopol": "Telgopor" },
//   { "Murciégalo": "Murciélago" },
//   { "Estuatua": "Estatua" },
//   { "Sambuche": "Sándwich" },
//   { "Captus": "Cactus" },
//   { "Mondiola": "Bondiola" },
//   { "Picapuerta": "Picaporte" },
//   { "Zanagoria": "Zanahoria" },
//   { "Picoparéntesis": "Diple" },
//   { "Me relaja": "Me empalaga" },
//   { "Alverja": "Arveja" },
// ];

// function randomizador() {
//   const iRandomizado = Math.floor(Math.random() * palabrasMalas.length);
//   console.log(palabrasMalas[iRandomizado]);
// }

// randomizador();

////////////////////////////////////////////////////////////

//// Version "pkupersmit" (user Courseit)
//// -- Es parecido a mi ejemplo, pero mejor porque la función permite trabajar con el KEY/VALUE por separados!!


const diccionario = [
  { Almondiga: "Albóndiga" },
  { Setiembre: "Septiembre" },
  { Dentrífico: "Dentífrico" },
  { Pastaflora: "Pastafrola" },
  { Tergopol: "Telgopor" },
  { Murciégalo: "Murciélago" },
  { Estuatua: "Estatua" },
  { Sambuche: "Sánguche" },
  { Captus: "Cactus" },
  { Mondiola: "Bondiola" },
  { Picapuerta: "Picaporte" },
  { Zanagoria: "Zanahoria" },
  { Picoparéntesis: "Signo de mayor y menor" },
  { "Me relaja": "Me empalaga" },
  { Alverja: "Arveja" },
  { "Papel Hinigienico": "Papel Higiénico" },
  { Picsa: "Pizza" },
  { Picsa: "Pizza" },
  { Moritoneo: "Monitoreo" },
];

function educandoAlSoberano() {
  let randomWord = Math.floor(Math.random() * diccionario.length);
  let badWord = Object.getOwnPropertyNames(diccionario[randomWord]);
  // el tucu recomienda usar Object.Keys en vez de Object.getOwnPropertyNames
  let correcWord = Object.values(diccionario[randomWord]);
  console.log("No se dice " + badWord + ", bruto, se dice " + correcWord);
}

educandoAlSoberano();


////////////////////////////////////////////////////////////

//// NOT MINE                       X
//// -- haciendo dos arrays
//// -- lo negativo es que deben ambos arrays mantener el indexado

// function educandoAlSoberano() {
//   const palabras = ["setiembre", "almondiga", "dentrífico", "murciegalo", "alverja"];
//   const respuestas = ["septiembre", "albóndiga", "dentífrico", "murciélago", "arveja"];
//   const i = Math.floor(Math.random() * palabras.length)

//   console.log("La palabra " + palabras[i] + " se escribe " + respuestas[i])
// }

