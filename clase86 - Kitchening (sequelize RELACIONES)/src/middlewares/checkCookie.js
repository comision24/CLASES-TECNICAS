module.exports = (req, res, next) => {
  if (req.cookies.userLogin) {
    req.session.userLogin = req.cookies.userLogin;
  }

  next();
};
