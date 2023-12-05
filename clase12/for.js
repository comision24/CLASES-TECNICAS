// Mostrar vueltas     

for (let vuelta = 1; vuelta <= 4; vuelta++){  // vuelta 5  ,  5 <= 4 --> false , 4 + 1 --> 5
  // console.log("Dando la vuelta número", vuelta, contador)
}
// Dando la vuelta número 1
// Dando la vuelta número 2
// Dando la vuelta número 3
// Dando la vuelta número 4




// listado de letras
const frase = "Que lindo día para ver CICLOS";  // 29

for (let indice = 0;indice <= frase.length - 1; indice++) {
  //console.log(frase[indice])      
}

//  frase[0] --> Q
//  frase[1] --> u
//  frase[2] --> e



// usando IF TRADICIONAL
for (let indice = 0;indice <= frase.length - 1; indice++) {
  const elemento = frase[indice]
  if(elemento !== " ") {
    //console.log(elemento)      
  }
}


// Listando números impares
const arrNum = [12,34,556,6,88,32,10,123,324,566,343,1021,29389];  // longitud 12

for (let index = 0; index < arrNum.length;index++) { 
  const elemento = arrNum[index]
  if(elemento % 2 !== 0) {
    //console.log(elemento)
  }
}



// Obtener primer numero par

const obtenerNumsPares = (numeros = []) => {
  const arrPares = []
  for(let i = 0; i < numeros.length; i++) {
    const elemento = numeros[i]
    if(elemento % 2 === 0){
      arrPares.push(elemento)
    }
  }
  return arrPares
}

const numerosPar = obtenerNumsPares(arrNum)
console.log(numerosPar)