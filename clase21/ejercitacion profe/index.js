/* 
  ➡️ DESTRUCTURING ⬅️

  1 - Requerir el JSON de películas ✅
  2 - Ingresar a la primer película y extraer el valor del segundo actor con destructing de array.✅
  3 - Ingresar a la ultima película, acceder a los detalles extra y mostrar su sinopsis.
  4 - Recorrer todo el array de películas utilizando forEach y en el callback que recibe destructurar solamente titulo y su precio. Mostrar los datos por consola

*/


// 1 -
const peliculas = require("./peliculas.json");


// 2 -

// const primerPelicula = peliculas[0]

//primerPelicula --> objeto (se puede destructurar)
const [primerPelicula] = peliculas;

// actores --> array (se puede destructurar)
const { actores } = primerPelicula;

const [, segundoActor] = actores;
// console.log(segundoActor)

// const [,{actores: [, segundoActor]}] = peliculas;
// console.log(segundoActor);

// 3 -
const ultimaPelicula = peliculas[peliculas.length - 1];
// const [,,,,,,,,,ultimaPelicula] = peliculas;

const { detallesExtra } = ultimaPelicula;
const { sinopsis } = detallesExtra
// console.log(sinopsis)

// 4 -
peliculas.forEach(({titulo,precio}) => {
  console.log(titulo,precio)
})