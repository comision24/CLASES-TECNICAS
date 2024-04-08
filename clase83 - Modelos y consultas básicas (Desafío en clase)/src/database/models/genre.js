module.exports = (sequelize, DataTypes) => {
  const alias = "Genre";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
  };

  const config = {
    timestamps: true,
    tableName: "genres",
  };

  const Genre = sequelize.define(alias, cols, config);
  return Genre;
};
