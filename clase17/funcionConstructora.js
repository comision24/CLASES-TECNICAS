const persona = {
    nombre: "Emanuel",
    apellido: "Arroyo",
    edad: 31,
    nacionalidad: "Argentino",
    altura: 1.8,
    obtenerNombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    },
    mostrarEdad: () => {
      console.log(persona.edad);
    },
};

function Persona(nombre,apellido,edad,nacionalidad,altura,hobbies = [],colorFavorito = "azul",cbMensaje) {

  if(typeof apellido !== 'string') {
    console.log("El apellido es invalido!!")
    return
  }

  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.nacionalidad = nacionalidad;
  this.altura = altura;
  this.hobbies = hobbies
  this.colorFavorito = colorFavorito

  this.obtenerNombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
  }
  this.mostrarEdad = function() {
    return this.edad;
  },
  this.funcionPersonal = cbMensaje
}

const persona2 = new Persona("Nathalia","Gaitan",32,"Brasil",1.75,["cocinar","jugar Dota 2"])

const persona3 = new Persona("Fernando","Marquez",29,"Argentina",1.86)


// console.log(persona2.nacionalidad)
console.log(persona2['nacionalidad'])
// console.log(persona3)
// console.log(persona4.obtenerNombreCompleto())

const saludar = () => console.log("Hola como estas")

const persona4 =new Persona("Luka",22,"Argentina",1.77,[],"amarillo",saludar)

// persona4.funcionPersonal()