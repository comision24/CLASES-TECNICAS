const { Op } = require("sequelize");
const db = require("../../../db/models");
const { getOrderPending } = require("../../utils");
const getTotalOrder = require("../../utils/getTotalOrder");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    let [order, isCreate] = await getOrderPending(req);

    const record = await db.OrderProduct.findOne({
      where: {
        [Op.and]: [
          {
            orderId: order.id,
          },
          {
            productId: id,
          },
        ],
      },
    });

    if(record.quantity > 1){
      record.quantity--;
      await record.save();

      order = await order.reload({
        include: [
          {
            association: "products",
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      });
      const total = getTotalOrder(order.products);
      order.total = total;
      await order.save();
    }


    res.status(200).json({
      ok: true,
      msg: "Cantidad descontada con éxito",
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error.message,
    });
  }
};
