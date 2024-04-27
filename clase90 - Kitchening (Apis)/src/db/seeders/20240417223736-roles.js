"use strict";

const rolesJSON = require("../../database/roles.json");

const rolesDBMapped = rolesJSON.map((r) => {
  return { name: r.name };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", rolesDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
