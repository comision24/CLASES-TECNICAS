const products = require("../../database/products.json")
module.exports = (req, res) => {
  res.render("admin/listProducts", { 
    products
   }, (err, content) => {

    err && res.send(err.message)
    res.render("partials/dashboard", {
      contentView: content
     })
  })
};