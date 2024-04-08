const db = require("../database/models")
const {Op} = db.Sequelize

module.exports = {
  list: (req,res) => {

    db.Movie.findAll()
    .then((movies) => {

      res.render("moviesList",{
        movies
      })

    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  detail: (req,res) => {
    const {id} = req.params
    db.Movie.findByPk(id)
    .then((movie) => {
      res.render("moviesDetail", {
        movie
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  new: (req,res) => {
    db.Movie.findAll({
      order: [
        ["release_date","desc"]
      ]
    })
    .then((movies) => {
      res.render("newestMovies", {
        movies
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  recommended: (req,res) => {
    db.Movie.findAll({
      where: {
        [Op.and] : [
          {
            rating: {
              [Op.gte] : 8
            }
          },
          {
            awards: {
              [Op.gte] : 2
            }
          }
        ]
      },
      order:[
        ["release_date","desc"],
        ["rating","desc"],
        ["title","desc"]
      ]
    })
    .then((movies) => {
      res.render("recommendedMovies",{ movies })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  }
}

