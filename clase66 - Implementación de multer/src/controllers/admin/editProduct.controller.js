const { saveData, loadData } = require("../../database");

module.exports = (req, res) => {
  const products = loadData()
  const { id } = req.params;
  const { title, price, description, chef, section, available } = req.body;

  let newImages = []
  if(req.files.imagesSecondary?.length) {
    newImages = req.files.imagesSecondary?.map(img => img.filename)
  }

  const productsMap = products.map((p) => {
    if (p.id === +id) {
      const productEdit = {
        ...p,
        title: title.trim(),
        price: +price,
        description: description.trim(),
        chef: chef.trim(),
        imagePrincipal: req.files.imagePrincipal?.length ? req.files.imagePrincipal[0]?.filename : p.imagePrincipal,
        imagesSecondary: newImages.length ? newImages : p.imagesSecondary,
        sale: section === "sale",
        newest: section === "newest",
        free: section === "free",
        available: !!available,
        image: req.file ? req.file.filename : p.image
      };

      return productEdit;
    }

    return p;
  });

  saveData(productsMap);
  res.redirect("/admin/productos");
};
