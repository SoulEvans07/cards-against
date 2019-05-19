'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DeckWhiteCards', {
      deckId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Decks', key: 'id' }
      },
      whiteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'WhiteCards', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeckWhiteCards');
  }
};
