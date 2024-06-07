const db = require("../../../db/models");

module.exports = (req, res) => {
  const { id } = req.params;
  db.ImageSecondary.destroy({
    where:{
      productId: id
    }
  })
  .then(() => {
    
    db.Product.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        res.status(200).json({
          ok: true,
          msg: "Producto borrado con éxito",
        });
      })
      .catch((err) => {
        res.status(500).json({
          ok: false,
          msg: err.message,
        });
      });

  })

};
