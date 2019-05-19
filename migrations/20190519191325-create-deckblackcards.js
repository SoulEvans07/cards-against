'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DeckBlackCards', {
      deckId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      blackId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeckBlackCards');
  }
};
