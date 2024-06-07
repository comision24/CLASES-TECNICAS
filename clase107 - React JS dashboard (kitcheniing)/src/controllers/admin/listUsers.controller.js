// const { loadData } = require("../../database");
const db = require("../../db/models");
module.exports = (req, res) => {
  // const products = loadData()

  db.User.findAll({
    include: ["role"]
  })
  .then((users) => {
    res.render(
      "admin/listUsers",
      {
        users,
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
