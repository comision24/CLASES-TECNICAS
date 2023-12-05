function Persona(nombre, apellido, edad, nacionalidad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.nacionalidad = nacionalidad;
  this.altura = altura;
  this.obtenerNombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
  this.mostrarEdad = function () {
    return this.edad;
  };
}


module.exports = Persona;

