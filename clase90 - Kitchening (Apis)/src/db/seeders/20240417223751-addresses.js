'use strict';

const usersJSON = require("../../database/users.json")

const addressesDBMapped = usersJSON.map(u => {
  const addressUser = u.addresses.map(a => {
    return {
      active: a.default,
      street: a.street,
      streetNo: a.num,
      city: a.city,
      province: a.province,
      zipCode: a.cp,
      country: a.country,
      userId: u.id
    }
  })
  return addressUser;
}).flat(1)


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', addressesDBMapped, {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
