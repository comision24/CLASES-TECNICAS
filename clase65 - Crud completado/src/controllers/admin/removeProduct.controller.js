const { saveData } = require("../../database");
const products = require("../../database/products.json")

module.exports = (req, res) => {
  const {id} = req.params

  const productLessOne = products.filter(p => p.id !== +id)

  saveData(productLessOne);

  res.redirect("/admin/productos")
};
