const { Op } = require("sequelize");
const db = require("../../../db/models");

module.exports = async (req, res) => {
  try {
    const [order, isCreate] = await db.Order.findOrCreate({
      where: {
        [Op.and]: [
          {
            userId: 2, // req.session?.userLogin?.id,
          },
          {
            state: "pending",
          },
        ],
      },
      defaults: {
        userId: 2, // req.session?.userLogin?.id,
      },
      include: ["products"]
    });

    const statusCode = isCreate ? 201 : 200;
    res.status(statusCode).json({
      ok: true,
      isCreate,
      data: await order.reload({ include: ["products"] }),
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
  // res.status(200).json({ ok: true, msg: "ok" });
};
