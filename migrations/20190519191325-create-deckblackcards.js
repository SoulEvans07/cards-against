'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DeckBlackCards', {
      deckId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Decks', key: 'id' }
      },
      blackId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'BlackCards', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeckBlackCards');
  }
};
