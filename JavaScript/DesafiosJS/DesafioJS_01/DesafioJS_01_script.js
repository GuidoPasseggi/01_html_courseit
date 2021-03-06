////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//// Clase 20-04-22 "JS / Condicionales y bucles
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// EJERCICIO   01
//
//
// Dada una variable "y" que puede contener un número de 1 a 7, determinar a que día de la semana corresponde. 
// Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).


// let y = 8;

// if (y == 1) {console.log ("Lunes")}
// else if (y == 2) {console.log ("Martes")}
// else if (y == 3) {console.log ("Miércoles")}
// else if (y == 4) {console.log ("Jueves")}
// else if (y == 5) {console.log ("Viernes")}
// else if (y == 6) {console.log ("Sábado")}
// else if (y == 7) {console.log ("Domingo")}
// else {console.log ("Valor no válido")};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   02
//
//
// Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.


// V1 (Guido)

// let nombreMes = "Marzo";

// let Dias31 = 31;
// let Dias28 = 28;
// let Dias30 = 30;

// if (nombreMes == "Enero") {
//   console.log(nombreMes + " tiene " + Dias31 + " dias.")
// }
// else if (nombreMes == "Febrero") {
//   console.log(nombreMes + " tiene " + Dias28 + " dias.")
// }
// else if (nombreMes == "Marzo") {
//   console.log(nombreMes + " tiene " + Dias31 + " dias.")
// }
// else if (nombreMes == "Abril") {
//   console.log(nombreMes + " tiene " + Dias30 + " dias.")
// }
// else {
//   console.log("Ud. ha ingresado cualquier fruta.")
// };

// V2 (Clase)

// let meses = 'Enero'

// if (meses == 'Enero') {
//   console.log(31)
// }
// else if (meses == 'Febrero') {
//   console.log(28)
// }
// else if (meses == 'Marzo') {
//   console.log(31)
// }
// else if (meses == 'Abril') {
//   console.log(30)
// }
// else if (meses == 'Mayo') {
//   console.log(31)
// }
// else if (meses == 'Junio') {
//   console.log(30)
// }
// else if (meses == 'Julio') {
//   console.log(31)
// }
// else if (meses == 'Agosto') {
//   console.log(31)
// }
// else if (meses == 'Septiemnbre') {
//   console.log(30)
// }
// else if (meses == 'Octubre') {
//   console.log(31)
// }
// else if (meses == 'Noviembre') {
//   console.log(30)
// }
// else if (meses == 'Diciembre') {
//   console.log(31)
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   03
//
//
// Dada una variable "x" la cual contiene un numero, determinar si ese numero es positivo o negativo
// (y que tambien identifique si es un CERO)
//
// Un número real es positivo si no es 0 ni un número negativo. 
// El número 0 se considera un número neutro. A veces se puede usar para dividir o multiplicar por el mismo número. ...
// En tal caso, se dice que los números mayores que 0 son estrictamente positivos.


//V1 (Guido)
//

// x = 0;

// if (x > 0) { console.log("El número es positivo") }
// else if (x < 0) { console.log("El número es negativo") } 
// else if (x == 0) { console.log("El número es cero, ni negativo ni positivo") } 
// else {
// console.log("No ingresó un número válido")
// }


//V2 (Clase)
//-- chequearon primero si es un numero o no,
//-- con una funcion typeOf]
//--[tambien se puede hacer con isNaN()

// NaN  = "Not a Number"
// !isNaN() <--- el ! invierte la funcion

// google:
// isNaN() – Stands for “is Not a Number”, if variable is not a number, it return true, else return false.
// typeof – If variable is a number, it will returns a string named “number”.

// x = "Soy texto";

// if (typeof x == "number") {
//   if (x > 0) { console.log("El número es positivo") }
//   else if (x < 0) {
//     console.log("El número es negativo") }
//   else if (x == 0) {
//     console.log("El número es cero, ni negativo ni positivo") }
// } else {
//   console.log("No ha ingresado un número")
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   04
//
//
// Dada una variable "x" la cual contiene una letra, determinar si es una vocal.

