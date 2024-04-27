const db = require("../../db/models");
module.exports = (req, res) => {
  const { id } = req.params;
  db.Product.findByPk(id, {
    include: ["imagesSecondary"],
  }).then((product) => {
    res.render("products/detail", { product });
  });
};
