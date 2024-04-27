const db = require("../../db/models");

module.exports = (req, res) => {

  db.Order.findAll({
    include:["user", "products"]
  })
  .then((orders) => {
    res.render(
      "admin/listOrders",
      {
        orders,
      },
      (err, content) => {
        err && res.send(err.message);
        res.render("partials/dashboard", {
          contentView: content,
        });
      }
    );
  })
};
