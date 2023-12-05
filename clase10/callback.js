const saludar = (nombre, apellido, callback) => {  // callback -> nombreCompre
  const nombreCompleto = callback(nombre,apellido)
  return "Hola como estas mi nombre es " + nombreCompleto; 
}

const nombreCompleto = (nombre,apellido) => {
  return nombre + " " + apellido;
}

const saludo = saludar("Emanuel","Arroyo", nombreCompleto)
// console.log(saludo)


//////////////////////////

const contarNumeros = (num1,text,callback) => {
  console.log(1)
  console.log(2)

  callback()

  console.log(4)

  callback()

  console.log(5)
}

const mostrarNumTres = () => console.log("Hola")

contarNumeros(mostrarNumTres)

/* console.log(typeof mostrarNumTres) */



