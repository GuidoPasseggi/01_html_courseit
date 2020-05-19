// clean.md
// Dado el siguiente HTML
// Hacer que al clickear el boton "Borrar" los tres inputs dejen de tener un valor asignado

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Document Test</title>
//     <style>
//       body {
//         background-color: #505050;
//         color: antiquewhite;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="">
//       <input type="text" class="inputText" value="Hola mundo" />
//       <input type="text" class="inputText" value="CourseIt" />
//       <input type="text" class="inputText" value="Javascript" />
//       <button onclick="clean()">Borrar</button>
//     </div>
//     <script src="./Ejercicio_1.js"></script>
//   </body>

// </html>


const clean = () => {
  document.querySelectorAll(".inputText").forEach((input) => {
    input.value = null;
  })
}

