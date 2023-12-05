const fraseDelDia = "  Hoy es grren dia para ruleta .  ";
// LENGTH
const longitudFrase = fraseDelDia.length  // 35 caracteres
// console.log(longitudFrase);

// INDEX OF
const indiceEncontrado = fraseDelDia.indexOf('para')
// console.log(indiceEncontrado) // indice 19


// SLICE
const palabraCortada = fraseDelDia.slice(24,30) // palabra "ruleta"
// console.log(palabraCortada)

// TRIM
// console.log(fraseDelDia)
const fraseSinEspacios = fraseDelDia.trim()
// console.log(fraseSinEspacios)

// console.log(fraseDelDia.length)
// console.log(fraseSinEspacios.length)


// SPLIT
const arrayPalabras = fraseSinEspacios.split(' ')
// console.log(arrayPalabras)

// REPLACE 
const fraseReparada1 = fraseSinEspacios.replace('grren','gran')
// console.log(fraseReparada1) // Hoy es gran dia para ruleta .
const fraseReparada2 = fraseReparada1.replace("dia","día")
// console.log(fraseReparada2) // Hoy es gran día para ruleta .


console.log("Frase inicial:", fraseDelDia)
console.log("Frase procesada:", fraseReparada2)

