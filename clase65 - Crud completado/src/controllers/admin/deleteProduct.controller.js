module.exports = (req, res) => {
  const { id, title } = req.query;

  res.render("admin/deleteProduct", { id, title }, (err, contentView) => {
    err && res.send(err.message)

    res.render("partials/dashboard", { contentView })
  });
};
