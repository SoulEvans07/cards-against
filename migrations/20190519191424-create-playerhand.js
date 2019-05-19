'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlayerHand', {
      playerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'Players', key: 'id' }
      },
      WhiteCardId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'WhiteCards', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlayerHand');
  }
};
