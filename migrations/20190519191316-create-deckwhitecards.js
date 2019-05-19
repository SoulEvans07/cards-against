'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DeckWhiteCards', {
      deckId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      whiteId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeckWhiteCards');
  }
};
