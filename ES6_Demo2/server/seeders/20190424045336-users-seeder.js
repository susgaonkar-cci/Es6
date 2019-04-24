'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('users', [{
        username: 'sanat@gmail.com',
        password:'1222',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
