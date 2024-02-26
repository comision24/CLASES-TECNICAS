module.exports = (req, res) => {
  const chefs = require("../../database/chefs.json")

  res.render("admin/createProduct",{chefs},(err, contentView) => {
    err && res.send(err.message)
    res.render("partials/dashboard", { contentView })
  })
};