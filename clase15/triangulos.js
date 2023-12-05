//  Crear las funciones correspondientes para calcular el perímetro de un triangulo e indique a cual tipo de triangulo pertenece (Equilátero, Isósceles, Escaleno), realizar las validaciones correspondientes.

// Deben crearse las siguientes funciones y de acuerdo a lo que representa cada uno debe ser colocado en los lugares correctos dentro de una función padre llamada "triangulos".
// 1 - Función calcularPerimetro
// 2 - Funcion tipoTriangulo
// 3 - Función sonValoresValidos
// 4 - Resultado/formato final esperado por la función triangulos: "El triangulo es Isosceles y su perímetro es 10"

// Herramientas: if ternario, funciones y el método "isNaN()" (INVESTIGARLO!)

const calcularPerimetro = (lado1, lado2, lado3) => {
  const perimetro = lado1 + lado2 + lado3;
  return perimetro;
};

const tipoTriangulo = (l1, l2, l3) => {
  const tipo =
    l1 === l2 && l2 === l3 && l1 === l3
      ? "Equilátero"
      : l1 === l2 || l1 === l3 || l2 === l3
      ? "Isósceles"
      : "Escaleno";
  return tipo;  
};

// const perimetroTriangulo = calcularPerimetro(2,3,5) // 10
// console.log(perimetroTriangulo)

// const nombreTriangulo = tipoTriangulo(2,3,5) // Escaleno
// console.log(nombreTriangulo)

// const sonValoresValidos = (l1,l2,l3) => {
//     if(!isNaN(l1) && !isNaN(l2) && !isNaN(l3)){ // SI ES UN NUMERO? --> BOOLEANO
//       return true;
//     }
//     return false;
// };

const sonValoresValidos = (l1,l2,l3) => {
  if(isNaN(l1) || isNaN(l2) || isNaN(l3)) {
    return false; // No no son valores validos
  }
  return true
};

isNaN() // --> ¿SI NO ES UN NUMERO? --> BOOLEANO
!isNaN() // --> ¿SI ES UN NUMERO? --> BOOLEANO


const triangulo = (lado1,lado2,lado3) => {
  const esValido = sonValoresValidos(lado1,lado2,lado3)
  if(!esValido) {
    return "ERROR. Uno o mas lados no son números"
  }
  const tipo = tipoTriangulo(lado1,lado2,lado3)
  const perimetro = calcularPerimetro(lado1,lado2,lado3)
  return `El triangulo es ${tipo} y su perímetro es ${perimetro}`
}

// "El triangulo es Isosceles y su perímetro es 10"

console.log(triangulo(3,3,4))