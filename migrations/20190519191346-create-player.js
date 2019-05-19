'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Player', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ready: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Player');
  }
};
