// 1 - Crear un array de "alumnos"
const alumnos = ["Rodolfo", "Fulanito", "Milagros", "Esteban", "Franco"];

// 2 - Quitar el ultimo alumno y mételo en un nuevo array llamado "alumnosAusentes"
const alumnosAusentes = [];
const alumnoEliminadoPop = alumnos.pop();
alumnosAusentes.push(alumnoEliminadoPop);

// 3 - Agregar al final del array "alumnos" a "Pepito"
alumnos.push("Pepito");

// 4 - Quitar el primer alumno y colócalo al principio del array "alumnosAusentes"
const alumnoEliminadoShift = alumnos.shift();
alumnosAusentes.unshift(alumnoEliminadoShift);

// 5 - Junta los datos en un string y mostrar por consola el siguiente mensaje:  "Los alumnos "alumno1" y "alumno2" no vinieron a clases"
const alumnosAusString = alumnosAusentes.join(' y ')
const msg = `Los alumnos ${alumnosAusString} no vinieron a clases`
// console.log(msg)

// 6 - Buscar la ubicación de 'Esteban' y mostrar el siguiente mensaje por consola: "Esteban vino a clases y se encuentra sentado en la silla de la posición X"
const ubicacionAlumno = alumnos.indexOf("Esteban")
const msg2 = `Esteban vino a clases y se encuentra sentado en la silla de la posición ${ubicacionAlumno}`
console.log(msg2)

// 7 - Comprobar si se encuentra el alumno "Fulanito", en caso que se encuentra colocar por consola: "Fulanito nunca falto a clases" de lo contrario mostrar  "Fulanito es la primera vez que falta"
const existeAlumno = alumnos.includes("Fulanito") // booleano
if(existeAlumno) {
  console.log("Fulanito nunca falto a clases")
} else {
  console.log("Fulanito es la primera vez que falta")
}

// 8 - Por ultimo mostrar la cantidad de alumnos que vinieron a clases.
const cantidadEnClases = alumnos.length;
console.log(cantidadEnClases)
