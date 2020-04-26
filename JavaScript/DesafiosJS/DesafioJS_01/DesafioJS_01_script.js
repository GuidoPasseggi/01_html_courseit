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

x = "Soy texto";

if (typeof x == "number") {
  if (x > 0) { console.log("El número es positivo") }
  else if (x < 0) {
    console.log("El número es negativo") }
  else if (x == 0) {
    console.log("El número es cero, ni negativo ni positivo") }
} else {
  console.log("No ha ingresado un número")
}





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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   09 v1
//
//
// Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "while"

// x = 0;

// while (x < 10) {
//   x ++;
// console.log(x);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   09 v2
//
//
// Imprimir los primeros 50 numeros pares: 2, 4, 6, 8, 10, etc. (/usando while)

// x = 0;

// while (x <50) {
//   x += 2;
//   console.log(x);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO   09 v3
//
//
// Crear una funcion que reciba como parametro un numero entero. 
// Esa funcion tiene que recorrer desde 0 hasta el numero recibido e imprimir en pantalla la palabra "Fizz"
// si el numero actual es multiplo de 3, "Buzz" si el numero actual es multiplo de 5 o "Fizzbuzz"
// si el numero actual es multiplo de 3 y 5. Si ninguna regla se cumple imprimir el numero.
// Ejemplo. 1 - 1 2 - 2 3 - Fizz 4 - 4 5 - Buzz 6 - Fizz 7 - 7 ... 15 - Fizzbuzz

console.log("Me falta completar el ejercicio 09 v3 (ultimo de todos)");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

