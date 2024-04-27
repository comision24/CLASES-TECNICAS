'use strict';

const productsJSON = require("../../database/products.json")

const imagesSecondaryDBMapped = productsJSON.map((p) => {
  const images = p.imagesSecondary.map(img => {
    return {
      file: img,
      productId: p.id
    }
  })
  return images
}).flat(1);


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ImageSecondaries', imagesSecondaryDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ImageSecondaries', null, {});
     
  }
};
