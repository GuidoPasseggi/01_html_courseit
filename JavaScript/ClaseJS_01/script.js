// strings - Cadenas de texto, se escriben entre comillas simples, dobles o apóstrofes
    // numbers - Números
    // booleans - Verdadero o falso (true or false)
    // arrays - Arreglos de datos
    // objects - Tipo de dato estructurado mediante un conjunto de claves y valores

    const colorDePelo = "Negro";
    const nombre = "Andrés";
    const color = "Azul"
    const edad = 22;
    const nombreDelGato = "Félix";
    const nacionalidad = "Tucumano";

    const textoCompleto = "Hola, mi nombre es " + nombre + ", tengo " + edad + " años. El doble de mi edad es " + (edad * 2) + ". Mi gato se llama "+ nombreDelGato +", soy "+ nacionalidad;

    console.log(textoCompleto);

    var tengoGato = false;
    var elDobleDeMiEdad = (edad * 2);

    // Concatenar el string "¿Tengo un gato?: " con el valor de la variable tengoGato
    var aclaracionDeSiTengoGatoONo = "¿Tengo un gato?: " + tengoGato;

    if (edad == 25) {
      console.log("Vos sí conocías netscape y te hiciste el boludo,", + edad);

      colorDePelo = "azul";
    } else {
      console.log("Bueno, te creo que no lo conocías");
    }

    console.log(aclaracionDeSiTengoGatoONo); 
    console.log("¿Cuál es mi edad?: " + edad);
    console.log("Color favorito: " + color);
    console.log("Mi edad por dos: " + elDobleDeMiEdad);

