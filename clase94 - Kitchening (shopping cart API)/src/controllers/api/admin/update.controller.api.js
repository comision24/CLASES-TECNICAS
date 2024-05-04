const db = require("../../../db/models");

module.exports = (req, res) => {
  const { id } = req.params;
  const {
    title,
    price,
    description,
    chefId,
    section,
    available,
    rememberImagesSecondary,
  } = req.body;

  db.Product.update(
    {
      title: title?.trim(),
      price: +price,
      description: description?.trim(),
      chefId: +chefId,
      imagePrincipal:
        req.files.imagePrincipal?.length &&
        req.files.imagePrincipal[0].filename,
      sale: section === "sale",
      newest: section === "newest",
      free: section === "free",
      available: !!available,
    },
    {
      where: {
        id,
      },
    }
  ).then(() => {
    db.ImageSecondary.findAll({
      where: {
        productId: id,
      },
    }).then((images) => {
      let newImages = [];

      if (req.files.imagesSecondary?.length) {
        newImages = req.files.imagesSecondary?.map((img) => {
          return {
            file: img.filename,
            productId: id,
          };
        });
      }

      if (rememberImagesSecondary !== "on") {
        db.ImageSecondary.destroy({
          where: {
            productId: id,
          },
        });
      }
      db.ImageSecondary.bulkCreate(newImages).then(() => {
        res.status(200).json({
          ok: true,
          msg: "Producto actualizado con éxito",
        });
      });

      /*  if (rememberImagesSecondary === "on" && newImages.length) {
        db.ImageSecondary.bulkCreate(newImages);
      } else {
        db.ImageSecondary.destroy({
          where: {
            productId: id,
          },
        }).then(() => {
          db.ImageSecondary.bulkCreate(newImages);
        });
      } */
    });
  });
};
