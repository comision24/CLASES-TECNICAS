const productosVenta = [
  ["leche", "lacteos", 400],
  ["galletitas", "almacen", 300],
  ["fideos", "almacen", 200],
  ["arroz", "almacen", 700],
  ["manteca", "lacteos", 450],
  ["detergente", "limpieza", 350],
  ["shampoo", "limpieza", 650],
];

const listaCompra = ["LECHE", "FIDEOS", "MANTECA", "SHAMPOO"];// 1700

const obtenerMontoTotal = (productos, lista) => {
  let total = 0;
  for (let index = 0; index < productos.length; index++) {
    const producto = productos[index];
    const nombreProd = producto[0];
    const precioProd = producto[2];
    // leche -> toUpperCase -> LECHE
    if (lista.includes(nombreProd.toUpperCase())) {
      total += precioProd; // total = total + precioProd
    }
  }
  return total;
};

// const montoTotal = obtenerMontoTotal(productosVenta,listaCompra)
// console.log(montoTotal)

const ticket = (nombre, apellido, productosParaVender, listadoDeCompra, cbMontoTotal) => {
  const montoTotal = cbMontoTotal(productosParaVender, listadoDeCompra)
  let listadoProductos = ''
  for(let i = 0; i < listadoDeCompra.length;i++) {
    const producto = listadoDeCompra[i]
    listadoProductos += `${i + 1} - ${producto}\n`
  }

  const mensaje = `Estimado, ${nombre} ${apellido} en función de los productos seleccionados:\n\n${listadoProductos}\nEl monto total a pagar es: $ ${montoTotal}`

  return mensaje
};

const mensajeTicket = ticket("Emanuel","Arroyo",productosVenta,listaCompra,obtenerMontoTotal)

console.log(mensajeTicket)


