const { loadData, saveData } = require("../../data");

module.exports = (req,res) => {
  const {id} = req.params
  const products = loadData()

  const productsLessOne = products.filter(p => p.id !== +id)

  saveData(productsLessOne)

  res.redirect("/productos")
}