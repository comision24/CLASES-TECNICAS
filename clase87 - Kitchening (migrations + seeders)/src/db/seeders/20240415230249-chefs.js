'use strict';


const chefsJSON = require("../../database/chefs.json")

const chefsDBMapped = chefsJSON.map(c => {
  return {
    name: c.name,
    image: c.photo
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Chefs', chefsDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chefs', null, {});
     
  }
};
