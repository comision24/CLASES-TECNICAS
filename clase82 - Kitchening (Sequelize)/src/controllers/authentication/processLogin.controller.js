const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  const { email, password, remember} = req.body;
  const users = loadData("users");

  const userFind = users.find((u) => u.email === email);

  if (!userFind) res.send("El usuario no existe");

  const isPasswordValid = bcrypt.compareSync(password, userFind.password);

  if (!isPasswordValid) res.send("El password es incorrecto");

  req.session.userLogin = {
    name: userFind.name,
    surname: userFind.surname,
    avatar: userFind.avatar,
    role: userFind.role,
  };

  if(remember) res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 * 30})
  
  res.redirect("/")
};
