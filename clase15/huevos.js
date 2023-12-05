// Nos solicitan que desarrollemos un programa para la contabilización de huevos de una empresa,necesitamos saber la cantidad de docenas y unidades que se venden mensualmente.
// Por consola debemos mostrar un mensaje parecido a este: "Este mes se vendieron 10 docenas y 3 unidades"

// Pistas: debe existir la variable que indique la cantidad vendida,el contador de docenas,y debe utilizarse un WHILE.


let cantidadVendida = 65;
let contadorD = 0;

while (cantidadVendida >= 12) {
  cantidadVendida -= 12;
  contadorD += 1;
  //  if(cantidadVendida < 12) {
  //    break;
  //  }
}

console.log(`Este mes se vendieron ${contadorD} docenas y ${cantidadVendida} unidades`)