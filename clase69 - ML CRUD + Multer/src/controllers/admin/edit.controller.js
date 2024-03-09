const { loadData } = require("../../data");

module.exports = (req, res) => {
  const { id } = req.params;
  const products = loadData();

  const productFind = products.find((p) => p.id === +id);
  res.render("admin/editProduct", { product: productFind });
};
