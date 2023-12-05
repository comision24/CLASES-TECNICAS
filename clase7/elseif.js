// ejemplo 2
const diaActual = "sdads";
let tipoClase; // valor undefined(default)

if (diaActual === "Jueves") {
  tipoClase = "Habilidades Blandas"
} else if (diaActual === "Lunes") {
  tipoClase = "Técnica"
} else if (diaActual === "Martes") {
  tipoClase = "Técnica"
} else if (diaActual === "Miercoles") {
  tipoClase = "Técnica"
} else if (diaActual === "Viernes") {
  tipoClase = "Técnica"
} else if (diaActual === "Sabado") {
  tipoClase = "No hay clases"
} else if(diaActual === "Domingo") {
  tipoClase = "No hay clases"
} else {
  tipoClase = "El día es invalido"
}

console.log(tipoClase)


