const { validationResult } = require("express-validator");
const db = require("../../db/models");

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { id } = req.params;

  if (errors.isEmpty()) {
    const {
      title,
      price,
      description,
      chef,
      section,
      available,
      rememberImagesSecondary,
    } = req.body;

    db.ImageSecondary.findAll({
      productId: id,
    }).then((images) => {
      let newImages = [];

      if (req.files.imagesSecondary?.length) {
        newImages = req.files.imagesSecondary?.map((img) => {
          return {
            file: img.filename,
            productId: +id,
          };
        });
      }

      if (rememberImagesSecondary === "on") {
        const imagesFormat = images.map((img) => {
          return {
            file: img.file,
            productId: img.productId
          }
        })
        newImages = [...newImages, ...imagesFormat];
      }

      db.Product.update(
        {
          title: title.trim(),
          price: +price,
          description: description.trim(),
          chefId: +chef,
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
      )
        .then(() => {
          // primero resuelvo la actualización del producto

          db.ImageSecondary.destroy({ // borramos las imágenes viejas!
            where: {
              productId: +id,
            },
          }).then(() => {
            db.ImageSecondary.bulkCreate(newImages).then(() => {  // creamos las nuevas
              res.redirect("/admin/productos");
            });
          });
        })
        .catch((err) => res.send(err.message));
    });
  } else {
    const errorsMapped = errors.mapped();
    const productPromise = db.Product.findByPk(id);
    const chefsPromise = db.Chef.findAll();

    Promise.all([productPromise, chefsPromise]).then(([product, chefs]) => {
      res.render(
        "admin/updateProduct",
        { product, chefs, errors: errorsMapped, old: req.body },
        (err, contentView) => {
          err && res.send(err.message);
          res.render("partials/dashboard", { contentView });
        }
      );
    });
  }
};
