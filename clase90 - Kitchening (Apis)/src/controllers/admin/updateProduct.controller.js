
const db = require("../../db/models")
module.exports = (req, res) => {
  /*  db.Chef.findAll()
  .then((chefs) => {
    db.Product.findByPk()
    .then((product) => {
      res.render("admin/updateProduct", { product, chefs }, (err, contentView) => {
        err && res.send(err.message);
        res.render("partials/dashboard", { contentView });
      });
    })
  }) */
  
  const { id } = req.params;
  const chefPromise = db.Chef.findAll()
  const productPromise = db.Product.findByPk(id)

  Promise.all([chefPromise, productPromise])
  .then(([chefs, product]) => {

    res.render("admin/updateProduct", { product, chefs }, (err, contentView) => {
      err && res.send(err.message);
      res.render("partials/dashboard", { contentView });
    });
  })

};
