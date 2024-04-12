const { validationResult } = require("express-validator");
const { saveData, loadData } = require("../../database");

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { id } = req.params;
  const products = loadData();

  if (errors.isEmpty()) {
    const { title, price, description, chef, section, available } = req.body;

    let newImages = [];
    if (req.files.imagesSecondary?.length) {
      newImages = req.files.imagesSecondary?.map((img) => img.filename);
    }

    const productsMap = products.map((p) => {
      if (p.id === +id) {
        const productEdit = {
          ...p,
          title: title.trim(),
          price: +price,
          description: description.trim(),
          chef: chef.trim(),
          imagePrincipal: req.files.imagePrincipal?.length
            ? req.files.imagePrincipal[0]?.filename
            : p.imagePrincipal,
          imagesSecondary: newImages.length ? newImages : p.imagesSecondary,
          sale: section === "sale",
          newest: section === "newest",
          free: section === "free",
          available: !!available,
          image: req.file ? req.file.filename : p.image,
        };

        return productEdit;
      }

      return p;
    });

    saveData(productsMap);
    res.redirect("/admin/productos");
  } else {
    const chefs = loadData("chefs");
    const product = products.find((p) => p.id === +id);
    const errorsMapped = errors.mapped();
    res.render(
      "admin/updateProduct",
      { product, chefs, errors: errorsMapped, old: req.body },
      (err, contentView) => {
        err && res.send(err.message);
        res.render("partials/dashboard", { contentView });
      }
    );
  }
};
