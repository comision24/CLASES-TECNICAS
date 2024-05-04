const db = require("../../db/models");
const fetch = require("node-fetch");

module.exports = (req, res) => {
  if (req.session?.userLogin) {
    const provincesPromise = fetch(
      "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
    ).then((res) => res.json());
    const municipiosPromise = fetch(
      "https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=1000"
    ).then((res) => res.json());

    Promise.all([provincesPromise, municipiosPromise]).then(
      ([{ provincias: provinces }, { municipios: cities }]) => {

        db.User.findOne({
          where: {
            id: req.session?.userLogin?.id,
          },
          include: ["addresses"],
        }).then((user) => {
          res.render("users/profile", { user, provinces, cities });
        });
      }
    );
  }
};
