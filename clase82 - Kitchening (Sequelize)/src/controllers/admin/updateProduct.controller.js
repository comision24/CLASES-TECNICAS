const { loadData } = require("../../database");

module.exports = (req, res) => {
  const chefs = loadData("chefs")
  const products = loadData(); // 1° traer datos de DB
  const { id } = req.params; // 2° obtener el id del producto que se quiere modificar
  const product = products.find((p) => p.id === +id); // 3° buscamos el producto

  res.render("admin/updateProduct", { product, chefs }, (err, contentView) => {
    err && res.send(err.message);
    res.render("partials/dashboard", { contentView });
  });
};
