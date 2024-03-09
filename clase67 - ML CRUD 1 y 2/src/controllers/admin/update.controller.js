const { loadData, saveData } = require("../../data");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
  const { id } = req.params;
  const { name, price, discount, description, category } = req.body;

  const products = loadData();
  const productsMapped = products.map((p) => {
    if (p.id === +id) {
      const productUpdate = {
        ...p,
        name: name.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        category: category.trim()
      };
      return productUpdate
    }
    return p
  });

  saveData(productsMapped)

  res.redirect(`/productos/detalle/${id}`);
};
