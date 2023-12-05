var anios = 31;
var _id = "1iu231o";

// var 2doNombre; // forma incorrecta
var años; // forma incorrecta

var nombrePersona = "Emanuel";
let hoyEsLunes = true;


// la palabra reservada VAR nos permite redeclarar el mismo nombre de variable
var nombreAlumno = "Juan Samek";
//let nombreAlumno2 = "Juliana Gonzalez";


var nombreAlumno = "Pedro Samek";
//let nombreAlumno2 = "Julieta Gonzalez";

// SOLUCIÓN 
var nombreAlumno = "Juan Samek";
let nombreAlumno2 = "Juliana Gonzalez";

var nombreAlumno = "Pedro Samek";
nombreAlumno2 = "Julieta Gonzalez";


// scope global y local con LET
let anio = 31;
if(true) {
  let anio = 36;
}
// console.log("anio",anio);

if(true) {
  var numeroPar = 22;
}

// console.log("numero par:",numeroPar);

// CONSTANTES  (const)
// var
var fechaNac = '1992-05-22';
var fechaNac = '1993-07-22';

let nacionalidad = 'Argentino';
nacionalidad = 'Paraguayo';

const dni = 352343233;
// dni = 238938;  // esto genera error

console.log(dni)


let sueldoActual = 200000;
let huboAumento = true

if (huboAumento) {
  sueldoActual = 200000 + 50000;
}

console.log(sueldoActual)

// Win + ➡️