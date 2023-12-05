// 2 - Crear una calculadora que reciba dos números por parámetros y el callback que se encargara de la operación, no te olvides de expresar las funciones de cada operación (sumar,restar, multiplicar, dividir) como arrow function.

const calculadora = (num1, num2, cbOperacion) => {
  const resultado = cbOperacion(num1, num2);
  return resultado;
};

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;


const resultadoFinal = calculadora(10, 20, dividir)
console.log(resultadoFinal)