// // V1 (Guido) 
// -- la const "vocales" no seria necesaria, solo necesitaria una
// -- lo malo de esto es que no chequea si el INPUT es un número, y todo lo que no esté
// -- en el ARRAY de VOCALES lo toma como una consonante

// x = "u";

// const consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
// const vocales = ["a", "e", "i", "o", "u"];

// if (vocales.indexOf(x) == -1) {
//   console.log("La letra una consonante")
// } else {
//   console.log("La letra es vocal")
// }

// console.log(vocales.indexOf(x));

// indexOf" returns -1 if the number is not found. It returns something other than -1 if it is found.
// Change your logic if you want.
// IE and other obscure/older browsers will need the indexOf method


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   05
//
//
// Dadas dos variables ("x" e "y") las cuales contienen un numero, determinar cual es mayor.

// const x = "7";
// const y = "6";

// if (x < y) {
//   console.log("'Y' es mayor que 'X'. 'Y' es igual a: " + y + " y 'X' es igual a " + x)
// } else {
//   console.log("'X' es mayor que 'Y'. 'X' es igual a: " + x + " e 'Y' es igual a " + y)
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   06
//
//
// Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "for"

// let i = 1;

// for (i ; i <= 10; i++) {
//   console.log(i);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   07
//
//
// Dada una variable "x" la cual contiene un numero, 
// imprimir en consola todos los numeros que esten entre el valor de la variable y 0.
// Ejemplo: Si la variable X es 3, imprimir en pantalla 3, 2, 1 y 0

// let x = 4;

// for (x ; x >= 0; x --) {
//   console.log(x);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   08
//
//
// Dadas distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin interés según el siguiente criterio.
// Mastercard – hasta 6 cuotas s/interés
// Visa – hasta 9 cuotas s/interés
// Amex – hasta 3 cuotas sin interés
// Todas las demás - 1 cuota sin interés

//// V1 (Guido)

// const a = 9;
// const b = 6;
// const c = 3;
// const d = 1;

// let tarjeta = "Kokemon-express";

// if (tarjeta == "Mastercard") {
//   console.log("Ud. tiene hasta " + b + " cuotas s/interés con su tarjeta " + tarjeta)
// } 
// else if (tarjeta == "Visa") {
//   console.log("Ud. tiene hasta " + a + " cuotas s/interés con su tarjeta " + tarjeta)
// }
// else if (tarjeta == "Amex") {
//   console.log("Ud. tiene hasta " + c + " cuotas s/interés con su tarjeta " + tarjeta)
// }
// else {
//   console.log("Ud. tiene hasta " + d + " cuota s/interés con su tarjeta " + tarjeta)  
// }


//// V2 (Tucu *if)

// let card = "Mastercard";

// if (card != undefined || card != null) {
//   if (card == "Visa") {

//     console.log("9 cuotas sin interés");
//     console.log("6 cuotas sin interés");
//     console.log("3 cuotas sin interés");
//     console.log("1 cuota sin interés");

//   } else if (card == "Mastercard") {
//     console.log("6 cuotas sin interés");
//     console.log("3 cuotas sin interés");
//     console.log("1 cuota sin interés");

//   } else if (card == "Amex") {
//     console.log("3 cuotas sin interés");
//     console.log("1 cuota sin interés");

//   } else {
//     console.log("1 cuota sin interés");
//   }
// } else {
//   alert("Che, pasame una tarjeta, no seas mala onda, porfa");
// }

//// V3 (Clase)

