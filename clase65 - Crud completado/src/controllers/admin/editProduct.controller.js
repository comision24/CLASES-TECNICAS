const products = require("../../database/products.json");
const { saveData } = require("../../database");

module.exports = (req, res) => {
  const { id } = req.params;
  const { title, price, description, chef, section, available } = req.body;

  // const productFind = products.find(p => p.id === +id)

  /* const productEdit = {
    id: +id,
    title: title ? title.trim() : productFind.title,
    price: price ? +price : productFind.price,
    description: description ? description.trim() : productFind.description,
    chef: chef ? chef.trim() : productFind.chef,
    sale: section === "sale",
    newest: section === "newest",
    free: section === "free",
    available: available ? available : productFind.available
  } */

  const productsMap = products.map((p) => {
    if (p.id === +id) {
      const productEdit = {
        ...p,
        title: title.trim(),
        price: +price,
        description: description.trim(),
        chef: chef.trim(),
        sale: section === "sale",
        newest: section === "newest",
        free: section === "free",
        available: !!available,
      };

      return productEdit;
    }

    return p;
  });

  saveData(productsMap);
  res.redirect("/admin/productos");
};
