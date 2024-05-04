const { Op } = require("sequelize");
const db = require("../../../db/models");
const { getOrderPending } = require("../../utils");
const getTotalOrder = require("../../utils/getTotalOrder");

module.exports = async (req, res) => {
  try {
    const { id: productId } = req.params;

    if (!productId) throw new Error("El id no fue recibido");

    let [order, isCreate] = await getOrderPending(req);

    await db.OrderProduct.create({
      orderId: order.id,
      productId,
    });

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

    res.status(201).json({
      ok: true,
      msg: "Producto agregado al carrito con éxito",
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
  // res.status(200).json({ ok: true, msg: "ok" });
};
