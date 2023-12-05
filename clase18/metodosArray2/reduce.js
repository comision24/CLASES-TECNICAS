const arrNum = [1, 43, 65, 77, 89, 10, 22, 732, 19];

// let acum = 0;
const totalAcumulado = arrNum.reduce((acum,num) => { 
  return acum + num
})

// console.log(totalAcumulado)


const arrComidas = ["milanesa","salchichas","pastel de papa","guiso"]

// let comidasConcat = ""
const comidas = arrComidas.reduce((comidasConcat,comida) => {  
  return comidasConcat + comida + ", "
},"")

console.log(comidas)

