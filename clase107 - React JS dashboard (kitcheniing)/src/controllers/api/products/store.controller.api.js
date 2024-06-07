const db = require("../../../db/models");

module.exports = (req, res) => {
  const { title, price, description, chefId, section, available } = req.body;
  let newImages = [];
  if (req.files.imagesSecondary?.length) {
    newImages = req.files.imagesSecondary?.map((img) => {
      return {
        file: img.filename,
      };
    });
  }

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
    imagesSecondary: newImages,
  },{
    include: ["imagesSecondary"]
  })
    .then(() => {

      res.status(201).json({
        ok: true,
        msg: "Producto creado con éxito",
      });
      
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        msg: err.message,
      });
    });
};
