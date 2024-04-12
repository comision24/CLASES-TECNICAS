// const { loadData } = require("../../database");
const db = require("../../db/models")
module.exports = (req, res) => {
  // const products = loadData()

  db.Product.findAll()
  .then((products)=> {
    res.render("admin/listProducts", { 
      products
     }, (err, content) => {
  
      err && res.send(err.message)
      res.render("partials/dashboard", {
        contentView: content
       })
    })
  })
};