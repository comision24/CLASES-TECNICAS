const path = require("path");
// 1° traer todos los productos existentes en mi base de datos.
const fs = require("fs");
const { loadData } = require("../../database");
const { validationResult } = require("express-validator");


const db = require("../../db/models")

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { title, price, description, chefId, section, available } = req.body;

    db.Product.create({
      title: title.trim(),
      price: +price,
      description: description.trim(),
      imagePrincipal: req.files.imagePrincipal?.length
        ? req.files.imagePrincipal[0]?.filename
        : "not-image.png",
      chefId: +chefId,
      sale: section === "sale",
      newest: section === "newest",
      free: section === "free",
      available: available === "on",
    })
    .then((product) => {

      let newImages = [];
      if (req.files.imagesSecondary?.length) {
        newImages = req.files.imagesSecondary?.map((img) => {
          return {
            file: img.filename,
            productId: product.id
          }
        });
      }

      db.ImageSecondary.bulkCreate(newImages)
      .then(() => {
        return res.redirect("/admin/productos");
      })      
    })

  } else {
    const errorsMapped = errors.mapped();
    

    db.Chef.findAll()
    .then(chefs => {

      res.render(
        "admin/createProduct",
        { chefs, errors: errorsMapped, old: req.body },
        (err, contentView) => {
          err && res.send(err.message);
          res.render("partials/dashboard", { contentView });
        }
      );

    })
  }
};
