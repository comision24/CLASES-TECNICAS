const db = require("../../db/models")

module.exports = (req, res) => {
  const {id} = req.params

  
  

  db.ImageSecondary.destroy({
    where:{
      productId: id
    }
  })
  .then(() => {
    
    db.Product.destroy({
      where:{
        id
      }
    })
    .then(() => {
      res.redirect("/admin/productos")
    })
  })

};
