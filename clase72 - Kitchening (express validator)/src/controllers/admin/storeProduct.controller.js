const path = require("path");
// 1° traer todos los productos existentes en mi base de datos.
const fs = require("fs");
const { loadData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    let products = loadData();
    const { title, price, description, chef, section, available } = req.body;

    const newId = products[products.length - 1].id + 1;

    let newImages = [];
    if (req.files.imagesSecondary?.length) {
      newImages = req.files.imagesSecondary?.map((img) => img.filename);
    }

    const newProduct = {
      id: newId,
      title: title.trim(),
      price: +price,
      description: description.trim(),
      imagePrincipal: req.files.imagePrincipal?.length
        ? req.files.imagePrincipal[0]?.filename
        : "not-image.png",
      imagesSecondary: newImages.length ? newImages : ["not-image.png"],
      chef: chef.trim(),
      sale: section === "sale",
      newest: section === "newest",
      free: section === "free",
      available: available === "on",
    };

    products = [...products, newProduct];

    products = JSON.stringify(products, null, 3);
    const pathProducts = path.join(__dirname, "../../database/products.json");
    fs.writeFileSync(pathProducts, products, "utf-8");

    return res.redirect("/admin/productos");
  } else {
    const errorsMapped = errors.mapped();
    const chefs = require("../../database/chefs.json");

    res.render(
      "admin/createProduct",
      { chefs, errors: errorsMapped, old: req.body },
      (err, contentView) => {
        err && res.send(err.message);
        res.render("partials/dashboard", { contentView });
      }
    );
  }
};
