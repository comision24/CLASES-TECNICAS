const { Op } = require("sequelize");
const db = require("../../../db/models");

module.exports = async (req, res) => {
  try {
    const { id: productId } = req.params;

    if(!productId) throw new Error("El id no fue recibido")

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
      include: ["products"],
    });

    await db.OrderProduct.create({
      orderId: order.id,
      productId,
    });

    res.status(201).json({
      ok: true,
      msg: "Producto agregado al carrito con éxito"
    });
    
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
  // res.status(200).json({ ok: true, msg: "ok" });
};
