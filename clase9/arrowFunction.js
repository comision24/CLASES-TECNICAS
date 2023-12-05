const saludar = () => {
  return "Hola"
}
// console.log(saludar())

const mostrarMensaje1 = () => {
  return "Mostrando mensaje";
}

const mostrarMensaje2 = () => "Mostrando mensaje";

const mostrarMensaje3 = text => console.log(text);
// mostrarMensaje3("Este es un mensaje")

const mostrarMensaje4 = (text1,text2) => console.log(text1,text2)
mostrarMensaje4("mensaje numero 1","mensaje numero 2")