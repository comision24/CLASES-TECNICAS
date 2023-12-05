/*
Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.
*/

/* 
Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
  A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
  mensaje: “Debe especificar el perfil del usuario”. ✅

  B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
  consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
  uso del sistema”. ✅

  C. Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
  este mensaje: “Usted sólo tiene permisos de registrar, modificar y
  consultar datos”. ✅

  D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
  mensaje: “Usted sólo tiene permisos de consultar datos”. ✅

  E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
  este mensaje: “Debe especificar un perfil válido”.
*/
let perfil = "INVITADO";

if (!perfil) {
  console.log("Debe especificar el perfil del usuario");
} else {
  if (
    perfil === "administrador" ||
    perfil === "ADMINISTRADOR" ||
    perfil === "Administrador"
  ) {
    console.log("Usted tiene todos los privilegios de uso del sistema");
  } 

  else if (
    perfil === "asistente" ||
    perfil === "ASISTENTE" ||
    perfil === "Asistente"
  ) {
    console.log(
      "Usted sólo tiene permisos de registrar, modificar y consultar datos"
    );
  }

  else if (
    perfil === "invitado" ||
    perfil === "INVITADO" ||
    perfil === "Invitado"
  ) {
    console.log(
      "Usted sólo tiene permisos de consultar datos"
    );
  }  else {
    console.log("Debe especificar un perfil válido")
  }
}
