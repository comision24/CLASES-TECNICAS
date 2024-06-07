const db = require("../../../db/models");
const { literal } = require("sequelize");
const getOriginUrl = require("../../utils/getOriginUrl");
const { ErrorCustom } = require("../../utils/createError");

module.exports = async (req, res) => {
  try {

  const {page = "1", limit = "5"} = req.query

  if (isNaN(+page) || isNaN(+limit))
    throw new ErrorCustom(400, "El formato de página o límite no es válido");

  const { docs: products, pages, total } = await db.Product.paginate({
    page: +page,
    paginate: +limit,
    include: [
      {
        association: "imagesSecondary",
        attributes: {
          include: [
            [
              literal(`CONCAT('${getOriginUrl(req)}/api/products/', file)`),
              "imageSecondary_url",
            ]
          ],
        },
      },
      {
        association: "chef",
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
      include: [
        [
          literal(
            `CONCAT('${getOriginUrl(req)}/api/products/', imagePrincipal)`
          ),
          "imagePrincipal_url",
        ],
        [
          literal(`CONCAT('${getOriginUrl(req)}/productos/detalle/', Product.id)`),
          "detail"
        ]
      ],
    },
  })
   

      const nextPage = pages === +page || page > pages ? null : +page + 1;
      const previosPage = page > 1 || +page === pages ? +page - 1 : null

      return res.status(200).json({
        ok: true,
        pages,
        total,
        next: nextPage ? getOriginUrl(req) + "/api/products?page=" + nextPage : null,
        prev: previosPage ? getOriginUrl(req) + "/api/products?page=" + previosPage : null,
        data: products,
      });
   
    } catch(err) {
      res.status(err.status || 500).json({
        ok: false,
        msg: err.message,
      })
    }
    
};
