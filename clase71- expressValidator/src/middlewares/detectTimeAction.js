module.exports = (req, res, next) => {
  // req.body
  // req.query
  // req.params

  // res.send
  // res.sendFile
  // res.render

  const createdAt = new Date();

  req.createdAt = createdAt;

  next();
};
