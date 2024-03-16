const { loadData, saveData } = require("../../data");
const path = require("path")
const fs = require("fs")
module.exports = (req, res) => {
  const { id } = req.params;
  const { name, price, discount, description, category } = req.body;
  const image = req.file
  const products = loadData();
  const productsMapped = products.map((p) => {
    if (p.id === +id) {
      const productUpdate = {
        ...p,
        name: name.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        category: category.trim(),
        image: image ? image.filename : p.image
      };

      if(image?.filename) {

        const pathBeforeFile = path.join(__dirname,"../../../public/images/products/" + p.image)
        const existFile = fs.existsSync(pathBeforeFile)
        if(existFile) {
          fs.unlinkSync(pathBeforeFile)
        }
      }

      return productUpdate
    }
    return p
  });

  saveData(productsMapped)

  res.redirect(`/productos/detalle/${id}`);
};
