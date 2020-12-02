var express = require("express");
var router = express.Router();
var movies = require("../data/movies.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  const person = {
    name: "Guido",
    surname: "Papa",
    age: 33,
    leer: "recordar instalar JSON PARSER en Chrome",
    leer2:
      "tuvimos que eliminar o renombrar el archivo INDEX.HTML porque por cuestiones de CACHE no mostraba el objeto JSON que creamos en pantalla, si no el contenido de ese INDEX.HTML"
  };

  return res.json(person);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// EJERCICIO:
// queremos crear 2 rutas:
// localhost:3001/series
// localhost:3001/movies
// En donde en /series queremos devolver solo info tipo serie
// y en /movie solo devolver tipo movie
//// IMPORTANTE: la info de ambos tipos TIENE que
//// salir del mismo ARRAY

// router.get("/movies", (req, res) => {
//   const getMovies = movies.filter(function (item) {
//     return item.type === "Movie";
//   });

//   return res.json(getMovies);
// });

// module.exports = router;

// router.get("/series", (req, res) => {
//   const getSeries = movies.filter(function (item) {
//     return item.type === "Serie";
//   });

//   return res.json(getSeries);
// });

// module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// SIN IMPORTAR EL JSON

// router.get("/movies", (req, res) => {
//   const movies = [
//     {
//       id: 1,
//       name: "Pelicula 1"
//     },
//     {
//       id: 2,
//       name: "Pelicula 2"
//     }
//   ];

//   return res.json(movies);
// });

// module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// IMPORTANDO EL JSON (ver tamb el "require" de arriba de todo)

// router.get("/movies", (req, res) => {
//   return res.json(movies);
// });

// module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// ANTES DE EDITARLO:

// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });

// module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// RUTA DINAMICA (/PRODUCTOS/:ID):

router.get("/movies", (req, res) => {
  const getMovies = movies.filter(function (item) {
    return item.type === "Movie";
  });

  return res.json(getMovies);
});

module.exports = router;

router.get("/series", (req, res) => {
  const getSeries = movies.filter(function (item) {
    return item.type === "Serie";
  });

  return res.json(getSeries);
});

// aca ruta dinamica
router.get("/movies/:id", (req, res) => {
  const id = req.params.id;

  const getMovie = movies.filter((movie) => {
    return movie.id == id;
  });

  //// if en modo ternario:
  // return first ? res.json(first) : res.sendStatus(404);

  if (getMovie.length > 0) {
    const [first] = getMovie;
    //// antes de poner la linea de arriba [first] usabamos:
    // return res.json(getMovie);

    return res.json(first);
  } else {
    return res.sendStatus(404);
  }
});

//// POSTMAN
router.post("/contact", (req, res) => {
  const body = req.body;
  // console.log(body);
  const { name, email, message } = body;

  if (name && email && message) {
    return res.sendStatus(201);
  } else {
    return res.sendStatus(400);
  }
});

module.exports = router;
