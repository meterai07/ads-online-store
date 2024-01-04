"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   Users.hasOne(models.Sellers, { foreignKey: "userId" });
    //   Users.hasOne(models.Customers, { foreignKey: "userId" });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["seller", "customer"],
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