// // 1. Crear un diccionario de tarjetas y sus posibles valores de cuotas.
// const tarjetas = [{
//   cardName: "Visa",
//   installments: [1, 3, 6, 9, 12]
// },
// {
//   cardName: "Mastercard",
//   installments: [1, 3, 6]
// },
// {
//   cardName: "Amex",
//   installments: [1, 3]
// },
// {
//   cardName: "Tucu",
//   installments: [1, 3, 18]
// },
// {
//   cardName: "Norteña",
//   installments: [1]
// }];


// // 2. Recibir una tarjeta en particular
// let card = "Visa";
// console.log("La tarjeta a buscar es: " + card);


// let selectedCard = undefined;

// for (let i = 0; i < tarjetas.length; i++) {
//   const currentCard = tarjetas[i];

//   if (currentCard.cardName == card) {
//     selectedCard = currentCard;
//   }
// }

// if (selectedCard != undefined) {
//   console.log("La tarjeta seleccionada es: ", selectedCard);

//   for (let i = 0; i < selectedCard.installments.length; i++) {
//     const installment = selectedCard.installments[i];

//     if (installment == 1) {
//       console.log(installment + " cuota sin interés.");
//     } else {
//       console.log(installment + " cuotas sin interés.");
//     }

//     // console.log( installment + (installment == 1 ? " cuota" : " cuotas") + " sin interés" );
//   }
// } else {
//   console.log("La tarjeta "+card+" no forma parte del diccionario");
//   console.log("1 cuota sin interés");
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   09 v1
//
//
// Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "while"


// x = 1;

// while (x <= 10) {
// console.log(x);
// x ++;
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   09 v2
//
//
// Imprimir los primeros 50 numeros pares: 2, 4, 6, 8, 10, etc. (/usando while)

////// (Guido *while)

// x = 0;

// while (x <= 50) {
//   console.log(x);
//   x += 2;
// }

////// (Clase *for)

// for (let i = 0; i <= 50; i++) { if (i % 2 == 0) { console.log(i); } }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//// Clase 20-05-06 "JS / Métodos, Strings y práctica"
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   1

// Crear una funcion que reciba como parametro un numero entero.
// Esa funcion tiene que recorrer desde 0 hasta el numero recibido
// e imprimir en pantalla: 
// "Fizz" si el numero actual es multiplo de 3
// "Buzz" si el numero actual es multiplo de 5
// "Fizzbuzz" si el numero actual es multiplo de 3 y 5.
// Si ninguna regla se cumple imprimir el numero.
// Ejemplo. 1 - 1 2 - 2 3 - Fizz 4 - 4 5 - Buzz 6 - Fizz 7 - 7 ... 15 - Fizzbuzz


//// TIP sacar restos con % ("operador de modulo")
//// 10 % 3 = 1 <-- Cuando da más que 0, significa que da "resto", por ende 10 no es multiplo de 3

// function fizzbuzz(input) {
//   for (i = 1; i <= input; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("Fizzbuzz")
//     }
//     else if (i % 3 == 0) {
//       console.log("Fizz")
//     }
//     else if (i % 5 == 0) {
//       console.log("Buzz")
//     }
//     else {
//       console.log(i)
//     }
//   }
// }

// console.log("No te olvides que a las funciones hay que 'llamarlas' (ej. tippeando en consola: 'fizzbuzz(31);' s/comillas)");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   2

// "Mayor numero dentro de un array" 
// Crear una funcion que devuelva el mayor numero dentro de un array
// Ejemplo:
// const arr = [3,5,1,10,23,13] // 23

//////// Guido                            Guido

// function CalcularMayor(lista) {
//   // lista = ([80,90,800,60,7]);  
//   // ^___  como ese array esta comentado,
//   // hay que tippar el array al ingresar
//   // la funcion en consola:
//   // CalcularMayor([80,90,800,60,7]);
//   lista.sort(function(a, b) {
//   return b - a;
// });
//   console.log(lista[0]);
// }

// //// PARA .sort en orden ascendente (de menor a mayor):
// // lista.sort(function(a, b) {
// //   return a - b;
// // });



