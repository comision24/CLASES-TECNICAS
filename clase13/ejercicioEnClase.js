const peliculas = [
  {
    nombre: "El Padrino",
    anio: 1975,
    actores: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    nombre: "Pulp Fiction",
    anio: 1994,
    actores: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], // // peliculas[1]
  },
  {
    nombre: "El Señor de los Anillos: La Comunidad del Anillo",
    anio: 2001,
    actores: ["Elijah Wood", "Ian McKellen"],
  }
];

// peliculas[1].nombre --> Pulp Fiction

// TRABAJANDO CON PELÍCULAS
// 1 - Recorrer y listar los "nombres" de las películas. 
// 2 - Mostrar los actores que trabajaron en la película "El Señor de los Anillos".
// 3 - Colocar en un nuevo array las películas del año que no sea par.
// 4 - Listar los nombres de las películas donde la misma empiece con una vocal.
// 5 - Agregar el actor "Viggo Mortensen" a la ultima película.

const peliEncontrar = "El Señor de los Anillos"
for (let index = 0; index < peliculas.length; index++) {
  const pelicula = peliculas[index];
  if(pelicula.nombre.indexOf(peliEncontrar) !== -1) {
      for(let i = 0;i < pelicula.actores.length;i++){
        const actor = pelicula.actores[i]
        console.log(actor)
      }
  }
}

// Elijah Wood
// Ian McKellen
