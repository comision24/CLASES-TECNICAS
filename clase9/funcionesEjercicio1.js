// 1 - Crear una función que calcule el promedio de 3 notas.

const promedio = function(nota1,nota2,nota3) {
  if(typeof nota1 !== "number") {
    return "La nota numero 1 es invalida";
  } else if(typeof nota2 !== "number"){
    return "La nota numero 2 es invalida";
  } else if(typeof nota3 !== "number"){
    return "La nota numero 3 es invalida";
  }
  return (nota1 + nota2 + nota3) / 3;
}

console.log(promedio(2,2,4))

