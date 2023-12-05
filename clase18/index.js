const fs = require("fs");

const rutaArchivo = "./productos.json"
const productosJSON = fs.readFileSync(rutaArchivo, "utf-8");

const productosJS = JSON.parse(productosJSON);


const nuevoProducto = {
  id: 6,
  titulo: "Smart TV Samsung QLED 80",
  marca: "Samsung",
  modelo: "QLED Q80G",
  precio: 3000000,
  descuento: 10,
  descripcion:
    "Televisor Samsung QLED de 80 pulgadas con resolución 4K. Tecnología Quantum Dot para colores más vibrantes.",
  categoria: "televisiones",
  stock: 10,
  vendido: false,
};

productosJS.push(nuevoProducto)

// console.log(productosJS)

const productosStringify = JSON.stringify(productosJS,null,3)

fs.writeFileSync(rutaArchivo,productosStringify,'utf-8')