const db = require("../../db/models");

module.exports = (req, res) => {
  db.Product.findAll({
    where: {
      available: true,
    },
  }).then((products) => {
    res.render("products/list", { products });
  });
};
