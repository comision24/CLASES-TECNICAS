module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    description: {
      type: DataTypes.TEXT,
    },
    imagePrincipal: {
      type: DataTypes.STRING(60),
    },
    sale: {
      type: DataTypes.BOOLEAN,
    },
    newest: {
      type: DataTypes.BOOLEAN,
    },
    free: {
      type: DataTypes.BOOLEAN,
    },
    available: {
      type: DataTypes.BOOLEAN,
    },
  },{
    tableName:"products",
    timestamps: false
  });

  return Product;
};
