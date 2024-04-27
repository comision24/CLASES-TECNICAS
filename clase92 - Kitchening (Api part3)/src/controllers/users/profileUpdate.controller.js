const db = require("../../db/models");

module.exports = (req, res) => {
  const { name, city, surname, country, province, zipCode, street, streetNo } =
    req.body;

  const avatar = req.file?.filename;

  db.User.update(
    {
      name: name?.trim(),
      surname: surname.trim(),
      avatar,
    },
    {
      where: { id: req.session?.userLogin?.id },
    }
  )
    .then(() => {
      db.Address.update(
        {
          country,
          province,
          zipCode,
          street,
          city,
          streetNo,
        },
        {
          where: {
            userId: req.session?.userLogin?.id,
            active: true,
          },
        }
      );
    })
    .then(() => {
      res.redirect("/usuario/perfil");
    });
};
