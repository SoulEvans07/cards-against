'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [{
      id: 0,
      name: 'Test Room #1',
      creatorId: 0
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms',
      { id: 0 }, {});
  }
};
