const importar = require('./concesionaria.js')

const toyota = importar("Toyota")
const ford = importar('Ford')
const chevrolet = importar('Chevrolet')

// console.log(toyota)
// console.log(ford)
// console.log(chevrolet)

const unifiedAutos = [
  ...toyota,
  ...ford,
  ...chevrolet
]

// console.log(unifiedAutos)

const concesionaria = {
  autos: unifiedAutos,
  listAutos: function() {
    this.autos.forEach((auto, i) => {
      console.log(`${i + 1} - ${auto.marca} ${auto.modelo} --> precio: $${auto.precio} --> cantidad: ${auto.stock}`)
    })
  },
  autosByBrand: function(brand) {
    const autosFiltrados = this.autos.filter(({marca}) => {
      return marca.toLowerCase() == brand.toLowerCase()
    }) 
    return autosFiltrados
  }
}



