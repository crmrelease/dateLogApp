module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "test",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
    }
  );
