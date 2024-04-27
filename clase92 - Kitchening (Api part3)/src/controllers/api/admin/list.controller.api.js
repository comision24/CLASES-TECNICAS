const db = require("../../../db/models")

module.exports = (req,res) => {

  db.Product.findAll({
    include: ["imagesSecondary", "chef"],
    attributes:{
      exclude: ["createdAt","updatedAt"]
    }
  })
  .then(products => {
    res.status(200).json({
      ok: true,
      data: products
    })
  }).catch(err => {
    res.status(500).json({
      ok: false,
      msg: err.message
    })
  })

}