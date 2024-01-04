"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Tengku Muhammad Rafi Rahardiansyah",
        phone: "081234567890",
        email: "tengkumrafir@gmail.com",
        password: bcrypt.hashSync("password", 10),
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Muhammad Rafi",
        phone: "0987654321",
        email: "rafishop@gmail.com",
        password: bcrypt.hashSync("password", 10),
        role: "seller",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
