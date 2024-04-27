// const { loadData } = require("../../database");
const db = require("../../db/models");
module.exports = (req, res) => {
  // const products = loadData()

  db.Product.findAll({
    // include: ["imagesSecondary", "chef"]

    attributes: {
      exclude: [
        "createdAt",
        "updatedAt",
        "chefId",
        "sale",
        "newest",
        "free",
        "available"
      ],
    },
    include: [
      {
        association: "imagesSecondary",
        attributes: ["file"],

        // attributes: {
        //   exclude: ["id","productId"]
        // }
      },
      {
        association: "chef",
        attributes: ["name"],

        // attributes: {
        //   exclude: ["id","image"]
        // }
      },
    ],
  }).then((products) => {
    // return res.send(products);
    res.render(
      "admin/listProducts",
      {
        products,
      },
      (err, content) => {
        err && res.send(err.message);
        res.render("partials/dashboard", {
          contentView: content,
        });
      }
    );
  });
};
