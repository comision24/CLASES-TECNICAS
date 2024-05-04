module.exports = (req, res, next) => {
  if (!req.session.userLogin) {
    res.redirect("/autenticacion/iniciar"); // nos permite obtener la info de la session en la vista
  } else {
    next();
  }
};
