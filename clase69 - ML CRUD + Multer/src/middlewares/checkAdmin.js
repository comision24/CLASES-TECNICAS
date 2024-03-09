const { loadData } = require("../data")

module.exports =(req, res, next) => {
  const users = loadData("users")
  const user = users[1]

  if(user.role === "ADMIN") {
   return next()
  }

  return res.redirect("/")
}