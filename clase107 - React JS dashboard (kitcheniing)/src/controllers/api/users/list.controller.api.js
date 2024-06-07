const { literal } = require("sequelize");
const db = require("../../../db/models");
const { ErrorCustom } = require("../../utils/createError");
const getOriginUrl = require("../../utils/getOriginUrl");
module.exports = async (req, res) => {
  try {
    const { page = "1", limit = "5" } = req.query;
    if (isNaN(+page) || isNaN(+limit))
      throw new ErrorCustom(400, "El formato de página o límite no es válido");

    const {
      docs: users,
      pages,
      total,
    } = await db.User.paginate({
      page: +page,
      paginate: +limit,
      include: [
        {
          association: "role",
          attributes: ["name", "id"],
        },
        "addresses",
      ],
      attributes: {
        exclude: ["createdAt", "deletedAt", "updatedAt", "roleId", "password"],
        include: [
          [
            literal(`CONCAT('${getOriginUrl(req)}/api/users/', avatar)`),
            "avatar_url",
          ],
        ],
      },
    });

    const nextPage = pages === +page || page > pages ? null : +page + 1;
    const previosPage = page > 1 || +page === pages ? +page - 1 : null;

    return res.status(200).json({
      ok: true,
      pages,
      total,
      next: nextPage
        ? getOriginUrl(req) + "/api/products?page=" + nextPage
        : null,
      prev: previosPage
        ? getOriginUrl(req) + "/api/products?page=" + previosPage
        : null,
      data: users,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      ok: false,
      msg: error.message,
    });
  }
};
