const edad = 8712;
let mensaje = '';
if(edad > 0 && edad <= 110) {
  if (edad >= 1 && edad <= 12) {
    mensaje = "Eres un niño";
  } else if (edad > 12 && edad <= 18) {
    mensaje = "Eres adolescente";
  } else if (edad >= 19 && edad <= 60) {
    mensaje = "Eres un adulto";
  } else {
    mensaje = "Eres un abuelo";
  }
  console.log(mensaje)
} else {
  console.log("Ingrese una edad valida");
}