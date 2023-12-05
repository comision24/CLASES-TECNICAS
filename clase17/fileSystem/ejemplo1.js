const fs = require('fs')      // modulo nativo fileSystem


const rutaArchivo = './other.js'
const rutaArchivo2 = '../objLiterales.js'

// const archivo = fs.readFileSync(rutaArchivo3,'utf-8') // permite leer archivos

 //console.log(archivo)

//////////////////////////////////

const nuevoTexto = "Hello world"
// fs.writeFileSync(rutaArchivo3,nuevoTexto,"utf-8")  // permite la escribir nuevos datos perdiendo lo que había


/////////////////////////////////
const rutaArchivo3 = './texto2.txt'
const existeElArchivo = fs.existsSync(rutaArchivo3) // permite comprobar si existe un archivo (BOOLEANO)

////////////////////////////////
if(existeElArchivo) {
  fs.unlinkSync(rutaArchivo3)
  console.log("Archivo eliminado")
}else {
  console.log("El archivo no existe",rutaArchivo3)
}