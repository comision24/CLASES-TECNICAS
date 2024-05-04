const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const [order, isCreate] = await getOrderPending(req);

    const statusCode = isCreate ? 201 : 200;
    res.status(statusCode).json({
      ok: true,
      isCreate,
      data: await order.reload({
        include: [
          {
            association: "products",
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      }),
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
  
};
