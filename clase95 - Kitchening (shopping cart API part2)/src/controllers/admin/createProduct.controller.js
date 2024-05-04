// const chefs = require("../../database/chefs.json")
const db = require("../../db/models")

module.exports = (req, res) => {
  db.Chef.findAll()
  .then((chefs) => {
    res.render("admin/createProduct",{ chefs },(err, contentView) => {
      err && res.send(err.message)
      res.render("partials/dashboard", { contentView })
    })
  })
};