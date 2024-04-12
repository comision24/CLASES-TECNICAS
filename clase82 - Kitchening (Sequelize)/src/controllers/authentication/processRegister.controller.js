const { loadData, saveData } = require("../../database");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  const { name, surname, email, password } = req.body;
  const users = loadData("users");
  const newUser = {
    id: !users.length ? 1 : users[users.length - 1].id + 1,
    name: name?.trim(),
    surname: surname?.trim(),
    email: email?.trim(),
    password: bcrypt.hashSync(password?.trim(), 10),
    avatar: "",
    role: "REGULAR",
    direccion: {
      address: "",
      city: "",
      province: "",
      cp: "",
      num: "",
      country: "",
    },
  };

  users.push(newUser);

  saveData(users, "users");

  res.redirect("/");
};
