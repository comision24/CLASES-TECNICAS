const datosPelis = require("./datosPelis.js");

const dhPeli = {
  peliculas: datosPelis.leerJSON(),
  buscarPeli: function (id) {
    const peliEnc = this.peliculas.filter((peli) => {
      return peli.id === id;
    });
    if (peliEnc.length === 0) {
      return null;
    }
    return peliEnc;
  },
  venderPeli: function (id) {
    const peliEnc = this.buscarPeli(id);
    if (peliEnc === null) {
      return "Película no encontrada";
    }
    peliEnc[0].vendida = true;
    return peliEnc[0];
  },
  PelisParaLaVenta: function() {
    const pelisParaVender = this.peliculas.filter((peli) => {
      return !peli.vendida;
    })
    return pelisParaVender
  },
  totalDeVentas: function() {
    const total = this.peliculas.reduce((acum,peli) => {
      if(peli.vendida) {
        acum += peli.precio;
      }
      return acum
    },0)
    return total
  }
};


// console.log(dhPeli.buscarPeli(2))
//  console.log(dhPeli.venderPeli(2));
// console.log(dhPeli.PelisParaLaVenta());
console.log(dhPeli.totalDeVentas());


