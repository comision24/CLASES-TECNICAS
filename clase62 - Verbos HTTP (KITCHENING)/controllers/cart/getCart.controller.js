const createLog = require("../../utils/createLog");
module.exports = (req, res) => {
  res.render("cart")

  const time = new Date().toTimeString()
  createLog("El usuario accedio al CARRITO DE COMPRAS a las " + time)
}