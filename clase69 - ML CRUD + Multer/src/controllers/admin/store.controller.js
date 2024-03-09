const { loadData, saveData } = require("../../data");

module.exports = (req, res) => {
  const { name, price, discount, description, category } = req.body;
  const image = req.file;

  const products = loadData();

  const newID = products[products.length - 1].id + 1;

  const newProduct = {
    id: newID,
    name: name.trim(),
    price: +price,
    discount: +discount,
    description: description.trim(),
    category: category?.trim(),
    image: image ? image.filename : "default-image.png",
    createdAt: req.createdAt,
  };

  products.push(newProduct);
  saveData(products);

  res.redirect(`/productos/detalle/${newID}`);
};
