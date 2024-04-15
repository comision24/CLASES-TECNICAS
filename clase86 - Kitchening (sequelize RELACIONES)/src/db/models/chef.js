'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chef.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    foodFavorite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chef',
    timestamps: false
  });
  return Chef;
};