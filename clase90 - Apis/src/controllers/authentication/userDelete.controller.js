const db = require("../../db/models")
module.exports = (req,res) => {
  const {idUser} = req.query
  db.User.destroy({
    where: {
      id: idUser ? idUser : req.session?.userLogin?.id
    }
  }).then(() => {
    res.redirect("/autenticacion/iniciar")
  })
}