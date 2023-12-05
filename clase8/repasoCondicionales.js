// Ejemplo - LIMITE EDAD
// const edad = 16;
if (edad > 0 && edad <= 110) {
        if (edad >= 1 && edad <= 12) {
          console.log("Eres un niño");
        } else if (edad > 12 && edad <= 18) {
          console.log("Eres adolescente");
        } else if (edad >= 19 && edad <= 60) {
          console.log("Eres un adulto");
        } else {
          console.log("Eres un abuelo");
        }
} else {
  console.log("Ingrese una edad valida");
}

// IF TERNARIO SIMPLE
// condición ? parte verdadera : parte falsa

const edad = 8712;
const edadValida = edad > 0 && edad <= 110 ? true : false;
if(edadValida) {
  const mensaje = edad >= 1 && edad <= 12 ?
                  "Eres un niño" :
                  edad > 12 && edad <= 18 ?
                  "Eres adolescente" :
                  edad >= 19 && edad <= 60 ?
                  "Eres un adulto" :
                  "Eres un abuelo";
  console.log(mensaje)
} else {
  console.log("Ingrese una edad valida");
}


// IF TERNARIO COMPLETO
// condición ?  
// parteVerdadera : 
// condición2 ?
// parteVerdadera2 :
// condición3 ?
// parteVerdadera3 :
// parteFalsa


