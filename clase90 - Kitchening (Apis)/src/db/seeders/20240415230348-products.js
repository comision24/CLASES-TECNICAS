'use strict';

const productsJSON = require("../../database/products.json")
const chefsJSON = require("../../database/chefs.json")

const productsDBMapped = productsJSON.map((p) => {

  const chef = chefsJSON.find(c => c.name === p.chef)

  return {
    title: p.title,
    price: p.price,
    description: p.description,
    imagePrincipal: p.imagePrincipal,
    chefId: chef ? chef.id : null,
    sale: p.sale,
    newest: p.newest,
    free: p.free,
    available: p.available
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Products', productsDBMapped, {});
   
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Products', null, {});
     
  }
};
