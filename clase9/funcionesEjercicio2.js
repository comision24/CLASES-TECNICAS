/* 
2 - Realizar una función llamada "calculadora" que reciba 2 números por parámetros y el nombre de la operación (sumar,restar,multiplicar,dividir). La función debe devolver el resultado de la operación. Mostrar el resultado por consola pero colocando el valor devuelto en una variable llamada "resultadoOperacion". 
*/

const calculadora = function(num1,num2,operacion = "sumar") {

  if(typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR"
  }

  switch (operacion.toLowerCase()) { // sumar 
    case "sumar":
      return num1 + num2;
    case "restar":
      return num1 - num2;
    case "multiplicar":
      return num1 * num2;
    case "dividir":
      return num1 / num2;
    default:
      return "Operación invalida";
  }
}

calculadora("10",10,"restar")