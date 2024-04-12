const { saveData, loadData } = require("../../database");

module.exports = (req, res) => {
  const products = loadData()
  const {id} = req.params

  const productLessOne = products.filter(p => p.id !== +id)

  saveData(productLessOne);

  res.redirect("/admin/productos")
};
