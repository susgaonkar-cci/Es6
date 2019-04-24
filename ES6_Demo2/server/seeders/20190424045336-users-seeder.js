'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {


      Example:
      return queryInterface.bulkInsert('users', [{
        username: 'sanaat',
        password:'12333',
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
