const personas = [
  "Juan Samek",
  "Nicolás Gonzalez",
  "Javier Palacios",
  "Adriana Escubilla",
];

const [, per2, , cuartaPersona] = personas;
// destructuración de array --> no importa el nombre de las variables

// console.log(cuartaPersona);

//////////////////////////

const producto = {
  nombre: "TV Samsung 55'",
  precio: 400000,
  descripción: "muy buena tv",
  stock: 10,
};

const { nombre: nombreTV, stock } = producto;
console.log(nombreTV, stock);
