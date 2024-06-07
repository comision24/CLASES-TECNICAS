const db = require("../../db/models");
const fetch = require("node-fetch");

module.exports = (req, res) => {
  if (req.session?.userLogin) {
        db.User.findOne({
          where: {
            id: req.session?.userLogin?.id,
          },
          include: ["addresses"],
        }).then((user) => {
          res.render("users/profile", { user });
        });
  }
};
