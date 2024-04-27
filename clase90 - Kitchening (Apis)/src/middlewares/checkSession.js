module.exports = (req, res, next) => {
  if (req.session.userLogin) {
    res.locals.userLogin = req.session.userLogin; // nos permite obtener la info de la session en la vista
  }

  next();
};
