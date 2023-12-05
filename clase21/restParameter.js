// const sumar = (n1,n2) => {
//   return n1 + n2
// }

const sumar = (...nums) => {
  const resultado = nums.reduce((acum,num) => {
    acum += num
    return acum
  })
  return resultado
}

console.log(sumar(1,2,3,45,7,8,9,0,25)) // [1,2,3,45,7,8,9,0,25]
