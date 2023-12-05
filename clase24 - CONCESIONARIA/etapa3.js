const autosImportados = require('./autos.js')
let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(pnt) {
      const auto = this.autos.find(({patente}) => patente === pnt)
      return auto ? auto : null
   }
}