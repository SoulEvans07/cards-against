'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlayerHand', {
      playerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      cardId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlayerHand');
  }
};
