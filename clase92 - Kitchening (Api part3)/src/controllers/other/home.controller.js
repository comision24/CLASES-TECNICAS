const db = require("../../db/models")

module.exports = (req, res) => {

  const banner = ["img-banner.jpg", "img-banner2.jpeg","img-banner3.jpeg"];
  db.Product.findAll({
    limit: 4
  })
  .then((products) => {
    res.render("./other/home", {
      bannerImages: banner,
      products
    })
  })
};
