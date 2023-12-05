// Crear una aplicación que nos permita gestionar las finanzas de nuestro hogar de este mes.
/* 
  luz
  gas
  viáticos
  alquileres
  salario familiar
  sueldo
  ventas
*/
// 1 - Crear un array multidimensional en el cual se coloque primero el string representando el concepto y luego un valor numérico que representa el dinero, ejemplo:  [[concepto1,20000],[concepto1,-5000]] ✅
// 2 - Recorrer el array de finanzas e identificar solamente los ingresos y sumarlos en una variable. ✅
// 3 - Listar los conceptos por consola que correspondan a egreso de dinero. ✅
// 4 - Indicar la cantidad de ingresos que hubo durante el mes. ✅

const finanzas = [
  ["ventas", 20000],
  ["luz", -5000],
  ["viáticos", -7000],
  ["sueldo", 250000],
  ["salario familiar", 60000],
  ["alquileres propios", 80000],
  ["gas", -10000],
];

let totalIngresos = 0;
let cantidadIngresos = 0;

for (let i = 0; i < finanzas.length; i++) {
  const elemento = finanzas[i]; // ["ventas", 20000]
  const concepto = elemento[0]; // "ventas"  --> concepto
  const importe = elemento[1]; // 20000  --> importe

  if (importe > 0) {
    // si es un ingreso
    totalIngresos += importe;
    cantidadIngresos++;
  } else {
    // si es egreso
    console.log(concepto);
  }
}

console.log("El total mensual de mis ingreso son:", totalIngresos); // 410000
console.log("Hay ", cantidadIngresos, "ingresos");  // 4
