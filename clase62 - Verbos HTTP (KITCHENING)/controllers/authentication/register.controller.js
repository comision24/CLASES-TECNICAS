const createLog = require("../../utils/createLog");

module.exports = (req, res) => {
  res.render("register")

  const time = new Date().toTimeString()
  createLog("El usuario accedio al REGISTRO a las " + time)
};