///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Logica Basica (Tucu)
///////////////////////////////////////////////////////////

// Inicio del programa

// 1. Recibir el número a evaluar
const num = 4;

// Fix: Comproboar si el valor es efectivamente un número o no
if (typeof num == "number") {
  // Acá podemos estar seguros de que num es un número

  // 2. Comprobar si el número es positivo, negativo o cero
  // 3. Si el número es positivo:
  if (num > 0) {
    //   3.1 Imprimir en pantalla el texto "Es positivo"
    console.log("El número es positivo");
  }

  // 4. Si el número es negativo:
  else if (num < 0) {
    //   4.1 Imprimir en pantalla el texto "Es negativo"
    console.log("El número es negativo");
  } 

  // 5. Si el número es cero:
  else {
    //   5.1 Imprimir en pantalla el texto "Es cero"
    console.log("El número es cero");
  }

} else {
  // Acá, num no es un número
  console.log("El valor no es un número");
}

// Fin del programa

///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Logica cafetera (Tucu)
///////////////////////////////////////////////////////////

let preferencia = undefined;

if (preferencia != undefined || preferencia != null) {

  if (preferencia == "Frio") {
    replatearseLaVida();
  } else if (preferencia == "Caliente") {
    calentarAgua();
    
    if (tipoDeCafe != undefined || tipoDeCafe != null) {
      if (tipoDeCafe == "saquito") {
        ponerSaquito();
        verterAgua();
        esperar();
      } else if (tipoDeCafe == "batido") {
        verterCafeInstantaneo();
        verterPoquitaAgua();
        batir();
        verterRestoDelAgua();
        terminarDeBatir();
      }
    } else {
      alert("Escuchame una cosa, cómo lo querí");
    }
  
    ponerleMuchaAzucar();
  }

} else {
  alert("Poneme la preferencia, salame");
}
///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Logica tarjetas de credito (Tucu)
///////////////////////////////////////////////////////////

// Inicio del programa

// 1. It's a ghost

// 2. Recibir una tarjeta en particular
let card = "Mastercard";

// Fix: Comprobar que el usuario ingresó una tarjeta

if (card != undefined || card != null) {
  // 3. Comprobar:
  if (card == "Visa") {
    //   3.1: Si la tarjeta es Visa:
    //     Imprimir en consola los textos:
    //       "9 cuotas sin interés"
    //       "6 cuotas sin interés"
    //       "3 cuotas sin interés"
    //       "1 cuota sin interés"
    console.log("9 cuotas sin interés");
    console.log("6 cuotas sin interés");
    console.log("3 cuotas sin interés");
    console.log("1 cuota sin interés");

  } else if (card == "Mastercard") {
    //   3.2: Si la tarjeta es Mastercard:
    //     Imprimir en consola los textos:
    //       "6 cuotas sin interés"
    //       "3 cuotas sin interés"
    //       "1 cuota sin interés"
    console.log("6 cuotas sin interés");
    console.log("3 cuotas sin interés");
    console.log("1 cuota sin interés");
    
  } else if (card == "Amex") {
    //   3.3: Si la tarjeta es Amex:
    //     Imprimir en consola los textos:
    //       "3 cuotas sin interés"
    //       "1 cuota sin interés"
    console.log("3 cuotas sin interés");
    console.log("1 cuota sin interés");

  } else {
    //   3.4: Si la tarjeta es cualquiera:
    //     Imprimir en consola el texto:
    //       "1 cuota sin interés"
    console.log("1 cuota sin interés");
  }
} else {
  alert("Che, pasame una tarjeta, no seas mala onda, porfa");
}

// Fin del programa
