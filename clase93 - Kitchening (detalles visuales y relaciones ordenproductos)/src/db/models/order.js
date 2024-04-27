'use strict';
const {
  Model
} = require('sequelize');
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
        as: "products"
      })

      Order.belongsTo(models.User,{
        foreignKey:"userId",
        as: "user"
      })
    }
  }
  Order.init({
    total: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    paranoid: true
  });
  return Order;
};