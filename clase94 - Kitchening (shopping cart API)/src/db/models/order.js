"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsToMany(models.Product, {
        through: "orderproducts",
        foreignKey: "orderId",
        otherKey: "productId",
        as: "products",
      });

      Order.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Order.init(
    {
      total: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      userId: DataTypes.INTEGER,
      state: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["completed", "pending", "canceled"]],
            msg: "Los valores validos de estado son 'completed', 'pending' o 'canceled'",
          },
        },
        defaultValue: "pending"
      },
    },
    {
      sequelize,
      modelName: "Order",
      paranoid: true,
    }
  );
  return Order;
};
