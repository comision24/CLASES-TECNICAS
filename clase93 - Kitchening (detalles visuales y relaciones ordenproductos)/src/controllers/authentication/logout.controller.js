module.exports = (req, res) => {
  req.session.destroy();
  res.cookie("userLogin", "", { maxAge: -1 });

  res.redirect("/")
};
