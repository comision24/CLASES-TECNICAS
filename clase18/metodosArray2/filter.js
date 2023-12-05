const arrNum = [1, 43, 65, 77, 89, 10, 22, 732, 19];

const numPares = arrNum.filter((num) => {
  return num % 2 === 0 // si es numero par  0 --> false
})

/* 2 % 2 --> 0  */ 

// console.log(numPares)  // [10, 22, 732]



const arrComidas = ["milanesa","salchichas","pastel de papa","guiso"]

const comidasFavorita = arrComidas.filter((comida) => 
  comida === "milanesa" || comida === "guiso"
)

console.log(comidasFavorita)
// console.log(arrComidas)