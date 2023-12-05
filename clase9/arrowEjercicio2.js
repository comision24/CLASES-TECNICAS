const calculadora1 = function(num1,num2,operacion = "sumar") {

  if(typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
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

calculadora1("10",10,"restar")

// const variable = () => {}

const calculadora2 = (num1,num2,operacion = "sumar") => {
  if(typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
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