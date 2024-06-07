const db = require("../../../db/models");
const { literal } = require("sequelize");
const getOriginUrl = require("../../utils/getOriginUrl");

module.exports = (req, res) => {
  const {page} = req.query
  db.Product.paginate({
    page: +page,
    paginate: 10,
    include: [
      {
        association: "imagesSecondary",
        attributes: {
          include: [
            [
              literal(`CONCAT('${getOriginUrl(req)}/api/products/', file)`),
              "imageSecondaryAPI",
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
          "imagePrincipalAPI",
        ],
        [
          literal(`CONCAT('${getOriginUrl(req)}/productos/detalle/', Product.id)`),
          "detail"
        ]
      ],
    },
  })
    .then(({ docs: products, pages, total }) => {

      const nextPage = pages === +page || page > pages ? null : +page + 1;
      console.log(nextPage)
      const previosPage = +page > 1 && page < pages ? +page - 1 : null

      res.status(200).json({
        ok: true,
        pages,
        total,
        next: nextPage ? getOriginUrl(req) + "/api/products?page=" + nextPage : null,
        prev: previosPage ? getOriginUrl(req) + "/api/products?page=" + previosPage : null,
        data: products,
      });
    })
    .catch((err) => {
      res.status(500).json({
        ok: false,
        msg: err.message,
      });
    });
};
