// Punto 1, 2 y 3
const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [pos0, pos1, pos2, pos3, pos4, ...restN] = arrNums;

const numsDispuestos = [pos0, pos2, pos4];

const restNums = [pos1, pos3, ...restN];

// console.log(restNums);

// Punto 4

const mascota = {
  nombre: "Block",
  tipo: "Perro",
  color: "Blanco Marmolado",
  raza: "Dogo",
};

const { nombre, tipo, color, raza } = mascota;

const mensaje = `Hola les presento a mi mascota, su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}`

console.log(mensaje)
/* 
  Hola les presento a mi mascota su nombre es: Bony, es un hermoso Perro, de color:
  Dorado y su raza es: Golden retriever.
*/
