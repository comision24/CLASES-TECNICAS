const fs = require('fs')

const leerJSON = () => {
  const pelisJSON = fs.readFileSync('./peliculas.json','utf-8')
  const pelisJS = JSON.parse(pelisJSON)
  return pelisJS
}



module.exports = {
  leerJSON
}