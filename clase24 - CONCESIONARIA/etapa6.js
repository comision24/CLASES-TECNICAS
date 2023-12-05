const autosImportados = require('./autos.js')
let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(pnt) {
      const auto = this.autos.find(({patente}) => patente === pnt)
      return auto ? auto : null
   },
   venderAuto: function(pnt) {
      const auto = this.buscarAuto(pnt)
      if(!auto) {
         return "El auto no existe"
      }
      if(auto.vendido) {
         return "El auto ya esta vendido"
      }
      auto.vendido = true
   },
   autosParaLaVenta: function() {
      return this.autos.filter(({vendido}) => !vendido)
   },
   autosNuevos: function() {
      return this.autosParaLaVenta().filter(({km}) => km < 100)
   }
}