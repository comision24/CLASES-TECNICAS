// Operador de asignación
const nombre = "Francisco";

////////////////////////////////

// Aritméticos
//console.log(2 + 2)  // Op suma

//console.log(10 - 5);  // Op resta

//console.log(20 * 2) // Op Multiplicación

//console.log(10 / 2) // Op División

////////////////////////////////

// Aritméticos Incremento y decremento

let num = 10;
//console.log(num++)

let num2 = 20;
//console.log(++num2)

console.log(num--)
console.log(--num2)


///////////////////////

// COMPARACIÓN SIMPLE

console.log(20 == "20") // true

console.log("true" == true) // false

console.log("4" !== "4") // false

// COMPARACIÓN ESTRICTA
console.log(true !== false) // true

console.log(20 !== "20") // true

console.log(10 !== 20) // true


// MAYOR QUE
console.log(10 > 10)  // false

// MAYOR E IGUAL QUE
console.log(20 >= 20) // true

// MENOR QUE
console.log(-10 < 0) // true

// MENOR E IGUAL QUE
console.log(-10 <= (10 * -1)) // true




///////////////////////////////////
// TYPEOF


console.log("texto",typeof "texto") // string

console.log(100,typeof 100); // number

console.log("[1,2,3,4,5]",typeof [1,2,3,4,5]) // object

console.log({},typeof {}) // object

console.log(typeof null) // object

undefined
NaN