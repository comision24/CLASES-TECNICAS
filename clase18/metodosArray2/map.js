const arrNum = [1, 43, 65, 77, 89, 10, 22, 732, 19];

const nuevoArr = arrNum.map(function (num) {
  // 1, 43 , 65
  return num + 1;
});

// [2, 44, 66, 78, 90, 11, 23, 733, 20]

// console.log(nuevoArr)

const nuevoArr2 = arrNum.map(function (num) {
  if (num % 2 === 0) {
    return num + 1;
  }
  return num;
});

// console.log(nuevoArr2);

// [1,43,65,77,89,11,23,733,19]


const arrComidas = ["milanesa","salchichas","pastel de papa","guiso"]

const nuevoArrComidas = arrComidas.map((comida) => comida.toUpperCase())

console.log(nuevoArrComidas)