const db = require("../../../db/models");

module.exports = async (req, res) => {
  const query = `
  SELECT 'Total de usuarios' AS description, COUNT(id) AS count FROM users
  UNION ALL
  SELECT 'Total de productos' AS description, COUNT(id) AS count FROM products
  UNION ALL
  SELECT 'Total de ordenes' AS description, COUNT(id) AS count FROM orders
  UNION ALL
  SELECT 'Total de chefs' AS description, COUNT(id) AS count FROM chefs
  `;

  try {
    const [data] = await db.sequelize.query(query);

    return res.status(200).json({
      ok: true,
      data,
    });

  } catch (error) {
    res.status(error.status || 500).json({
      ok: false,
      msg: error.message,
    });
  }

};
