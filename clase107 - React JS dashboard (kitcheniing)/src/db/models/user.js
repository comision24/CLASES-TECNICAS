"use strict";
const bcrypt = require("bcryptjs");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "role",
      });
      User.hasMany(models.Address, {
        foreignKey: "userId",
        as: "addresses",
      });

      User.hasMany(models.Order, {
        foreignKey: "userId",
        as: "orders"
      })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(valuePass) {
          this.setDataValue("password", bcrypt.hashSync(valuePass));
        },
      },
      avatar: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
      // deletedAt: "dateDelete"
    }
  );
  return User;
};
