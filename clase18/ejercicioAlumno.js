/* 
  1 - Agregar un descuento del 20% al producto con ID 2, utilizando el método de array MAP. 
  2 - Obtener todos los productos que tengan descuento, utilizando el método filter.
  3 - Listar en consola los títulos de los productos en oferta, utilizando el forEach.
  4 - Obtener todos los productos disponibles para la venta.
  5 - Calcular el capital sobre los productos que tengamos disponibles para la venta, utilizando el reducer.
*/

// 1 -
const fs = require('fs')
const rutaArchivo = './productos.json'
const productos = JSON.parse(fs.readFileSync(rutaArchivo,'utf-8'))

const productosModificados = productos.map((producto) => {
  if(producto.id === 2){
    producto.descuento = 20
    return producto
  }
  return producto
})

// fs.writeFileSync(rutaArchivo,JSON.stringify(productosModificados,null,3),'utf-8')

const escribirJSON = (data) => {
  const rutaArchivo = './productos.json'
  fs.writeFileSync(rutaArchivo,JSON.stringify(data,null,3),'utf-8')
}
escribirJSON(productosModificados)

const productosModificados2 = productos.map((producto) => {
  if(producto.id === 3){
    producto.modelo = "nose"
    return producto
  }
  return producto
})

escribirJSON(productosModificados2)