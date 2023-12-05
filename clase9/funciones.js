// FUNCIÓN DECLARADA
function nombreCompleto(nombre, apellido) {
  return nombre + ' ' + apellido;
}
//console.log(nombreCompleto("Emanuel","Arroyo"))


// FUNCIÓN EXPRESADA
const sumar = function(n1 = 20,n2 = 40){
  return n1 + n2;
}
const resultado = sumar(); // 60
const resultado2 = sumar(10,20) // 30
console.log(resultado)
console.log(resultado2)



