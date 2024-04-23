const { loadData, saveData } = require("../../database");
const bcrypt = require("bcryptjs");
const db = require("../../db/models");

module.exports = (req, res) => {
  const { name, surname, email, password } = req.body;

  db.User.create({
    name: name ? name.trim() : null,
    surname: surname ? surname.trim() : null,
    email: email ? email.trim() : null,
    password: password ? bcrypt.hashSync(password.trim()) : null,
  }).then((user) => {

    db.Address.create({
      userId: user.id,
      active: true
    })
    .then(() => {
      
      res.redirect("/");

    })

  });

};
