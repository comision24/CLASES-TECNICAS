const bcrypt = require("bcryptjs");

const db = require("../../db/models");

module.exports = (req, res) => {
  const { email, password, remember } = req.body;

  db.User.findOne({
    where: {
      email,
    },
    include:["role"]
  }).then((user) => {
  
    if (!user) return res.send("El usuario no existe");

    const isPasswordValid = bcrypt.compareSync(password, user?.password);

    if (!isPasswordValid) return res.send("El password es incorrecto");

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
  }).catch((err) => res.send(err.message));
};