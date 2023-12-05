// ejemplo 2

/* 
if (diaActual === "Jueves") {
  tipoClase = "Habilidades Blandas";
} else if (diaActual === "Lunes") {
  tipoClase = "Técnica";
} else if (diaActual === "Martes") {
  tipoClase = "Técnica";
} else if (diaActual === "Miercoles") {
  tipoClase = "Técnica";
} else if (diaActual === "Viernes") {
  tipoClase = "Técnica";
} else if (diaActual === "Sabado") {
  tipoClase = "No hay clases";
} else if (diaActual === "Domingo") {
  tipoClase = "No hay clases";
} else {
  tipoClase = "El día es invalido";
} */

const diaActual = "Lunes";
let tipoClase; // valor undefined(default)
switch (diaActual.toLowerCase()) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "viernes":
    tipoClase = "CLASE Técnica";
    break;
  case "jueves":
    tipoClase = "Habilidades Blandas";
    break;
  case "sabado":
  case "domingo":
    tipoClase = "No hay clases";
    break;
  default:
    tipoClase = "El día es invalido";
}

console.log(tipoClase);