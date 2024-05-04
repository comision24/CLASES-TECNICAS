// const { loadData } = require("../../database");
const db = require("../../db/models");
module.exports = (req, res) => {
  // const products = loadData()

  db.Chef.findAll()
  .then((chefs) => {
    res.render(
      "admin/listChefs",
      {
        chefs,
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
