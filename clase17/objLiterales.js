const persona = {
  nombre:"Emanuel",
  apellido:"Arroyo",
  edad:31,
  nacionalidad:"Argentino",
  altura:1.80,
  obtenerNombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  },
  mostrarEdad: () => {
    console.log(persona.edad)
  }
}

//console.log(persona.altura) // 1.80

// si creamos un método con la palabra reservado "function" nos permite hacer referencia al mismo objeto en el que nos encontramos.


//console.log(persona.obtenerNombreCompleto()) // Emanuel Arroyo
                                // undefined undefined

persona.mostrarEdad()