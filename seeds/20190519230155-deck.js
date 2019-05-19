'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Decks', [{
      id: 0,
      name: 'Basic Deck',
      creatorId: 0
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Decks',
      { id: 0 }, {});
  }
};
