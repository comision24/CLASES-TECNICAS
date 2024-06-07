"use strict";
const sequelizePaginate = require("sequelize-paginate")
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product.hasMany(models.ImageSecondary,{
        foreignKey: "productId",
        as: "imagesSecondary",
      })

      Product.belongsTo(models.Chef, {
        foreignKey: "chefId",
        as: "chef"
      })

      Product.belongsToMany(models.Order, {
        through: "orderproducts",
        foreignKey: "productId",
        otherKey: "orderId",
        as: "orders"
      })

    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER,
       /*  get() {
          return toThousand(this.getDataValue("price"))
        } */
      },
      description: DataTypes.TEXT,
      imagePrincipal: DataTypes.STRING,
      chefId: DataTypes.INTEGER,
      sale: DataTypes.BOOLEAN,
      newest: DataTypes.BOOLEAN,
      free: DataTypes.BOOLEAN,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product", /* products */
      onDelete: "CASCADE",
      paranoid: true
    }
  );

  sequelizePaginate.paginate(Product)
  return Product;
};
