const { loadData, saveData } = require("../../data");

module.exports = (req, res) => {
  const { name, price, discount, description, category } = req.body;
  const products = loadData();
  
  const newID = products[products.length - 1].id + 1;

  const newProduct = {
    id: newID,
    name: name.trim(),
    price: +price,
    discount: +discount,
    description: description.trim(),
    category: category?.trim(),
    image: "default-image.png",
  };

  products.push(newProduct)
  saveData(products)

  res.redirect(`/productos/detalle/${newID}`);
};
