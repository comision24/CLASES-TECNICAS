const db = require("../../db/models");
const { Op } = db.Sequelize;

module.exports = (req, res) => {
  const {keyword, available, quantityItems, offset} = req.query
  /* FIND ALL */
  /* db.Product.findAll()
  .then(result => res.send(result)) */

  /* FIND ONE */
  /* db.Product.findOne({
    where:{
      id: 1
    }
  })
  .then(result => res.send(result)) */

  /* FIND BY PK (PRIMARY KEY) */
  /* db.Product.findByPk(2)
  .then(result => res.send(result)) */

  /* FIND ONE (FIND BY PRICE) */
  /* 
    SELECT * FROM products WHERE price = 10530 LIMIT 1;
  */
  /* db.Product.findOne({
    where:{
      price: 10530
    }
  })
  .then(result => res.send(result)) */

  /* BÚSQUEDA CON QUERY DESDE CLIENTE (AND) */
  /* db.Product.findAll({
    where: {
      description: {
        [Op.substring]: keyword
      },
      available: {
        [Op.eq] : available === "true"
      }
    },
  }).then((result) => res.send(result)); */

  /* BÚSQUEDA CON QUERY DESDE CLIENTE (OR)*/
  /* db.Product.findAll({
    where: {
      [Op.or] : [
        {
          description: {
            // [Op.like]: `%${keyword}%`
            [Op.substring]: keyword
          }
        },
        {
          available: {
            [Op.eq] : available === "true"
          }
        }
      ]
    },
  }).then((result) => res.send(result)); */


  /* BUSCAR TODO CON ORDEN, LIMITE Y SALTO */
  db.Product.findAll({
   /*  limit: +quantityItems,
    offset: +offset, */
    order: [
      ["id", "DESC"]
    ]
  })
  .then((result) => res.send(result));

};
