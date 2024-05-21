const path = require("path")
const moviesAPIController = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"))
  },
  form: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/formulario.html"))
  },
  favorites: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/favoritas.html"))
  },
};

module.exports = moviesAPIController;