////// NOT MINE                             1
//// -- (SIN TESTEAR)
//// -- OJO: list deberia estar integrado dentro de function

// let list = [51,30,5,47,96,66];

// function Exercise (Num) {
//  let maxNum = Math.max.apply(Math, Num);
//   console.log(maxNum);
// }

// exercise (num);

//////  NOT MINE                            2
//// -- (SIN TESTEAR)
//// -- OJO: list deberia estar integrado dentro de function

////// NOT MINE v2
//// -- (SIN TESTEAR)
//// -- WTF no lo entiendoooooooooo

// function elMayor(arr) {

//   let max = 0;

//   arr.forEach(function (number) {
//       if (number > max) {
//           max = number
//       }
//   })

//   console.log(max)
// }

//////  NOT MINE                            3
//// -- (SIN TESTEAR)

////Math.max.apply(null,"acá el array")

//Math.max.apply(null, [51,30,5,47,96,66])


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   3

//"Par de numeros mas grandes"
// Crear una funcion que devuelva los dos numeros mas grandes dentro de un array
// Ejemplo:
// const arr = [3,5,1,10,23,13] // 23,13

//////// Guido                            Guido

// function CalcularMayores(lista) {
//   lista = ([80,90,800,60,7]);  
//   // ^___  como ese array esta comentado,
//   // hay que tippar el array al ingresar
//   // la funcion en consola:
//   // CalcularMayor([80,90,800,60,7]);
//   lista.sort(function(a, b) {
//   return b - a;
// });
//   console.log(lista[0], lista[1]);
// }

// //// PARA .sort en orden ascendente (de menor a mayor):
// // lista.sort(function(a, b) {
// //   return a - b;
// // });


//////  NOT MINE                            1 
//// -- (SIN TESTEAR)

// function losDosMayores(arr) {

//   let firstMax = 0;
//   let secondMax = 0;

//   arr.forEach(function (number) {
//       if (number > firstMax)
//           firstMax = number
//   })

//   console.log(firstMax)

//   arr.forEach(function (number) {
//       if (number > secondMax && number != firstMax)
//           secondMax = number
//   })
//   console.log(secondMax)
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   4

//"Encontrar duplicados en un array"
// Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.
// Ejemplo:
// const arr = [1,2,3,2,3,4,1] // 2,3,1

//////// Guido                            Guido/internet

// const arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 5, 7, 8, 7, 9, 9, 9, 9, 7, 7];

// function CualesDuplicados(array) {
//   let NumDuplicados = [];
//   let NumUnicos = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         let ChequeoRepetidos = NumDuplicados.indexOf(array[i]) == -1;
//         if (ChequeoRepetidos) {
//           NumDuplicados.push(array[i]);
//         }
//       }
//     }
//   }
//   console.log("Los números duplicados son: " + NumDuplicados + ".");
// }

// console.log("No te olvides que para usar una funcion, hay que llamarla. Por ej.: CualesDuplicados(arr)");




//////  NOT MINE (clase)                           1 
//// -- (SIN TESTEAR, solo testeado en clase)

// const arr = [1, 5, 3, 5, 5, 5, 5, 1];

