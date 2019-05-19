'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RoomPlayers', {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      playerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RoomPlayers');
  }
};
