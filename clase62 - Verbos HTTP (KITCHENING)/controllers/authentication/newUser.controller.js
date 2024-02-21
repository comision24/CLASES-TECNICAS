module.exports = (req, res) => {
  /* res.send("USUARIO CREADO") */
  // console.log("PROCESO DE CREACIÓN DE USUARIO");

  // res.send(req.body)

  // siguiente nivel
  const { email, contrasenia, nombre, apellido } = req.body;

  const newUsuario = {
    user: email,
    password: contrasenia,
    name: nombre,
    surname: apellido,
  };

  res.send(newUsuario);
  // res.redirect("/")
};