// function duplicados(arr) {
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++ {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         let noExiste = duplicates.indexOf(arr[i]) == -1;
//         //^__ con esa linea, comprueba cualquier valor que
//         // no encuentre en el array duplicated, va a dar "-1"
//         // por IndexOf. 
//         // Es como para evitar mostrar más valores
//         // identicos duplicados, si 5 se repite 4 veces.
//         // Recordar que IndexOf devuelve -1 si no encuentra
//         // un valor dentro del indice de un array
//         if (noExiste) {
//           duplicates.push(arr[i]);
//         }
//       }
//     }
//   }
//   console.log(duplicates);
// }


//////  NOT MINE (Juani)                           1 
//// -- (SIN TESTEAR, solo testeado en clase)
//// -- Usó funciones de flecha "<="
//// -- Desventajas!!! Muestra los valores duplicados
//// -- pero si estan + de 2 veces, los repite al mostrarlos

// function duplicates(arr) {
//   const found = []
//   const duplicates = []

//   arr.map((num) => {
//     if (found.indexOf(num) > -1) {
//       duplicates.push(num)
//     } else {
//       found.push(num)
//     }
//   })

//   return duplicates
// }


////// INTERNET no lo adapté ni lo testeé todavia               ???
//// -- usa filtros
//// -- no conozco "Array.prototype.contains"

// let objList = [1,1,4,3,5,3,1,5,6,8,9,10,9];

// let uniqueList = [];
// let dupList = [];

// Array.prototype.contains = function(item){
//   let filtered_item = this.filter((i) => {
//     return i.id === item.id
//   });
//   return !!filtered_item.length;
// }

// function contains(list, item){
//   let filtered_item = list.filter((i) => {
//     return i.id === item.id
//   });
//   return !!filtered_item.length;
// }

// function pushToUniqueList(item){
//   if(!uniqueList.contains(item)) uniqueList.push(item);
// }

// function pushToDuplicateList(item){
//   if(!dupList.contains(item)) dupList.push(item);
// }

// for(let i = 0; i < objList.length; i++){
//   if(uniqueList.contains(objList[i])){
//     pushToDuplicateList(objList[i]);
//   } else {
//     pushToUniqueList(objList[i]);
//   }
// }

// console.log('Duplicate list is ', dupList);
// console.log('Unique list is ', uniqueList);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   5

// "Elementos no repetidos en un array"
// Crear una funcion que diga todos los elementos que aparecen
// solo una vez en un array.
// Ejemplo:
// const arr = [1,2,3,2,3,4,1] // 4



////// NOT MINE                             1
//// -- "ele" corregido por el "tucu" en clase 20-05-10
//// -- no lo testeamos 100% en clase

const arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 5, 7, 8, 7, 9, 9, 9, 9, 7, 7];

function Unicos(array) {
  let Uniques = [];
  for (let i = 0; i < array.length; i++) {
    let esRepetido = false;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        esRepetido = true;
      }
    }
    if (!esRepetido) {
      Uniques.push(array[i])
    }
  } console.log(Uniques);
}
////^___ con "&& i != j" 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   6

////// NOT MINE                             1
//// -- "lu" explicado en clase 
//// copiar y pegar el codigo aqui!!!

// usan la funcion/propiedad ".split", y luego reverse
// "Basicamente como yo lo entendi, con split haces
// que el string sea un array de las letras (split puede hacer mas cosas btw)
// con reverse das vuelta el array y con join lo volves a unir
// para que sea string. Entonces te da la palabra al reves"

// function palindrome(str) {
// 	let lowerCaseStr = str.toLowerCase();
//   	let checkPalindrome = lowerCaseStr.split("").reverse().join("");

// 	if(str === ""){
// 		console.log("No ingresaste ninguna palabra")
// 	} else if (lowerCaseStr == checkPalindrome) {
// 		console.log("La palabra " + str.toLowerCase() + " es palindromo");
// 	} else {
// 		console.log("La palabra " + str.toLowerCase() + " no es palindromo"); 
// 	} 
// }

// palindrome("SugUs")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   7

// "Inverso"
// Crear una funcion que devuelva el string
// que le enviamos pero invertido.
// reverse('juani') // inauj

////// NOT MINE                             1
//// -- "lu" explicado en clase 
//// copiar y pegar el codigo aqui de "ele"

// ella lo hizo chequeando con ford la palabra a la inversa,
// con "-1" para que no genere problemas con el indexado
// (cada letra del string analizado)
// y con "inverse = inverse + (word[i])" 
// 
// tucu tip con funcion de flecha:
// const myReverse = (word) => word.split("").reverse().join("")