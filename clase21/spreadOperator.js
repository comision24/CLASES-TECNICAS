const parte = ["que", "tu", "pasado"];
const frase = ["No", "dejes", ...parte, "ocupe", "todo", "tu", "presente."];

// console.log(frase);

const personas = ["Nathalia", "Franco", "Juan"];

//////////////
const persona = { nombre: "Emanuel" };

const otrosDatosP = {
  apellido: "Arroyo",
  edad: 31,
};

const todosLosDatos = {
  ...persona,
  ...otrosDatosP,
};
/* 
  {
    nombre: "Emanuel",
    apellido:"Arroyo",
    edad:31
  }
*/

// console.log(todosLosDatos);

//////////////////  SPREAD OPERATOR Y DESTRUCTURING

const pers = {
  nombre: "Alejandro",
  apellido: "Salinas",
  edad: 48,
  estudiando: true,
};

const { edad, estudiando, ...nuevoObjP } = pers;
console.log(nuevoObjP);
/* 
  {
  nombre: "Alejandro",
  apellido: "Salinas"
  }
*/
