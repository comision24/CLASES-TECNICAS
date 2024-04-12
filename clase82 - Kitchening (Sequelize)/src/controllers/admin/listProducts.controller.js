const { loadData } = require("../../database");

module.exports = (req, res) => {
  const products = loadData()
  res.render("admin/listProducts", { 
    products
   }, (err, content) => {

    err && res.send(err.message)
    res.render("partials/dashboard", {
      contentView: content
     })
  })
};