'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Banner.init({
    view: DataTypes.STRING,
    file: DataTypes.STRING,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    paragraph: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Banner',
    timestamps: false
  });
  return Banner;
};