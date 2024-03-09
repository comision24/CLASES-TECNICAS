const { loadData } = require("../../data");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
  const { id } = req.params;
  const products = loadData();
  const productFind = products.find((p) => p.id === +id);
  res.render("products/detail", { product: productFind,toThousand });
};
