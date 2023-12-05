// [30,45,25,34,18,23,...]
const ventasLacteos = "30 45 25 34 18 23 16 50 72 70".split(" ") 

const ventasAlmacen = "50 45 71 34 23 45 65 75 63 43 74 70".split(" ")
const ventasLimpieza = "30 11 87 25 74 16".split(" ")

// console.log(ventasLacteos)


const obtenerPromedioVentas = (vLacteos,vAlmacen,vLimpieza,categoria) => {

  if(categoria > 3 || categoria < 1) {
    const mensajeInformativo = `
    Los valores validos de la categorías a seleccionar son:
    1 = LACTEOS 
    2 = ALMACEN 
    3 = LIMPIEZA 
    `;
    return mensajeInformativo
  }

  const categorias = [null,vLacteos,vAlmacen,vLimpieza]
  const categoriaSeleccionada = categorias[categoria]
  let sumaValores = 0;
  for (let i = 0;i < categoriaSeleccionada.length;i++){
    // const valorVenta = Number.parseInt(categoriaSeleccionada[i])
    const valorVenta = +categoriaSeleccionada[i] // NaN
    sumaValores += valorVenta
  }

  const cantidadVentas = categoriaSeleccionada.length
  const promedio = sumaValores / cantidadVentas
  return promedio
}

const promedioVenta = obtenerPromedioVentas(ventasLacteos,ventasAlmacen,ventasLimpieza,3)
console.log(promedioVenta)
