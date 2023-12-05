// ejemplo 1
const num1 = 20;
const num2 = 100;

if (num1 > num2) {
  // false
  //console.log("El numero mayor es",num1)
} else {
  //console.log("El numero mayor es",num2)
}

// ejemplo 2
const esJueves = false;
let tipoClase; // valor undefined(default)

if (esJueves === true) {
  tipoClase = "Habilidades Blandas";
} else {
  tipoClase = "Técnica";
}

console.log(tipoClase);
