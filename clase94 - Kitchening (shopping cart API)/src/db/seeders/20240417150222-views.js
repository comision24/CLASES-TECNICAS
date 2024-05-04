"use strict";
const viewsJSON = require("../../database/views.json");
const viewsDBMapped = viewsJSON.map((v) => {
  return {
    name: v.name,
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Views", viewsDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Views", null, {});
  },
};
