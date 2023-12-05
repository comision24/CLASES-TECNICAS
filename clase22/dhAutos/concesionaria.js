const importar = (marca) => {
    const fs = require('fs')
    let nombreArchivo = "";
    if(marca === "Toyota") {
      nombreArchivo = "marca1"
    }
    else if(marca === "Ford") {
      nombreArchivo = "marca2"
    }
    else if(marca === "Chevrolet"){
      nombreArchivo = "marca3"
    }
    const path = `./datos/${nombreArchivo}.json`
    const marcaJSON = fs.readFileSync(path,'utf-8')
    const marcaParse = JSON.parse(marcaJSON)
    return marcaParse
}

// console.log(importar("Chevrolet"))

module.exports = importar