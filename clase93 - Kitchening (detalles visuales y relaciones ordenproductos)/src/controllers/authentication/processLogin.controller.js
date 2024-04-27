const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");

const db = require("../../db/models");

module.exports = (req, res) => {
  const { email, password, remember } = req.body;
  // const users = loadData("users");

  // const userFind = users.find((u) => u.email === email);

  db.User.findOne({
    where: {
      email,
    },
    include:["role"]
  }).then((user) => {
  
    if (!user) res.send("El usuario no existe");

    const isPasswordValid = bcrypt.compareSync(password, user?.password);

    if (!isPasswordValid) res.send("El password es incorrecto");

    req.session.userLogin = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      avatar: user.avatar,
      role: user.role.name,
    };

    if (remember)
      res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 });

    res.redirect("/");
  });
};