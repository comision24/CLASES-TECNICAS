'use strict';

const viewBannersJSON = require("../../database/viewBanners.json")
const viewsJSON = require("../../database/views.json")
const bannersDBMapped = viewBannersJSON.map(b => {
  const view = viewsJSON.find(v => v.name === b.view)
  const imagesBanner = b.banners.map(img => {
      return {
        viewId: view ? view.id : null,
        file: img.file,
        title: img.title,
        subtitle: img.subtitle,
        paragraph: img.paragraph
      }
  })
  return imagesBanner;
}).flat(1);



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Banners', bannersDBMapped, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Banners', null, {}); 
  }
};
