const { literal } = require("sequelize");
const { getOrderPending } = require("../../utils");
const getOriginUrl = require("../../utils/getOriginUrl");

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
            attributes: {
              include: [
                [
                  literal(
                    `CONCAT('${getOriginUrl(req)}/api/products/', imagePrincipal)`
                  ),
                  "imagePrincipal",
                ],
              ],
            },

            include: [{
              association: "imagesSecondary",
              attributes: {
                include: [[literal(`CONCAT( '${getOriginUrl(req)}/api/products/', file)`), "file",]]
              }
            }],
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
