/* 
  ➡️ DESTRUCTURING ⬅️

  1 - Requerir el JSON de superheroes. ✅
  2 - Ingresar al primer héroe y extraer el valor del segundo poder con destructing de array. Mostrarlo por consola ✅
  3 - Ingresar al ultimo héroe, acceder a villano y extraer el nombre y al primer poder. Mostrarlo por consola 
  4 - Recorrer todo el array de heroes utilizando forEach y en el callback que recibe destructurar solamente nombre y su edad. Mostrarlo por consola
*/

// 1.
const superheroes = require("./superheroes.json");

// 2.
const [heroe1] = superheroes;
const { poderes } = heroe1;
const [, poder2] = poderes;

// o
const [
  {
    poderes: [, poderN2],
  },
] = superheroes;

// console.log(poder2);
// console.log(poderN2);

// 3.
// const ultimoHeroe = superheroes[superheroes.length -1];
const [ultimoHeroe] = superheroes.reverse();
const { villano } = ultimoHeroe;
const { nombre, poderes: poderesVillano } = villano;
const [primerPoder] = poderesVillano;
// console.log(nombre, primerPoder);

// 4.
superheroes.reverse().forEach(({ nombre, edad }) => {
  console.log(nombre, edad);
});
